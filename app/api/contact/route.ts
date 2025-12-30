import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Initialize Resend only if API key is available
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

// Rate limiting: Map to store IP addresses and their request timestamps
const rateLimitMap = new Map<string, number[]>()
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const MAX_REQUESTS_PER_WINDOW = 3 // Max 3 requests per minute

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Escape HTML to prevent XSS
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }
  return text.replace(/[&<>"']/g, (char) => map[char])
}

// Rate limiting check
function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const requestTimestamps = rateLimitMap.get(ip) || []

  // Filter out timestamps outside the current window
  const recentRequests = requestTimestamps.filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW
  )

  if (recentRequests.length >= MAX_REQUESTS_PER_WINDOW) {
    return false // Rate limit exceeded
  }

  // Add current request timestamp
  recentRequests.push(now)
  rateLimitMap.set(ip, recentRequests)

  return true
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown'

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    const body = await request.json()
    const { name, email, message, honeypot } = body

    // Honeypot check - if filled, it's likely a bot
    if (honeypot) {
      console.log('Honeypot triggered - potential bot detected')
      return NextResponse.json({ success: true }) // Fake success to not alert bots
    }

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate field types
    if (typeof name !== 'string' || typeof email !== 'string' || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Invalid field types' },
        { status: 400 }
      )
    }

    // Validate field lengths
    if (name.length < 2 || name.length > 100) {
      return NextResponse.json(
        { error: 'Name must be between 2 and 100 characters' },
        { status: 400 }
      )
    }

    if (email.length > 255) {
      return NextResponse.json(
        { error: 'Email is too long' },
        { status: 400 }
      )
    }

    if (message.length < 10 || message.length > 5000) {
      return NextResponse.json(
        { error: 'Message must be between 10 and 5000 characters' },
        { status: 400 }
      )
    }

    // Validate email format
    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Sanitize inputs
    const sanitizedName = escapeHtml(name.trim())
    const sanitizedEmail = email.trim().toLowerCase()
    const sanitizedMessage = escapeHtml(message.trim())

    // If Resend API key is not configured, just return success (for development)
    if (!resend) {
      console.log('Contact form submission (no Resend API key):', {
        name: sanitizedName,
        email: sanitizedEmail,
        message: sanitizedMessage,
      })
      return NextResponse.json({ success: true })
    }

    // Send email using Resend
    await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL || 'adrianna@example.com',
      replyTo: sanitizedEmail,
      subject: `Nowa wiadomość od ${sanitizedName}`,
      html: `
        <h2>Nowa wiadomość z formularza kontaktowego</h2>
        <p><strong>Od:</strong> ${sanitizedName} (${sanitizedEmail})</p>
        <p><strong>Wiadomość:</strong></p>
        <p>${sanitizedMessage.replace(/\n/g, '<br>')}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}

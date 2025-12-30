'use client'

import { Component, ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

/**
 * ErrorBoundary
 * Catches JavaScript errors in child components
 * Displays fallback UI instead of crashing
 */
export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: any) {
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo)
    }
  }

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback
      }

      // Default fallback UI
      return (
        <div className="flex min-h-screen items-center justify-center bg-navy-50 px-6">
          <div className="max-w-md text-center">
            <div className="mb-6 text-6xl">⚠️</div>
            <h1 className="mb-4 font-display text-3xl font-bold text-navy-900">
              Coś poszło nie tak
            </h1>
            <p className="mb-8 text-navy-700">
              Przepraszamy, wystąpił nieoczekiwany błąd. Spróbuj odświeżyć stronę.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="rounded-full bg-navy-900 px-8 py-3 font-medium text-white transition-colors hover:bg-navy-800"
            >
              Odśwież stronę
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

'use client'

import { motion } from 'framer-motion'
import { Circle, Triangle, Square } from 'lucide-react'

/**
 * DecorativeDivider
 * Simple visual divider with organic shapes
 */
export default function DecorativeDivider() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white via-navy-50 to-white py-24">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center gap-8">
          {/* Shape 1 */}
          <motion.div
            initial={{ scale: 0, rotate: 0 }}
            whileInView={{ scale: 1, rotate: 360 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100">
              <Circle className="h-8 w-8 text-yellow-600" strokeWidth={1.5} />
            </div>
          </motion.div>

          {/* Shape 2 */}
          <motion.div
            initial={{ scale: 0, rotate: 0 }}
            whileInView={{ scale: 1, rotate: -360 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-purple-100">
              <Square className="h-10 w-10 text-purple-600" strokeWidth={1.5} />
            </div>
          </motion.div>

          {/* Shape 3 */}
          <motion.div
            initial={{ scale: 0, rotate: 0 }}
            whileInView={{ scale: 1, rotate: 360 }}
            transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-pink-100">
              <Triangle className="h-8 w-8 text-pink-600" strokeWidth={1.5} />
            </div>
          </motion.div>
        </div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          viewport={{ once: true }}
          className="mx-auto mt-12 h-[1px] w-full max-w-md bg-gradient-to-r from-transparent via-navy-300 to-transparent"
        />
      </div>
    </div>
  )
}

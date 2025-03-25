'use client'

import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

export default function CTA() {
  return (
    <section id="cta" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative isolate overflow-hidden bg-primary-600 px-6 py-24 shadow-2xl rounded-3xl sm:px-24 xl:py-32"
        >
          <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Comienza tu viaje hacia la libertad financiera hoy
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-lg leading-8 text-primary-100">
            Únete a miles de personas que ya están transformando su relación con el dinero gracias a Nicolas.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <motion.a
              href="https://wa.me/15551493974?text=Hola%20Nicolás%2C%20como%20funciona%20esto%3F"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-lg bg-white px-8 py-4 text-base font-semibold text-primary-600 shadow-sm hover:bg-primary-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white flex items-center gap-2"
            >
              Pruébalo Gratis
              <FaWhatsapp className="text-primary-600" />
            </motion.a>
            <motion.a
              href="https://wa.me/15551493974?text=Hola%20Nicolás%2C%20me%20gustaría%20ver%20una%20demo"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-lg bg-primary-500 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Ver Demo
            </motion.a>
          </div>

          {/* Background sparkles */}
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#radial)"
              fillOpacity="0.4"
            />
            <defs>
              <radialGradient id="radial">
                <stop stopColor="#fff" />
                <stop offset={1} stopColor="#fff" />
              </radialGradient>
            </defs>
          </svg>
        </motion.div>
      </div>
    </section>
  )
} 
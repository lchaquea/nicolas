'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative bg-white pt-20 pb-16 sm:pt-24 sm:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-5xl md:text-6xl">
              Tu Asistente Financiero{' '}
              <span className="text-primary-600">Inteligente</span>
            </h1>
            <p className="mt-6 text-lg text-secondary-600 max-w-xl">
              Nicolas te ayuda a organizar tus finanzas de manera inteligente. Controla tus gastos, 
              establece presupuestos y recibe consejos personalizados impulsados por IA.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">
                Pruébalo Gratis
              </button>
              <button className="btn-secondary">
                Ver Demo
              </button>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="inline-block h-8 w-8 rounded-full bg-primary-100"
                  />
                ))}
              </div>
              <p className="text-sm text-secondary-600">
                +1,000 usuarios ya confían en Nicolas
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative lg:mt-0"
          >
            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0">
              <Image
                src="/nicolas-avatar.png"
                alt="Nicolas AI Assistant"
                width={400}
                height={400}
                className="mx-auto"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 
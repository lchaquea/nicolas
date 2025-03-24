'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const userAvatars = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&h=64&q=80',
  'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=64&h=64&q=80',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64&q=80',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64&q=80',
]

export default function Hero() {
  return (
    <section className="relative bg-white pt-32 pb-16 sm:pt-36 sm:pb-20">
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
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Pruébalo Gratis
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                Ver Demo
              </motion.button>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                {userAvatars.map((avatar, i) => (
                  <div key={i} className="relative w-8 h-8">
                    <Image
                      src={avatar}
                      alt={`Usuario ${i + 1}`}
                      width={32}
                      height={32}
                      className="rounded-full ring-2 ring-white"
                      sizes="32px"
                      priority={i < 2}
                    />
                  </div>
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
                src="/assets/nicolasimage.svg"
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
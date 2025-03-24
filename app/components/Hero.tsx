'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaWhatsapp } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="relative pt-40 pb-16 overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute inset-0 bg-blue-50/50"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left max-w-2xl relative z-20">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              <span className="text-secondary-400">Tu Asistente</span>{' '}
              <span className="text-primary-600">Financiero</span>{' '}
              <span className="text-secondary-400">Inteligente</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-secondary-600 mb-6 relative z-20"
            >
              Nicolás te ayuda a organizar tus finanzas de manera inteligente. Controla tus gastos, establece presupuestos y recibe consejos personalizados impulsados por IA.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center justify-center lg:justify-start gap-2 text-lg mb-8 relative z-20"
            >
              <span className="text-secondary-600">Tan sencillo como enviar un</span>
              <span className="text-[#25D366] font-medium">WhatsApp</span>
              <FaWhatsapp className="text-[#25D366] text-2xl" />
            </motion.div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start relative z-20">
              <motion.a
                href="https://wa.me/15551493974?text=Hola%20Nicolás%2C%20como%20funciona%20esto%3F"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-center"
              >
                Pruébalo Gratis
              </motion.a>
              <motion.a
                href="https://wa.me/15551493974?text=Hola%20Nicolás%2C%20me%20gustaría%20ver%20una%20demo"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary text-center"
              >
                Ver Demo
              </motion.a>
            </div>
          </div>
          <div className="flex-1 relative z-10">
            <motion.div
              className="relative"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
                <div className="absolute inset-0 bg-blue-100 rounded-full transform -translate-x-4 translate-y-4" />
                <div className="relative z-20">
                  <Image
                    src="/assets/nicolasimage.svg"
                    alt="Nicolas AI Assistant"
                    width={384}
                    height={384}
                    className="rounded-full shadow-xl"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaWhatsapp } from 'react-icons/fa'

const userAvatars = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&h=64&q=80',
  'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=64&h=64&q=80',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64&q=80',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64&q=80',
]

export default function Hero() {
  return (
    <section className="relative py-20 overflow-hidden">
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
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Tu Asistente Financiero Inteligente
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 mb-6"
            >
              Nicolás te ayuda a organizar tus finanzas de manera inteligente. Controla tus gastos, establece presupuestos y recibe consejos personalizados impulsados por IA.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center justify-center lg:justify-start gap-2 text-lg text-gray-600 mb-8"
            >
              <span>Tan sencillo como enviar un WhatsApp</span>
              <FaWhatsapp className="text-green-500 text-2xl" />
            </motion.div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
          <div className="flex-1 relative">
            <motion.div
              className="relative z-10"
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
                <Image
                  src="/nicolas-avatar.png"
                  alt="Nicolas AI Assistant"
                  width={384}
                  height={384}
                  className="relative z-10 rounded-full shadow-xl"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 
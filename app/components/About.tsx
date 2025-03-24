'use client'

import { motion } from 'framer-motion'
import { ChartBarIcon, CurrencyDollarIcon, SparklesIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Control Total',
    description: 'Mantén el control de tus finanzas con un dashboard intuitivo y herramientas de seguimiento en tiempo real.',
    icon: ChartBarIcon,
  },
  {
    name: 'IA Inteligente',
    description: 'Recibe recomendaciones personalizadas basadas en tus patrones de gasto y objetivos financieros.',
    icon: SparklesIcon,
  },
  {
    name: 'Ahorro Efectivo',
    description: 'Identifica oportunidades de ahorro y optimiza tu presupuesto con sugerencias inteligentes.',
    icon: CurrencyDollarIcon,
  },
]

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="section-title">
            ¿Por qué elegir a Nicolas?
          </h2>
          <p className="section-subtitle mx-auto">
            Nicolas es más que un asistente financiero - es tu compañero inteligente para alcanzar 
            tus metas financieras con confianza y claridad.
          </p>
        </motion.div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100">
                  <feature.icon
                    className="h-6 w-6 text-primary-600"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-16">
                  <h3 className="text-xl font-medium text-secondary-900">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-base text-secondary-600">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 
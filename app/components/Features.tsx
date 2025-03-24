'use client'

import { motion } from 'framer-motion'
import {
  BanknotesIcon,
  ChartPieIcon,
  ClockIcon,
  CogIcon,
  DocumentChartBarIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Seguimiento de Gastos',
    description: 'Monitorea cada transacción y categoriza automáticamente tus gastos.',
    icon: BanknotesIcon,
  },
  {
    name: 'Organización Financiera',
    description: 'Dashboard intuitivo para visualizar todas tus cuentas y movimientos.',
    icon: ChartPieIcon,
  },
  {
    name: 'Herramientas de Presupuesto',
    description: 'Crea y gestiona presupuestos personalizados para cada categoría.',
    icon: DocumentChartBarIcon,
  },
  {
    name: 'Resumen de Rendimiento',
    description: 'Análisis detallado de tus finanzas con insights mensuales y anuales.',
    icon: CogIcon,
  },
  {
    name: 'Alertas Inteligentes',
    description: 'Recibe notificaciones sobre gastos excesivos y oportunidades de ahorro.',
    icon: ClockIcon,
  },
  {
    name: 'Consejos Personalizados',
    description: 'Recomendaciones de inversión basadas en tu perfil financiero.',
    icon: ShieldCheckIcon,
  },
]

export default function Features() {
  return (
    <section id="features" className="bg-primary-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="section-title">
            Funcionalidades Principales
          </h2>
          <p className="section-subtitle mx-auto">
            Descubre todas las herramientas que Nicolas pone a tu disposición para 
            ayudarte a alcanzar tus objetivos financieros.
          </p>
        </motion.div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative rounded-2xl bg-white p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100">
                  <feature.icon
                    className="h-6 w-6 text-primary-600"
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-6">
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
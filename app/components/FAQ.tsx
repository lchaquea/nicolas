'use client'

import { motion } from 'framer-motion'
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "¿Cómo funciona Nicolas?",
    answer: "Nicolas utiliza inteligencia artificial para analizar tus patrones de gasto y proporcionar recomendaciones personalizadas. Conecta tus cuentas de forma segura y deja que Nicolas haga el resto.",
  },
  {
    question: "¿Es seguro usar Nicolas?",
    answer: "Absolutamente. Utilizamos encriptación de grado bancario y nunca almacenamos tus credenciales bancarias. Tu seguridad es nuestra prioridad número uno.",
  },
  {
    question: "¿Cuánto cuesta Nicolas?",
    answer: "Nicolas es gratuito durante el periodo beta. Después, ofreceremos planes flexibles adaptados a diferentes necesidades, comenzando desde $9.99/mes.",
  },
  {
    question: "¿Puedo cancelar en cualquier momento?",
    answer: "Sí, puedes cancelar tu suscripción en cualquier momento sin compromisos ni cargos ocultos.",
  },
  {
    question: "¿Con qué bancos es compatible Nicolas?",
    answer: "Nicolas es compatible con la mayoría de los bancos principales y muchas instituciones financieras menores. La lista completa está disponible durante el proceso de registro.",
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="bg-primary-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="section-title">
            Preguntas Frecuentes
          </h2>
          <p className="section-subtitle mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre Nicolas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-3xl"
        >
          <dl className="space-y-6">
            {faqs.map((faq, index) => (
              <Disclosure
                as="div"
                key={faq.question}
                className="rounded-lg bg-white p-6 shadow-sm"
              >
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-center justify-between text-left">
                        <span className="text-lg font-medium text-secondary-900">
                          {faq.question}
                        </span>
                        <ChevronDownIcon
                          className={`h-6 w-6 text-primary-600 transition-transform ${
                            open ? 'rotate-180' : ''
                          }`}
                        />
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-4">
                      <p className="text-base text-secondary-600">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  )
} 
'use client'

import { motion } from 'framer-motion'
import { StarIcon } from '@heroicons/react/24/solid'

const testimonials = [
  {
    content: "Nicolas ha transformado completamente la manera en que manejo mis finanzas. Las recomendaciones son increíblemente precisas.",
    author: "María G.",
    role: "Emprendedora",
    rating: 5,
  },
  {
    content: "La mejor inversión que he hecho para mi salud financiera. La interfaz es intuitiva y los insights son muy valiosos.",
    author: "Carlos R.",
    role: "Profesional Independiente",
    rating: 5,
  },
  {
    content: "Gracias a Nicolas, finalmente tengo control sobre mis gastos y estoy ahorrando más que nunca.",
    author: "Ana P.",
    role: "Diseñadora",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="section-title">
            Lo que dicen nuestros usuarios
          </h2>
          <p className="section-subtitle mx-auto">
            Descubre cómo Nicolas está ayudando a miles de personas a mejorar su salud financiera.
          </p>
        </motion.div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl bg-white p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className="h-5 w-5 text-yellow-400"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="mt-4 text-lg text-secondary-600">
                  "{testimonial.content}"
                </p>
                <div className="mt-6">
                  <p className="font-medium text-secondary-900">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-secondary-600">
                    {testimonial.role}
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
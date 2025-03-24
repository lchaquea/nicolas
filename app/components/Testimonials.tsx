'use client'

import { motion } from 'framer-motion'
import { StarIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

const testimonials = [
  {
    content: "Nicolas ha transformado completamente la manera en que manejo mis finanzas. Las recomendaciones son increíblemente precisas.",
    author: "María G.",
    role: "Emprendedora",
    rating: 5,
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=128&h=128&q=80"
  },
  {
    content: "La mejor inversión que he hecho para mi salud financiera. La interfaz es intuitiva y los insights son muy valiosos.",
    author: "Carlos R.",
    role: "Profesional Independiente",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=128&h=128&q=80"
  },
  {
    content: "Gracias a Nicolas, finalmente tengo control sobre mis gastos y estoy ahorrando más que nunca.",
    author: "Ana P.",
    role: "Diseñadora",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=128&h=128&q=80"
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
                <div className="mt-6 flex items-center gap-4">
                  <div className="relative h-12 w-12">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-secondary-900">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-secondary-600">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            Únete a Nuestra Comunidad
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
} 
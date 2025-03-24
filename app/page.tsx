'use client'

import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import WhatsAppButton from './components/WhatsAppButton'

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <About />
        <Features />
        <Testimonials />
        <FAQ />
        <CTA />
        <WhatsAppButton />
      </main>
    </>
  )
} 
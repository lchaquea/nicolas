import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nicolas - Tu Asistente Financiero Personal con IA',
  description: 'Organiza tus finanzas de manera inteligente con Nicolas, tu asistente financiero personal impulsado por IA. Seguimiento de gastos, presupuestos y consejos personalizados.',
  keywords: 'finanzas personales, IA financiera, gestión de dinero, presupuesto personal, ahorro inteligente',
  openGraph: {
    title: 'Nicolas - Tu Asistente Financiero Personal con IA',
    description: 'Organiza tus finanzas de manera inteligente con Nicolas.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body className="bg-white">
        {children}
      </body>
    </html>
  )
} 
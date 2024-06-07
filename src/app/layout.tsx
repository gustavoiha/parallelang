import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Parallelang',
  description: 'Learn a new language by reading texts in parallel.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="bg-cyan-950 text-amber-50 font-sans tracking-wide h-full">
        {children}
      </body>
    </html>
  )
}

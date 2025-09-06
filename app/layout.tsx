import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Acting Workshop by Praveen Hingonia',
  description: '3-Day Acting Workshop - Master your craft with industry expert Praveen Hingonia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster />
        <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
      </body>
    </html>
  )
}
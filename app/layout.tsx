import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { AppContextProvider } from '@/utils/Context'
import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from 'react-hot-toast'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <AppContextProvider>
        <html lang="en">
          <body className=" bg-white">
            <div className="flex flex-col min-h-screen">
              <Header />
              <div className="flex-grow">
                {children}
                <Toaster />
              </div>
              <Footer />
            </div>
          </body>
        </html>
      </AppContextProvider>
    </ClerkProvider>
  )
}

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css'
import SessionAuthProvider from '@/context/SessionAuthProvider'
//import './globals.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ReadConnect',
  description: 'Prueba FullStack microsystem',
  authors: {name: 'Guillermo Valles Godoy'}
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' rel='stylesheet'></link>
      <body className={inter.className}>
        <main className='container'>
          <SessionAuthProvider>{children}</SessionAuthProvider>
        </main>
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Next.js Demo App',
  description: 'A simple Next.js demo application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header className="bg-blue-600 text-white p-4">
          <div className="container mx-auto">
            <h1 className="text-2xl font-bold">Next.js Demo</h1>
          </div>
        </header>
        {children}
        <footer className="bg-gray-100 p-4 mt-8">
          <div className="container mx-auto text-center text-gray-600">
            <p>© {new Date().getFullYear()} Next.js Demo Project</p>
          </div>
        </footer>
      </body>
    </html>
  )
} 
import Link from 'next/link'

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">About This Project</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <p className="mb-4">
            This is a simple Next.js 14 demo project showcasing some basic features:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>App Router with layouts and pages</li>
            <li>Client and Server Components</li>
            <li>Basic styling with Tailwind CSS</li>
            <li>Simple Todo list functionality</li>
          </ul>
          <p>
            Feel free to explore and modify this project as a starting point for your own applications.
          </p>
        </div>
        
        <Link 
          href="/"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          &larr; Back to Home
        </Link>
      </div>
    </main>
  )
} 
import Link from 'next/link'
import TodoList from '@/app/components/TodoList'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8 text-center">Next.js Demo Project</h1>
        
        <div className="mb-8 p-6 border rounded-lg bg-white shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Todo List Demo</h2>
          <TodoList />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <Link href="/about" className="p-4 border rounded-lg hover:bg-gray-100 transition-colors">
            <h2 className="text-xl font-semibold">About Page &rarr;</h2>
            <p>Learn more about this project</p>
          </Link>
          <a 
            href="https://nextjs.org/docs" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 border rounded-lg hover:bg-gray-100 transition-colors"
          >
            <h2 className="text-xl font-semibold">Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js</p>
          </a>
        </div>
      </div>
    </main>
  )
} 
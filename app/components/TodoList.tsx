'use client'

import { useState } from 'react'

interface Todo {
  id: number
  text: string
  completed: boolean
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Learn Next.js', completed: false },
    { id: 2, text: 'Build a project', completed: false },
    { id: 3, text: 'Deploy to production', completed: false },
  ])
  const [newTodoText, setNewTodoText] = useState('')

  const addTodo = () => {
    if (newTodoText.trim() === '') return
    const newTodo: Todo = {
      id: Date.now(),
      text: newTodoText,
      completed: false,
    }
    setTodos([...todos, newTodo])
    setNewTodoText('')
  }

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div>
      <div className="flex mb-4">
        <input
          type="text"
          className="flex-grow px-3 py-2 border rounded-l"
          placeholder="Add a new todo..."
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
        />
        <button 
          onClick={addTodo}
          className="px-4 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {todos.map(todo => (
          <li 
            key={todo.id} 
            className="flex items-center justify-between p-3 border rounded"
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className="mr-2 h-5 w-5"
              />
              <span className={todo.completed ? 'line-through text-gray-500' : ''}>
                {todo.text}
              </span>
            </div>
            <button 
              onClick={() => deleteTodo(todo.id)}
              className="px-2 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {todos.length === 0 && (
        <p className="text-center text-gray-500 mt-4">No todos yet. Add one above!</p>
      )}
    </div>
  )
} 
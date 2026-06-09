import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 bg-white border-b border-gray-100">
        <Link to="/" className="text-2xl font-bold text-blue-600">Nestify</Link>
      </nav>

      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="bg-white rounded-2xl shadow-sm p-8 w-full max-w-md">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back</h1>
          <p className="text-gray-500 mb-8">Sign in to your Nestify account</p>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500 text-gray-700"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500 text-gray-700"
              />
            </div>
            <div className="flex justify-end">
              <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
            </div>
            <button className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700">
              Sign In
            </button>
          </div>

          <p className="text-center text-gray-500 mt-6">
            Don't have an account?{' '}
            <Link to="/register" className="text-blue-600 font-medium hover:underline">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
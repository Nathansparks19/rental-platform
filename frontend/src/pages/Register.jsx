import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { api } from '../utils/api'

export default function Register() {
  const [role, setRole] = useState('tenant')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleRegister = async () => {
    setLoading(true)
    setError('')
    try {
      const data = await api.register({ email, password, full_name: name, role })
      if (data.user_id) {
        navigate('/login')
      } else {
        setError(data.detail || 'Registration failed')
      }
    } catch (e) {
      setError('Something went wrong')
    }
    setLoading(false)
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FAFAF8', fontFamily: 'DM Sans, sans-serif', display: 'flex', flexDirection: 'column' }}>

      {/* Navbar */}
      <nav style={{ backgroundColor: 'white', borderBottom: '1px solid #e7e5e4', padding: '0 40px', height: '72px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '32px', height: '32px', backgroundColor: '#0B4D2E', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#E8A020', fontWeight: 900, fontSize: '16px', fontFamily: 'Playfair Display, serif' }}>I</span>
          </div>
          <span style={{ color: '#0B4D2E', fontWeight: 800, fontSize: '20px', fontFamily: 'Playfair Display, serif' }}>Ilé</span>
        </Link>
        <Link to="/login" style={{ color: '#0B4D2E', fontWeight: 600, fontSize: '15px', textDecoration: 'none' }}>
          Sign in →
        </Link>
      </nav>

      {/* Content */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 20px' }}>
        <div style={{ width: '100%', maxWidth: '440px' }}>

          <div style={{ marginBottom: '32px' }}>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 800, color: '#0D1C12', marginBottom: '8px' }}>
              Create account
            </h1>
            <p style={{ color: '#78716c', fontSize: '16px' }}>Join Ilé today — it's free</p>
          </div>

          <div style={{ backgroundColor: 'white', borderRadius: '24px', padding: '40px', boxShadow: '0 4px 24px rgba(0,0,0,0.06)', border: '1px solid #e7e5e4' }}>

            {/* Role Toggle */}
            <div style={{ display: 'flex', backgroundColor: '#F5F5F3', borderRadius: '12px', padding: '4px', marginBottom: '24px' }}>
              {['tenant', 'landlord'].map(r => (
                <button
                  key={r}
                  onClick={() => setRole(r)}
                  style={{
                    flex: 1, padding: '10px', borderRadius: '10px', border: 'none',
                    cursor: 'pointer', fontSize: '15px', fontWeight: 600,
                    fontFamily: 'DM Sans, sans-serif', transition: 'all 0.15s',
                    backgroundColor: role === r ? '#0B4D2E' : 'transparent',
                    color: role === r ? 'white' : '#78716c',
                  }}
                >
                  {r === 'tenant' ? "I'm a Tenant" : "I'm a Landlord"}
                </button>
              ))}
            </div>

            {error && (
              <div style={{ backgroundColor: '#FEF2F2', color: '#DC2626', padding: '12px 16px', borderRadius: '12px', fontSize: '14px', marginBottom: '20px' }}>
                {error}
              </div>
            )}

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#0D1C12', marginBottom: '8px' }}>Full Name</label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="John Doe"
                style={{ width: '100%', border: '1.5px solid #e7e5e4', borderRadius: '12px', padding: '12px 16px', outline: 'none', fontSize: '15px', color: '#1A1A1A', fontFamily: 'DM Sans, sans-serif', boxSizing: 'border-box', backgroundColor: '#FAFAF8' }}
                onFocus={e => e.target.style.borderColor = '#0B4D2E'}
                onBlur={e => e.target.style.borderColor = '#e7e5e4'}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#0D1C12', marginBottom: '8px' }}>Email</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@email.com"
                style={{ width: '100%', border: '1.5px solid #e7e5e4', borderRadius: '12px', padding: '12px 16px', outline: 'none', fontSize: '15px', color: '#1A1A1A', fontFamily: 'DM Sans, sans-serif', boxSizing: 'border-box', backgroundColor: '#FAFAF8' }}
                onFocus={e => e.target.style.borderColor = '#0B4D2E'}
                onBlur={e => e.target.style.borderColor = '#e7e5e4'}
              />
            </div>

            <div style={{ marginBottom: '28px' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#0D1C12', marginBottom: '8px' }}>Password</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                style={{ width: '100%', border: '1.5px solid #e7e5e4', borderRadius: '12px', padding: '12px 16px', outline: 'none', fontSize: '15px', color: '#1A1A1A', fontFamily: 'DM Sans, sans-serif', boxSizing: 'border-box', backgroundColor: '#FAFAF8' }}
                onFocus={e => e.target.style.borderColor = '#0B4D2E'}
                onBlur={e => e.target.style.borderColor = '#e7e5e4'}
              />
            </div>

            <button
              onClick={handleRegister}
              disabled={loading}
              style={{ width: '100%', backgroundColor: '#0B4D2E', color: 'white', border: 'none', padding: '16px', borderRadius: '12px', fontWeight: 700, fontSize: '16px', cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1, fontFamily: 'DM Sans, sans-serif' }}
            >
              {loading ? 'Creating account...' : 'Create Account'}
            </button>
          </div>

          <p style={{ textAlign: 'center', color: '#78716c', marginTop: '24px', fontSize: '15px' }}>
            Already have an account?{' '}
            <Link to="/login" style={{ color: '#0B4D2E', fontWeight: 700, textDecoration: 'none' }}>Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
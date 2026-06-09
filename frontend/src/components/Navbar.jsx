import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('user') || 'null')

  const handleSignOut = () => {
    localStorage.clear()
    navigate('/login')
  }

  return (
    <nav style={{
      width: '100%',
      backgroundColor: 'white',
      borderBottom: '1px solid #e7e5e4',
      position: 'sticky',
      top: 0,
      zIndex: 50,
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '0 40px',
        height: '72px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: '36px',
            height: '36px',
            backgroundColor: '#0B4D2E',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <span style={{ color: '#E8A020', fontWeight: 900, fontSize: '18px', fontFamily: 'Playfair Display, serif' }}>Ị</span>
          </div>
          <span style={{
            fontSize: '22px',
            fontWeight: 800,
            color: '#0B4D2E',
            fontFamily: 'Playfair Display, serif',
            letterSpacing: '-0.5px',
          }}>
            Ilé
          </span>
        </Link>

        {/* Nav Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Link to="/listings" style={{
            textDecoration: 'none',
            color: '#57534e',
            fontSize: '15px',
            fontWeight: 500,
            padding: '8px 16px',
            borderRadius: '8px',
            transition: 'background 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#F5F5F3'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            Browse
          </Link>

          {user ? (
            <>
              <Link
                to={user.role === 'landlord' ? '/landlord' : '/tenant'}
                style={{
                  textDecoration: 'none',
                  color: '#57534e',
                  fontSize: '15px',
                  fontWeight: 500,
                  padding: '8px 16px',
                  borderRadius: '8px',
                }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#F5F5F3'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                Dashboard
              </Link>
              <div style={{
                width: '1px',
                height: '20px',
                backgroundColor: '#e7e5e4',
                margin: '0 4px',
              }} />
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '6px 12px',
                backgroundColor: '#F5F5F3',
                borderRadius: '999px',
              }}>
                <div style={{
                  width: '28px',
                  height: '28px',
                  backgroundColor: '#0B4D2E',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '12px',
                  fontWeight: 700,
                }}>
                  {user.full_name ? user.full_name[0].toUpperCase() : 'U'}
                </div>
                <span style={{ fontSize: '14px', fontWeight: 600, color: '#1A1A1A' }}>
                  {user.full_name?.split(' ')[0] || 'Account'}
                </span>
                <button
                  onClick={handleSignOut}
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: '#a8a29e',
                    fontSize: '13px',
                    cursor: 'pointer',
                    padding: '0',
                  }}
                >
                  Sign out
                </button>
              </div>
            </>
          ) : (
            <>
              <Link to="/login" style={{
                textDecoration: 'none',
                color: '#57534e',
                fontSize: '15px',
                fontWeight: 500,
                padding: '8px 16px',
                borderRadius: '8px',
              }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#F5F5F3'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                Login
              </Link>
              <Link to="/register" style={{
                textDecoration: 'none',
                backgroundColor: '#0B4D2E',
                color: 'white',
                fontSize: '15px',
                fontWeight: 600,
                padding: '10px 20px',
                borderRadius: '999px',
              }}>
                Get Started
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
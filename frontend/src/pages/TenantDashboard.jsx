import { Home, CreditCard, Heart, Bell, LogOut, CheckCircle, Clock, XCircle, ArrowRight } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

const applications = [
  { id: 1, property: '3 Bedroom Flat', location: 'Lekki Phase 1, Lagos', status: 'approved', date: 'June 1, 2026', price: 1500000 },
  { id: 2, property: '2 Bedroom Apartment', location: 'Wuse 2, Abuja', status: 'pending', date: 'June 5, 2026', price: 1200000 },
  { id: 3, property: '1 Bedroom Studio', location: 'Yaba, Lagos', status: 'rejected', date: 'May 28, 2026', price: 600000 },
]

const payments = [
  { id: 1, month: 'June 2026', amount: 125000, status: 'paid', due: 'June 1, 2026' },
  { id: 2, month: 'July 2026', amount: 125000, status: 'upcoming', due: 'July 1, 2026' },
  { id: 3, month: 'August 2026', amount: 125000, status: 'upcoming', due: 'August 1, 2026' },
]

const statusConfig = {
  approved: { label: 'Approved', bg: '#DCFCE7', color: '#16A34A' },
  pending: { label: 'Pending', bg: '#FEF9C3', color: '#CA8A04' },
  rejected: { label: 'Rejected', bg: '#FEE2E2', color: '#DC2626' },
}

export default function TenantDashboard() {
  const [activeTab, setActiveTab] = useState('overview')
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const stored = localStorage.getItem('user')
    if (!stored) { navigate('/login'); return }
    setUser(JSON.parse(stored))
  }, [])

  const navItems = [
    { id: 'overview', label: 'Overview', icon: Home },
    { id: 'applications', label: 'Applications', icon: CheckCircle },
    { id: 'payments', label: 'Rent Payments', icon: CreditCard },
    { id: 'saved', label: 'Saved Properties', icon: Heart },
  ]

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FAFAF8', fontFamily: 'DM Sans, sans-serif', display: 'flex' }}>

      {/* Sidebar */}
      <div style={{ width: '260px', backgroundColor: '#0B4D2E', display: 'flex', flexDirection: 'column', padding: '32px 16px', position: 'fixed', height: '100vh', zIndex: 40 }}>
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '48px', paddingLeft: '12px' }}>
          <div style={{ width: '32px', height: '32px', backgroundColor: '#E8A020', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: 'white', fontWeight: 900, fontSize: '16px', fontFamily: 'Playfair Display, serif' }}>I</span>
          </div>
          <span style={{ color: 'white', fontWeight: 800, fontSize: '20px', fontFamily: 'Playfair Display, serif' }}>Ilé</span>
        </Link>

        <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              style={{
                width: '100%', display: 'flex', alignItems: 'center', gap: '12px',
                padding: '12px 16px', borderRadius: '12px', border: 'none', cursor: 'pointer',
                fontSize: '15px', fontWeight: 500, fontFamily: 'DM Sans, sans-serif',
                backgroundColor: activeTab === id ? 'rgba(255,255,255,0.15)' : 'transparent',
                color: activeTab === id ? 'white' : 'rgba(255,255,255,0.6)',
                transition: 'all 0.15s',
              }}
            >
              <Icon size={18} />
              {label}
            </button>
          ))}
        </nav>

        {/* User info */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px', marginTop: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '0 12px', marginBottom: '12px' }}>
            <div style={{ width: '36px', height: '36px', backgroundColor: '#E8A020', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '14px', flexShrink: 0 }}>
              {user?.full_name?.[0]?.toUpperCase() || 'U'}
            </div>
            <div>
              <p style={{ color: 'white', fontWeight: 600, fontSize: '14px', marginBottom: '2px' }}>{user?.full_name}</p>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px' }}>Tenant</p>
            </div>
          </div>
          <button
            onClick={() => { localStorage.clear(); navigate('/login') }}
            style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 16px', borderRadius: '10px', border: 'none', cursor: 'pointer', backgroundColor: 'transparent', color: 'rgba(255,255,255,0.5)', fontSize: '14px', fontFamily: 'DM Sans, sans-serif' }}
          >
            <LogOut size={16} /> Sign Out
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ marginLeft: '260px', flex: 1, padding: '40px 48px' }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '40px' }}>
          <div>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', fontWeight: 800, color: '#0D1C12', marginBottom: '4px' }}>
              {activeTab === 'overview' && 'Overview'}
              {activeTab === 'applications' && 'My Applications'}
              {activeTab === 'payments' && 'Rent Payments'}
              {activeTab === 'saved' && 'Saved Properties'}
            </h1>
            <p style={{ color: '#78716c', fontSize: '15px' }}>Welcome back, {user?.full_name?.split(' ')[0] || 'there'}</p>
          </div>
          <button style={{ position: 'relative', width: '44px', height: '44px', backgroundColor: 'white', border: '1px solid #e7e5e4', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <Bell size={20} color="#78716c" />
            <span style={{ position: 'absolute', top: '10px', right: '10px', width: '8px', height: '8px', backgroundColor: '#DC2626', borderRadius: '50%', border: '2px solid #FAFAF8' }} />
          </button>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div>
            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '32px' }}>
              {[
                { label: 'Active Applications', value: '2', sub: '1 pending review' },
                { label: 'Next Payment', value: '₦125k', sub: 'Due July 1, 2026', highlight: true },
                { label: 'Saved Properties', value: '4', sub: 'View all' },
              ].map(({ label, value, sub, highlight }) => (
                <div key={label} style={{ backgroundColor: 'white', borderRadius: '20px', padding: '24px', boxShadow: '0 2px 12px rgba(0,0,0,0.04)', border: highlight ? '2px solid #0B4D2E' : '2px solid transparent' }}>
                  <p style={{ fontSize: '14px', color: '#78716c', marginBottom: '8px' }}>{label}</p>
                  <p style={{ fontSize: '36px', fontWeight: 900, color: highlight ? '#0B4D2E' : '#0D1C12', fontFamily: 'Playfair Display, serif', marginBottom: '4px' }}>{value}</p>
                  <p style={{ fontSize: '13px', color: '#a8a29e' }}>{sub}</p>
                </div>
              ))}
            </div>

            {/* Recent Applications */}
            <div style={{ backgroundColor: 'white', borderRadius: '20px', padding: '28px', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#0D1C12' }}>Recent Applications</h2>
                <button onClick={() => setActiveTab('applications')} style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#0B4D2E', fontSize: '14px', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer' }}>
                  View all <ArrowRight size={14} />
                </button>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {applications.map((app, i) => {
                  const { label, bg, color } = statusConfig[app.status]
                  return (
                    <div key={app.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 0', borderBottom: i < applications.length - 1 ? '1px solid #f5f5f4' : 'none' }}>
                      <div>
                        <p style={{ fontWeight: 600, color: '#0D1C12', marginBottom: '4px' }}>{app.property}</p>
                        <p style={{ fontSize: '13px', color: '#78716c' }}>{app.location}</p>
                      </div>
                      <span style={{ backgroundColor: bg, color, fontSize: '13px', fontWeight: 600, padding: '4px 12px', borderRadius: '999px' }}>
                        {label}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )}

        {/* Applications Tab */}
        {activeTab === 'applications' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {applications.map(app => {
              const { label, bg, color } = statusConfig[app.status]
              return (
                <div key={app.id} style={{ backgroundColor: 'white', borderRadius: '20px', padding: '24px', boxShadow: '0 2px 12px rgba(0,0,0,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontWeight: 700, color: '#0D1C12', marginBottom: '6px', fontSize: '17px' }}>{app.property}</h3>
                    <p style={{ color: '#78716c', fontSize: '14px', marginBottom: '4px' }}>{app.location}</p>
                    <p style={{ color: '#a8a29e', fontSize: '13px' }}>Applied: {app.date}</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <p style={{ fontWeight: 800, color: '#0B4D2E', fontSize: '18px', marginBottom: '8px' }}>₦{Math.round(app.price / 12).toLocaleString()}/mo</p>
                    <span style={{ backgroundColor: bg, color, fontSize: '13px', fontWeight: 600, padding: '4px 12px', borderRadius: '999px' }}>
                      {label}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* Payments Tab */}
        {activeTab === 'payments' && (
          <div>
            <div style={{ backgroundColor: '#E8F5EE', borderRadius: '16px', padding: '20px 24px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '40px', height: '40px', backgroundColor: '#0B4D2E', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <CreditCard size={20} color="white" />
              </div>
              <div>
                <p style={{ fontWeight: 700, color: '#0B4D2E', marginBottom: '2px' }}>Rent Financing Active</p>
                <p style={{ fontSize: '14px', color: '#57534e' }}>3 Bedroom Flat, Lekki Phase 1 — ₦125,000/month</p>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {payments.map(payment => (
                <div key={payment.id} style={{ backgroundColor: 'white', borderRadius: '20px', padding: '24px', boxShadow: '0 2px 12px rgba(0,0,0,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontWeight: 700, color: '#0D1C12', marginBottom: '4px' }}>{payment.month}</h3>
                    <p style={{ fontSize: '14px', color: '#78716c' }}>Due: {payment.due}</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <p style={{ fontWeight: 800, color: '#0D1C12', fontSize: '18px', marginBottom: '8px' }}>₦{payment.amount.toLocaleString()}</p>
                    {payment.status === 'paid' ? (
                      <span style={{ backgroundColor: '#DCFCE7', color: '#16A34A', fontSize: '13px', fontWeight: 600, padding: '4px 12px', borderRadius: '999px' }}>Paid</span>
                    ) : (
                      <button style={{ backgroundColor: '#0B4D2E', color: 'white', border: 'none', fontSize: '13px', fontWeight: 600, padding: '6px 16px', borderRadius: '999px', cursor: 'pointer' }}>Pay Now</button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Saved Tab */}
        {activeTab === 'saved' && (
          <div style={{ backgroundColor: 'white', borderRadius: '20px', padding: '80px', textAlign: 'center', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>🏠</div>
            <p style={{ fontSize: '18px', fontWeight: 700, color: '#0D1C12', marginBottom: '8px' }}>No saved properties yet</p>
            <p style={{ color: '#78716c', marginBottom: '24px' }}>Browse listings and save properties you're interested in.</p>
            <Link to="/listings" style={{ backgroundColor: '#0B4D2E', color: 'white', fontWeight: 700, padding: '12px 28px', borderRadius: '999px', textDecoration: 'none', fontSize: '15px' }}>
              Browse Listings
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
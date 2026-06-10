import { Home, Plus, Users, CreditCard, Bell, LogOut, MapPin, ArrowRight } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

const listings = [
  { id: 1, title: '3 Bedroom Flat', location: 'Lekki Phase 1, Lagos', price: 1500000, status: 'active', applications: 4, image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=300' },
  { id: 2, title: '2 Bedroom Apartment', location: 'Wuse 2, Abuja', price: 1200000, status: 'active', applications: 2, image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=300' },
  { id: 3, title: '4 Bedroom Duplex', location: 'GRA, Port Harcourt', price: 2500000, status: 'inactive', applications: 0, image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=300' },
]

const applications = [
  { id: 1, name: 'John Adeyemi', property: '3 Bedroom Flat', date: 'June 5, 2026', status: 'pending' },
  { id: 2, name: 'Amaka Obi', property: '3 Bedroom Flat', date: 'June 6, 2026', status: 'approved' },
  { id: 3, name: 'Emeka Nwosu', property: '2 Bedroom Apartment', date: 'June 7, 2026', status: 'pending' },
  { id: 4, name: 'Fatima Aliyu', property: '2 Bedroom Apartment', date: 'June 8, 2026', status: 'rejected' },
]

const payments = [
  { id: 1, tenant: 'Amaka Obi', property: '3 Bedroom Flat', amount: 1500000, date: 'June 1, 2026', status: 'received' },
  { id: 2, tenant: 'Emeka Nwosu', property: '2 Bedroom Apartment', amount: 1200000, date: 'July 1, 2026', status: 'upcoming' },
]

const statusConfig = {
  approved: { label: 'Approved', bg: '#DCFCE7', color: '#16A34A' },
  pending: { label: 'Pending', bg: '#FEF9C3', color: '#CA8A04' },
  rejected: { label: 'Rejected', bg: '#FEE2E2', color: '#DC2626' },
  received: { label: 'Received', bg: '#DCFCE7', color: '#16A34A' },
  upcoming: { label: 'Upcoming', bg: '#DBEAFE', color: '#2563EB' },
}

export default function LandlordDashboard() {
  const [activeTab, setActiveTab] = useState('overview')
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const stored = localStorage.getItem('user')
    if (stored) setUser(JSON.parse(stored))
  }, [])

  const navItems = [
    { id: 'overview', label: 'Overview', icon: Home },
    { id: 'listings', label: 'My Listings', icon: Home },
    { id: 'applications', label: 'Applications', icon: Users },
    { id: 'payments', label: 'Payments', icon: CreditCard },
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
              }}
            >
              <Icon size={18} />
              {label}
            </button>
          ))}
        </nav>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '0 12px', marginBottom: '12px' }}>
            <div style={{ width: '36px', height: '36px', backgroundColor: '#E8A020', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '14px', flexShrink: 0 }}>
              {user?.full_name?.[0]?.toUpperCase() || 'L'}
            </div>
            <div>
              <p style={{ color: 'white', fontWeight: 600, fontSize: '14px', marginBottom: '2px' }}>{user?.full_name || 'Landlord'}</p>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px' }}>Landlord</p>
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

      {/* Main */}
      <div style={{ marginLeft: '260px', flex: 1, padding: '40px 48px' }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '40px' }}>
          <div>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', fontWeight: 800, color: '#0D1C12', marginBottom: '4px' }}>
              {activeTab === 'overview' && 'Overview'}
              {activeTab === 'listings' && 'My Listings'}
              {activeTab === 'applications' && 'Applications'}
              {activeTab === 'payments' && 'Payments'}
            </h1>
            <p style={{ color: '#78716c', fontSize: '15px' }}>Welcome back, {user?.full_name?.split(' ')[0] || 'there'}</p>
          </div>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            {activeTab === 'listings' && (
              <button style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: '#0B4D2E', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '999px', fontWeight: 600, fontSize: '14px', cursor: 'pointer', fontFamily: 'DM Sans, sans-serif' }}>
                <Plus size={16} /> Add Listing
              </button>
            )}
            <button style={{ position: 'relative', width: '44px', height: '44px', backgroundColor: 'white', border: '1px solid #e7e5e4', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <Bell size={20} color="#78716c" />
              <span style={{ position: 'absolute', top: '10px', right: '10px', width: '8px', height: '8px', backgroundColor: '#DC2626', borderRadius: '50%', border: '2px solid #FAFAF8' }} />
            </button>
          </div>
        </div>

        {/* Overview */}
        {activeTab === 'overview' && (
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '32px' }}>
              {[
                { label: 'Active Listings', value: '2', sub: '1 inactive' },
                { label: 'Total Applications', value: '6', sub: '2 pending review', highlight: true },
                { label: 'Revenue (Upfront)', value: '₦2.7M', sub: 'Total received', green: true },
              ].map(({ label, value, sub, highlight, green }) => (
                <div key={label} style={{ backgroundColor: 'white', borderRadius: '20px', padding: '24px', boxShadow: '0 2px 12px rgba(0,0,0,0.04)', border: highlight ? '2px solid #0B4D2E' : '2px solid transparent' }}>
                  <p style={{ fontSize: '14px', color: '#78716c', marginBottom: '8px' }}>{label}</p>
                  <p style={{ fontSize: '36px', fontWeight: 900, color: green ? '#16A34A' : highlight ? '#0B4D2E' : '#0D1C12', fontFamily: 'Playfair Display, serif', marginBottom: '4px' }}>{value}</p>
                  <p style={{ fontSize: '13px', color: '#a8a29e' }}>{sub}</p>
                </div>
              ))}
            </div>

            {/* Listings preview */}
            <div style={{ backgroundColor: 'white', borderRadius: '20px', padding: '28px', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#0D1C12' }}>Your Listings</h2>
                <button onClick={() => setActiveTab('listings')} style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#0B4D2E', fontSize: '14px', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer' }}>
                  View all <ArrowRight size={14} />
                </button>
              </div>
              {listings.map((listing, i) => (
                <div key={listing.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 0', borderBottom: i < listings.length - 1 ? '1px solid #f5f5f4' : 'none' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <img src={listing.image} alt={listing.title} style={{ width: '48px', height: '48px', borderRadius: '12px', objectFit: 'cover' }} />
                    <div>
                      <p style={{ fontWeight: 600, color: '#0D1C12', marginBottom: '4px' }}>{listing.title}</p>
                      <p style={{ fontSize: '13px', color: '#78716c', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <MapPin size={12} /> {listing.location}
                      </p>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <p style={{ fontWeight: 700, color: '#0B4D2E', marginBottom: '4px' }}>₦{listing.price.toLocaleString()}/yr</p>
                    <p style={{ fontSize: '13px', color: '#a8a29e' }}>{listing.applications} applications</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Listings Tab */}
        {activeTab === 'listings' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {listings.map(listing => (
              <div key={listing.id} style={{ backgroundColor: 'white', borderRadius: '20px', padding: '24px', boxShadow: '0 2px 12px rgba(0,0,0,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <img src={listing.image} alt={listing.title} style={{ width: '64px', height: '64px', borderRadius: '16px', objectFit: 'cover' }} />
                  <div>
                    <h3 style={{ fontWeight: 700, color: '#0D1C12', marginBottom: '6px', fontSize: '17px' }}>{listing.title}</h3>
                    <p style={{ color: '#78716c', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '4px' }}>
                      <MapPin size={13} /> {listing.location}
                    </p>
                    <p style={{ fontWeight: 700, color: '#0B4D2E', fontSize: '15px' }}>₦{listing.price.toLocaleString()}/yr</p>
                  </div>
                </div>
                <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-end' }}>
                  <span style={{ backgroundColor: listing.status === 'active' ? '#DCFCE7' : '#F5F5F3', color: listing.status === 'active' ? '#16A34A' : '#78716c', fontSize: '13px', fontWeight: 600, padding: '4px 12px', borderRadius: '999px' }}>
                    {listing.status === 'active' ? 'Active' : 'Inactive'}
                  </span>
                  <p style={{ fontSize: '13px', color: '#a8a29e' }}>{listing.applications} applications</p>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <button style={{ color: '#0B4D2E', fontSize: '13px', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer' }}>Edit</button>
                    <button style={{ color: '#DC2626', fontSize: '13px', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer' }}>Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Applications Tab */}
        {activeTab === 'applications' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {applications.map(app => (
              <div key={app.id} style={{ backgroundColor: 'white', borderRadius: '20px', padding: '24px', boxShadow: '0 2px 12px rgba(0,0,0,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontWeight: 700, color: '#0D1C12', marginBottom: '6px', fontSize: '17px' }}>{app.name}</h3>
                  <p style={{ color: '#78716c', fontSize: '14px', marginBottom: '4px' }}>{app.property}</p>
                  <p style={{ color: '#a8a29e', fontSize: '13px' }}>{app.date}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ backgroundColor: statusConfig[app.status].bg, color: statusConfig[app.status].color, fontSize: '13px', fontWeight: 600, padding: '4px 12px', borderRadius: '999px' }}>
                    {statusConfig[app.status].label}
                  </span>
                  {app.status === 'pending' && (
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button style={{ backgroundColor: '#0B4D2E', color: 'white', border: 'none', fontSize: '13px', fontWeight: 600, padding: '6px 16px', borderRadius: '999px', cursor: 'pointer' }}>Approve</button>
                      <button style={{ backgroundColor: '#FEE2E2', color: '#DC2626', border: 'none', fontSize: '13px', fontWeight: 600, padding: '6px 16px', borderRadius: '999px', cursor: 'pointer' }}>Reject</button>
                    </div>
                  )}
                </div>
              </div>
            ))}
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
                <p style={{ fontWeight: 700, color: '#0B4D2E', marginBottom: '2px' }}>Ilé pays you upfront</p>
                <p style={{ fontSize: '14px', color: '#57534e' }}>You receive full annual rent. Tenants pay monthly to Ilé.</p>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {payments.map(payment => (
                <div key={payment.id} style={{ backgroundColor: 'white', borderRadius: '20px', padding: '24px', boxShadow: '0 2px 12px rgba(0,0,0,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontWeight: 700, color: '#0D1C12', marginBottom: '6px' }}>{payment.tenant}</h3>
                    <p style={{ color: '#78716c', fontSize: '14px', marginBottom: '4px' }}>{payment.property}</p>
                    <p style={{ color: '#a8a29e', fontSize: '13px' }}>{payment.date}</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <p style={{ fontWeight: 800, color: '#0D1C12', fontSize: '18px', marginBottom: '8px' }}>₦{payment.amount.toLocaleString()}</p>
                    <span style={{ backgroundColor: statusConfig[payment.status].bg, color: statusConfig[payment.status].color, fontSize: '13px', fontWeight: 600, padding: '4px 12px', borderRadius: '999px' }}>
                      {statusConfig[payment.status].label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
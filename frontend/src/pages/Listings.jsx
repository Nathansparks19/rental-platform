import { Search, MapPin, Bed, Bath, Heart, SlidersHorizontal } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { api } from '../utils/api'
import Navbar from '../components/Navbar'

const container = {
  maxWidth: '1100px',
  margin: '0 auto',
  padding: '0 40px',
}

export default function Listings() {
  const [properties, setProperties] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [type, setType] = useState('')

  useEffect(() => {
    const fetchProperties = async () => {
      const data = await api.getProperties()
      setProperties(data)
      setLoading(false)
    }
    fetchProperties()
  }, [])

  const filtered = properties.filter(p => {
    const matchSearch = p.location?.toLowerCase().includes(search.toLowerCase()) ||
      p.title?.toLowerCase().includes(search.toLowerCase())
    const matchType = type ? p.type === type : true
    return matchSearch && matchType
  })

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FAFAF8', fontFamily: 'DM Sans, sans-serif' }}>
      <Navbar />

      {/* Page Header */}
      <div style={{ backgroundColor: '#0B4D2E' }}>
        <div style={{ ...container, paddingTop: '48px', paddingBottom: '48px' }}>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '42px', fontWeight: 800, color: 'white', marginBottom: '8px' }}>
            Browse Properties
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '16px' }}>
            Verified rentals across Lagos, Abuja and Port Harcourt
          </p>

          {/* Search */}
          <div style={{ display: 'flex', gap: '12px', marginTop: '28px' }}>
            <div style={{
              display: 'flex', alignItems: 'center',
              backgroundColor: 'white', borderRadius: '12px',
              padding: '12px 16px', flex: 1,
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
            }}>
              <Search size={18} style={{ color: '#a8a29e', marginRight: '10px', flexShrink: 0 }} />
              <input
                type="text"
                placeholder="Search by location or property name..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{ background: 'transparent', border: 'none', outline: 'none', fontSize: '15px', color: '#1A1A1A', width: '100%' }}
              />
            </div>
            <select
              value={type}
              onChange={e => setType(e.target.value)}
              style={{
                backgroundColor: 'white', border: 'none',
                borderRadius: '12px', padding: '12px 20px',
                outline: 'none', fontSize: '15px', color: '#1A1A1A',
                cursor: 'pointer', fontFamily: 'DM Sans, sans-serif',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
              }}
            >
              <option value="">All Types</option>
              <option>Apartment</option>
              <option>Duplex</option>
              <option>Terrace</option>
              <option>Bungalow</option>
              <option>Studio</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results */}
      <div style={container}>
        <div style={{ paddingTop: '40px', paddingBottom: '80px' }}>
          {loading ? (
            <div style={{ textAlign: 'center', padding: '80px 0' }}>
              <div style={{ width: '40px', height: '40px', border: '3px solid #E8F5EE', borderTop: '3px solid #0B4D2E', borderRadius: '50%', margin: '0 auto 16px', animation: 'spin 1s linear infinite' }} />
              <p style={{ color: '#a8a29e' }}>Loading properties...</p>
            </div>
          ) : filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 0' }}>
              <p style={{ fontSize: '48px', marginBottom: '16px' }}>🏠</p>
              <p style={{ fontSize: '18px', fontWeight: 600, color: '#0D1C12', marginBottom: '8px' }}>No properties found</p>
              <p style={{ color: '#a8a29e' }}>Try a different location or property type</p>
            </div>
          ) : (
            <>
              {/* Results header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                <p style={{ color: '#78716c', fontSize: '15px' }}>
                  <span style={{ fontWeight: 700, color: '#0D1C12' }}>{filtered.length}</span> properties found
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#78716c', fontSize: '14px' }}>
                  <SlidersHorizontal size={16} />
                  Sort by: <span style={{ fontWeight: 600, color: '#0D1C12' }}>Newest</span>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
                {filtered.map((property) => (
                  <Link to={`/listings/${property.id}`} key={property.id} style={{ textDecoration: 'none' }}>
                    <div
                      style={{ backgroundColor: 'white', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', transition: 'all 0.2s', cursor: 'pointer' }}
                      onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.12)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
                      onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)'; e.currentTarget.style.transform = 'translateY(0)' }}
                    >
                      {/* Image */}
                      <div style={{ position: 'relative' }}>
                        <img
                          src={property.image_url || 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500'}
                          alt={property.title}
                          style={{ width: '100%', height: '210px', objectFit: 'cover' }}
                        />
                        <button
                          onClick={e => e.preventDefault()}
                          style={{ position: 'absolute', top: '12px', right: '12px', backgroundColor: 'white', border: 'none', borderRadius: '50%', width: '34px', height: '34px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}
                        >
                          <Heart size={15} color="#a8a29e" />
                        </button>
                        {property.verified && (
                          <span style={{ position: 'absolute', top: '12px', left: '12px', backgroundColor: '#0B4D2E', color: 'white', fontSize: '12px', padding: '4px 12px', borderRadius: '999px', fontWeight: 600 }}>
                            ✓ Verified
                          </span>
                        )}
                      </div>

                      {/* Details */}
                      <div style={{ padding: '18px' }}>
                        <h3 style={{ fontWeight: 700, color: '#0D1C12', marginBottom: '6px', fontSize: '16px' }}>{property.title}</h3>
                        <div style={{ display: 'flex', alignItems: 'center', color: '#78716c', fontSize: '14px', marginBottom: '14px' }}>
                          <MapPin size={13} style={{ marginRight: '4px', color: '#0B4D2E' }} />
                          {property.location}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid #f5f5f4' }}>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px', color: '#78716c' }}>
                            <Bed size={13} /> {property.beds} Beds
                          </span>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px', color: '#78716c' }}>
                            <Bath size={13} /> {property.baths} Baths
                          </span>
                          <span style={{ backgroundColor: '#E8F5EE', color: '#0B4D2E', padding: '3px 10px', borderRadius: '999px', fontSize: '12px', fontWeight: 600 }}>
                            {property.type}
                          </span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <div>
                            <p style={{ color: '#0B4D2E', fontWeight: 800, fontSize: '18px' }}>
                              ₦{Math.round(property.price / 12).toLocaleString()}<span style={{ fontSize: '13px', fontWeight: 500, color: '#78716c' }}>/mo</span>
                            </p>
                            <p style={{ fontSize: '12px', color: '#a8a29e', marginTop: '2px' }}>
                              ₦{property.price?.toLocaleString()} per year
                            </p>
                          </div>
                          <span style={{ backgroundColor: '#0B4D2E', color: 'white', fontSize: '13px', padding: '8px 16px', borderRadius: '999px', fontWeight: 600 }}>
                            View →
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
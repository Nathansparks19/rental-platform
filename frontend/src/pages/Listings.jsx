import { Search, MapPin, Bed, Bath, Heart } from 'lucide-react'
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

      {/* Search Bar */}
      <div style={{ backgroundColor: 'white', borderBottom: '1px solid #e7e5e4' }}>
        <div style={{ ...container, paddingTop: '20px', paddingBottom: '20px', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#F5F5F3', borderRadius: '999px', padding: '10px 16px', flex: 1 }}>
            <Search size={18} style={{ color: '#a8a29e', marginRight: '8px' }} />
            <input
              type="text"
              placeholder="Search location or property..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{ background: 'transparent', border: 'none', outline: 'none', fontSize: '15px', color: '#1A1A1A', width: '100%' }}
            />
          </div>
          <select
            value={type}
            onChange={e => setType(e.target.value)}
            style={{ backgroundColor: '#F5F5F3', border: 'none', borderRadius: '999px', padding: '10px 16px', outline: 'none', fontSize: '15px', color: '#1A1A1A', cursor: 'pointer' }}
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

      {/* Results */}
      <div style={container}>
        <div style={{ paddingTop: '40px', paddingBottom: '80px' }}>
          {loading ? (
            <div style={{ textAlign: 'center', padding: '80px 0', color: '#a8a29e' }}>Loading properties...</div>
          ) : filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 0', color: '#a8a29e' }}>No properties found.</div>
          ) : (
            <>
              <p style={{ color: '#78716c', marginBottom: '24px', fontSize: '15px' }}>{filtered.length} properties found</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
                {filtered.map((property) => (
                  <Link to={`/listings/${property.id}`} key={property.id} style={{ textDecoration: 'none' }}>
                    <div style={{ backgroundColor: 'white', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', transition: 'box-shadow 0.2s' }}
                      onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.12)'}
                      onMouseLeave={e => e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)'}
                    >
                      {/* Image */}
                      <div style={{ position: 'relative' }}>
                        <img
                          src={property.image_url || 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500'}
                          alt={property.title}
                          style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                        />
                        <button style={{ position: 'absolute', top: '12px', right: '12px', backgroundColor: 'white', border: 'none', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                          <Heart size={16} color="#a8a29e" />
                        </button>
                        {property.verified && (
                          <span style={{ position: 'absolute', top: '12px', left: '12px', backgroundColor: '#0B4D2E', color: 'white', fontSize: '12px', padding: '4px 10px', borderRadius: '999px', fontWeight: 600 }}>
                            Verified
                          </span>
                        )}
                      </div>
                      {/* Details */}
                      <div style={{ padding: '16px' }}>
                        <h3 style={{ fontWeight: 700, color: '#1A1A1A', marginBottom: '4px', fontSize: '16px' }}>{property.title}</h3>
                        <div style={{ display: 'flex', alignItems: 'center', color: '#78716c', fontSize: '14px', marginBottom: '12px' }}>
                          <MapPin size={14} style={{ marginRight: '4px' }} />
                          {property.location}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: '#78716c', fontSize: '14px', marginBottom: '12px' }}>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <Bed size={14} /> {property.beds} Beds
                          </span>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <Bath size={14} /> {property.baths} Baths
                          </span>
                          <span style={{ backgroundColor: '#F5F5F3', padding: '2px 8px', borderRadius: '999px', fontSize: '12px' }}>
                            {property.type}
                          </span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <span style={{ color: '#0B4D2E', fontWeight: 700, fontSize: '16px' }}>
                            ₦{property.price?.toLocaleString()}/yr
                          </span>
                          <span style={{ fontSize: '13px', color: '#a8a29e' }}>
                            ≈ ₦{Math.round(property.price / 12).toLocaleString()}/mo
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
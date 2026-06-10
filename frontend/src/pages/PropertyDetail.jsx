import { MapPin, Bed, Bath, Shield, CreditCard, ArrowLeft, Heart, Share2, CheckCircle } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { api } from '../utils/api'
import Navbar from '../components/Navbar'

const container = {
  maxWidth: '1100px',
  margin: '0 auto',
  padding: '0 40px',
}

export default function PropertyDetail() {
  const { id } = useParams()
  const [property, setProperty] = useState(null)
  const [loading, setLoading] = useState(true)
  const [applying, setApplying] = useState(false)
  const [applied, setApplied] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchProperty = async () => {
      const data = await api.getProperty(id)
      setProperty(data)
      setLoading(false)
    }
    fetchProperty()
  }, [id])

  const handleApply = async () => {
    const token = localStorage.getItem('token')
    if (!token) {
      window.location.href = '/login'
      return
    }
    setApplying(true)
    try {
      const data = await api.applyForProperty(id)
      if (data.id) {
        setApplied(true)
      } else {
        setError(data.detail || 'Application failed')
      }
    } catch (e) {
      setError('Something went wrong')
    }
    setApplying(false)
  }

  if (loading) return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FAFAF8', fontFamily: 'DM Sans, sans-serif' }}>
      <Navbar />
      <div style={{ textAlign: 'center', padding: '120px 0', color: '#a8a29e' }}>Loading property...</div>
    </div>
  )

  if (!property) return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FAFAF8', fontFamily: 'DM Sans, sans-serif' }}>
      <Navbar />
      <div style={{ textAlign: 'center', padding: '120px 0', color: '#a8a29e' }}>Property not found.</div>
    </div>
  )

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FAFAF8', fontFamily: 'DM Sans, sans-serif' }}>
      <Navbar />

      <div style={container}>
        <div style={{ paddingTop: '32px', paddingBottom: '80px' }}>

          {/* Back */}
          <Link to="/listings" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#78716c', textDecoration: 'none', fontSize: '14px', marginBottom: '24px', fontWeight: 500 }}>
            <ArrowLeft size={16} /> Back to Listings
          </Link>

          {/* Image */}
          <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', marginBottom: '40px' }}>
            <img
              src={property.image_url || 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800'}
              alt={property.title}
              style={{ width: '100%', height: '480px', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', top: '20px', right: '20px', display: 'flex', gap: '8px' }}>
              <button style={{ backgroundColor: 'white', border: 'none', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                <Heart size={18} color="#78716c" />
              </button>
              <button style={{ backgroundColor: 'white', border: 'none', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                <Share2 size={18} color="#78716c" />
              </button>
            </div>
            {property.verified && (
              <span style={{ position: 'absolute', top: '20px', left: '20px', backgroundColor: '#0B4D2E', color: 'white', fontSize: '13px', padding: '6px 14px', borderRadius: '999px', fontWeight: 600 }}>
                ✓ Verified
              </span>
            )}
          </div>

          {/* Content Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '48px', alignItems: 'start' }}>

            {/* Left */}
            <div>
              {/* Title */}
              <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 800, color: '#0D1C12', marginBottom: '12px' }}>
                {property.title}
              </h1>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#78716c', fontSize: '15px' }}>
                  <MapPin size={16} style={{ color: '#0B4D2E' }} /> {property.location}
                </span>
                <span style={{ backgroundColor: '#E8F5EE', color: '#0B4D2E', padding: '4px 12px', borderRadius: '999px', fontSize: '13px', fontWeight: 600 }}>
                  {property.type}
                </span>
              </div>

              {/* Stats row */}
              <div style={{ display: 'flex', gap: '24px', padding: '20px 24px', backgroundColor: 'white', borderRadius: '16px', marginBottom: '32px', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: '22px', fontWeight: 800, color: '#0D1C12' }}>{property.beds}</p>
                  <p style={{ fontSize: '13px', color: '#78716c' }}>Bedrooms</p>
                </div>
                <div style={{ width: '1px', backgroundColor: '#e7e5e4' }} />
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: '22px', fontWeight: 800, color: '#0D1C12' }}>{property.baths}</p>
                  <p style={{ fontSize: '13px', color: '#78716c' }}>Bathrooms</p>
                </div>
                <div style={{ width: '1px', backgroundColor: '#e7e5e4' }} />
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: '22px', fontWeight: 800, color: '#0D1C12' }}>1</p>
                  <p style={{ fontSize: '13px', color: '#78716c' }}>Parking</p>
                </div>
                <div style={{ width: '1px', backgroundColor: '#e7e5e4' }} />
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: '22px', fontWeight: 800, color: '#0B4D2E' }}>✓</p>
                  <p style={{ fontSize: '13px', color: '#78716c' }}>Verified</p>
                </div>
              </div>

              {/* Description */}
              <div style={{ marginBottom: '32px' }}>
                <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#0D1C12', marginBottom: '12px' }}>About this property</h2>
                <p style={{ color: '#57534e', lineHeight: 1.8, fontSize: '15px' }}>{property.description}</p>
              </div>

              {/* Amenities */}
              {property.amenities && property.amenities.length > 0 && (
                <div>
                  <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#0D1C12', marginBottom: '16px' }}>Amenities</h2>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    {property.amenities.map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#57534e', fontSize: '15px' }}>
                        <div style={{ width: '28px', height: '28px', backgroundColor: '#E8F5EE', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <CheckCircle size={14} style={{ color: '#0B4D2E' }} />
                        </div>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right — Sticky Sidebar */}
            <div style={{ position: 'sticky', top: '100px' }}>
              {/* Price Card */}
              <div style={{ backgroundColor: 'white', borderRadius: '20px', padding: '28px', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', marginBottom: '16px' }}>
                <div style={{ marginBottom: '20px' }}>
                  <p style={{ fontSize: '36px', fontWeight: 900, color: '#0B4D2E', fontFamily: 'Playfair Display, serif' }}>
                    ₦{Math.round(property.price / 12).toLocaleString()}
                    <span style={{ fontSize: '16px', fontWeight: 500, color: '#78716c' }}>/month</span>
                  </p>
                  <p style={{ fontSize: '14px', color: '#a8a29e', marginTop: '4px' }}>
                    ₦{property.price?.toLocaleString()} per year
                  </p>
                </div>

                <div style={{ backgroundColor: '#E8F5EE', borderRadius: '12px', padding: '14px 16px', marginBottom: '20px' }}>
                  <p style={{ fontSize: '13px', fontWeight: 600, color: '#0B4D2E', marginBottom: '2px' }}>
                    🏦 Rent Financing Available
                  </p>
                  <p style={{ fontSize: '13px', color: '#57534e' }}>
                    Pay monthly — we pay your landlord upfront.
                  </p>
                </div>

                {error && (
                  <div style={{ backgroundColor: '#FEF2F2', color: '#DC2626', padding: '12px 16px', borderRadius: '12px', fontSize: '14px', marginBottom: '16px' }}>
                    {error}
                  </div>
                )}

                {applied ? (
                  <div style={{ backgroundColor: '#E8F5EE', color: '#0B4D2E', padding: '16px', borderRadius: '12px', textAlign: 'center', fontWeight: 700, fontSize: '15px', marginBottom: '12px' }}>
                    ✓ Application Submitted
                  </div>
                ) : (
                  <button
                    onClick={handleApply}
                    disabled={applying}
                    style={{ width: '100%', backgroundColor: '#0B4D2E', color: 'white', border: 'none', padding: '16px', borderRadius: '12px', fontWeight: 700, fontSize: '16px', cursor: applying ? 'not-allowed' : 'pointer', opacity: applying ? 0.7 : 1, marginBottom: '12px', fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {applying ? 'Submitting...' : 'Apply Now'}
                  </button>
                )}

                <button style={{ width: '100%', backgroundColor: 'transparent', color: '#0B4D2E', border: '2px solid #0B4D2E', padding: '14px', borderRadius: '12px', fontWeight: 700, fontSize: '15px', cursor: 'pointer', fontFamily: 'DM Sans, sans-serif' }}>
                  Schedule Inspection
                </button>
              </div>

              {/* Safety note */}
              <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '20px', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <Shield size={18} style={{ color: '#0B4D2E' }} />
                  <p style={{ fontWeight: 700, color: '#0D1C12', fontSize: '15px' }}>Safe to apply</p>
                </div>
                <p style={{ fontSize: '13px', color: '#78716c', lineHeight: 1.6 }}>
                  This property has been verified by the Ilé team. Your application and payments are fully protected.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
import { MapPin, Bed, Bath, Shield, CreditCard, ArrowLeft, Heart, Share2 } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { api } from '../utils/api'

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
    <div className="min-h-screen flex items-center justify-center text-gray-400">
      Loading property...
    </div>
  )

  if (!property) return (
    <div className="min-h-screen flex items-center justify-center text-gray-400">
      Property not found.
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 bg-white border-b border-gray-100">
        <Link to="/" className="text-2xl font-bold text-blue-600">Ilé</Link>
        <div className="flex gap-4">
          <Link to="/login" className="text-gray-600 hover:text-blue-600 font-medium">Login</Link>
          <Link to="/register" className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700">
            List Property
          </Link>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-8 py-10">
        {/* Back */}
        <Link to="/listings" className="flex items-center text-gray-500 hover:text-blue-600 mb-6">
          <ArrowLeft size={18} className="mr-2" /> Back to Listings
        </Link>

        {/* Image */}
        <div className="relative rounded-2xl overflow-hidden mb-8">
          <img
            src={property.image_url || 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800'}
            alt={property.title}
            className="w-full h-96 object-cover"
          />
          <div className="absolute top-4 right-4 flex gap-2">
            <button className="bg-white p-2 rounded-full shadow hover:bg-gray-50">
              <Heart size={20} className="text-gray-400" />
            </button>
            <button className="bg-white p-2 rounded-full shadow hover:bg-gray-50">
              <Share2 size={20} className="text-gray-400" />
            </button>
          </div>
          {property.verified && (
            <span className="absolute top-4 left-4 bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
              Verified
            </span>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{property.title}</h1>
              <div className="flex items-center text-gray-500 mt-2">
                <MapPin size={16} className="mr-1" /> {property.location}
              </div>
              <div className="flex items-center gap-4 mt-3 text-gray-500">
                <span className="flex items-center gap-1"><Bed size={16} /> {property.beds} Beds</span>
                <span className="flex items-center gap-1"><Bath size={16} /> {property.baths} Baths</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">{property.type}</span>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">About this property</h2>
              <p className="text-gray-500 leading-relaxed">{property.description}</p>
            </div>

            {property.amenities && property.amenities.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Amenities</h2>
                <div className="grid grid-cols-2 gap-2">
                  {property.amenities.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="text-3xl font-bold text-blue-600">₦{property.price?.toLocaleString()}</p>
              <p className="text-gray-400 text-sm">per year</p>
              <div className="mt-2 bg-blue-50 rounded-xl p-3 text-center">
                <p className="text-blue-600 font-semibold">≈ ₦{Math.round(property.price / 12).toLocaleString()}/month</p>
                <p className="text-blue-400 text-xs mt-1">with Ilé rent financing</p>
              </div>

              {error && (
                <div className="mt-3 bg-red-50 text-red-600 px-3 py-2 rounded-xl text-sm">
                  {error}
                </div>
              )}

              {applied ? (
                <div className="w-full mt-4 bg-green-50 text-green-600 py-3 rounded-full font-semibold text-center">
                  Application Submitted ✓
                </div>
              ) : (
                <button
                  onClick={handleApply}
                  disabled={applying}
                  className="w-full mt-4 bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700 disabled:opacity-50"
                >
                  {applying ? 'Applying...' : 'Apply Now'}
                </button>
              )}
              <button className="w-full mt-2 border border-blue-600 text-blue-600 py-3 rounded-full font-semibold hover:bg-blue-50">
                Schedule Inspection
              </button>
            </div>

            <div className="bg-blue-50 rounded-2xl p-4">
              <div className="flex items-center gap-2 text-blue-600 font-semibold mb-1">
                <CreditCard size={16} /> Rent Financing Available
              </div>
              <p className="text-blue-500 text-sm">Pay monthly, landlord gets paid upfront. No stress.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
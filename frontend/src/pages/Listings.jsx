import { Search, MapPin, Bed, Bath, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'

const properties = [
  {
    id: 1,
    title: '3 Bedroom Flat',
    location: 'Lekki Phase 1, Lagos',
    price: 1500000,
    beds: 3,
    baths: 2,
    type: 'Apartment',
    verified: true,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500',
  },
  {
    id: 2,
    title: '2 Bedroom Apartment',
    location: 'Wuse 2, Abuja',
    price: 1200000,
    beds: 2,
    baths: 2,
    type: 'Apartment',
    verified: true,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500',
  },
  {
    id: 3,
    title: '4 Bedroom Duplex',
    location: 'GRA, Port Harcourt',
    price: 2500000,
    beds: 4,
    baths: 3,
    type: 'Duplex',
    verified: false,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500',
  },
  {
    id: 4,
    title: '1 Bedroom Studio',
    location: 'Yaba, Lagos',
    price: 600000,
    beds: 1,
    baths: 1,
    type: 'Studio',
    verified: true,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500',
  },
  {
    id: 5,
    title: '3 Bedroom Terrace',
    location: 'Gwarinpa, Abuja',
    price: 1800000,
    beds: 3,
    baths: 3,
    type: 'Terrace',
    verified: true,
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=500',
  },
  {
    id: 6,
    title: '2 Bedroom Bungalow',
    location: 'Ibadan, Oyo',
    price: 800000,
    beds: 2,
    baths: 1,
    type: 'Bungalow',
    verified: false,
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=500',
  },
]

export default function Listings() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 bg-white border-b border-gray-100">
        <Link to="/" className="text-2xl font-bold text-blue-600">Nestify</Link>
        <div className="flex gap-4">
          <button className="text-gray-600 hover:text-blue-600 font-medium">Login</button>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700">
            List Property
          </button>
        </div>
      </nav>

      {/* Search Bar */}
      <div className="bg-white border-b border-gray-100 px-8 py-4">
        <div className="flex items-center gap-4 max-w-5xl mx-auto">
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 flex-1">
            <Search className="text-gray-400 mr-2" size={18} />
            <input
              type="text"
              placeholder="Search location..."
              className="bg-transparent outline-none text-gray-700 w-full"
            />
          </div>
          <select className="bg-gray-100 rounded-full px-4 py-2 outline-none text-gray-700">
            <option>All Types</option>
            <option>Apartment</option>
            <option>Duplex</option>
            <option>Terrace</option>
            <option>Bungalow</option>
            <option>Studio</option>
          </select>
          <select className="bg-gray-100 rounded-full px-4 py-2 outline-none text-gray-700">
            <option>Any Price</option>
            <option>Under ₦500k</option>
            <option>₦500k - ₦1M</option>
            <option>₦1M - ₦2M</option>
            <option>Above ₦2M</option>
          </select>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700">
            Filter
          </button>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-5xl mx-auto px-8 py-10">
        <p className="text-gray-500 mb-6">{properties.length} properties found</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <Link to={`/listings/${property.id}`} key={property.id}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                {/* Image */}
                <div className="relative">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-48 object-cover"
                  />
                  <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow">
                    <Heart size={16} className="text-gray-400" />
                  </button>
                  {property.verified && (
                    <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                      Verified
                    </span>
                  )}
                </div>
                {/* Details */}
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900">{property.title}</h3>
                  <div className="flex items-center text-gray-500 text-sm mt-1">
                    <MapPin size={14} className="mr-1" />
                    {property.location}
                  </div>
                  <div className="flex items-center gap-4 mt-3 text-gray-500 text-sm">
                    <span className="flex items-center gap-1">
                      <Bed size={14} /> {property.beds} Beds
                    </span>
                    <span className="flex items-center gap-1">
                      <Bath size={14} /> {property.baths} Baths
                    </span>
                    <span className="bg-gray-100 px-2 py-0.5 rounded-full text-xs">
                      {property.type}
                    </span>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-blue-600 font-bold">
                      ₦{property.price.toLocaleString()}/yr
                    </span>
                    <span className="text-xs text-gray-400">
                      ≈ ₦{Math.round(property.price / 12).toLocaleString()}/mo
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
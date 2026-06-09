import { MapPin, Bed, Bath, Shield, CreditCard, ArrowLeft, Heart, Share2 } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'

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
    description: 'A spacious and well-finished 3 bedroom flat located in the heart of Lekki Phase 1. The property features modern fittings, a fitted kitchen, large living area, and 24/7 security. Close to major amenities including schools, hospitals, and shopping malls.',
    amenities: ['24/7 Security', 'Parking Space', 'Fitted Kitchen', 'Generator', 'Water Supply', 'Tiled Floors'],
    landlord: { name: 'Mr. Adebayo', phone: '+234 801 234 5678', verified: true },
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800',
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
    description: 'A modern 2 bedroom apartment in the prestigious Wuse 2 area of Abuja. Features include a spacious living room, modern kitchen, and a serene environment perfect for professionals and small families.',
    amenities: ['24/7 Security', 'Parking Space', 'Fitted Kitchen', 'Generator', 'Water Supply', 'Air Conditioning'],
    landlord: { name: 'Mrs. Okonkwo', phone: '+234 802 345 6789', verified: true },
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
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
    description: 'A massive 4 bedroom duplex in the GRA area of Port Harcourt. This property boasts of a large compound, boys quarters, and premium finishing throughout.',
    amenities: ['Boys Quarters', 'Large Compound', 'Parking Space', 'Generator', 'Water Supply', 'Tiled Floors'],
    landlord: { name: 'Chief Amadi', phone: '+234 803 456 7890', verified: false },
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
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
    description: 'A cozy and affordable 1 bedroom studio apartment in Yaba, Lagos. Perfect for young professionals and students. Close to UNILAG, tech hubs, and major bus stops.',
    amenities: ['24/7 Security', 'Water Supply', 'Tiled Floors', 'Close to Transport'],
    landlord: { name: 'Mr. Nwachukwu', phone: '+234 804 567 8901', verified: true },
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
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
    description: 'A beautiful 3 bedroom terrace duplex in the serene Gwarinpa estate. Features a modern kitchen, spacious bedrooms, and a small garden area.',
    amenities: ['Garden', 'Parking Space', 'Fitted Kitchen', 'Generator', 'Water Supply', 'Estate Security'],
    landlord: { name: 'Mrs. Aliyu', phone: '+234 805 678 9012', verified: true },
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800',
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
    description: 'An affordable 2 bedroom bungalow in a quiet residential area in Ibadan. Suitable for families looking for a peaceful environment with easy access to the city.',
    amenities: ['Large Compound', 'Parking Space', 'Water Supply', 'Tiled Floors'],
    landlord: { name: 'Mr. Afolabi', phone: '+234 806 789 0123', verified: false },
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800',
  },
]

export default function PropertyDetail() {
  const { id } = useParams()
  const property = properties.find(p => p.id === parseInt(id))

  if (!property) return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-gray-500">Property not found.</p>
    </div>
  )

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

      <div className="max-w-5xl mx-auto px-8 py-10">
        {/* Back */}
        <Link to="/listings" className="flex items-center text-gray-500 hover:text-blue-600 mb-6">
          <ArrowLeft size={18} className="mr-2" /> Back to Listings
        </Link>

        {/* Image */}
        <div className="relative rounded-2xl overflow-hidden mb-8">
          <img src={property.image} alt={property.title} className="w-full h-96 object-cover" />
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
            {/* Title */}
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

            {/* Description */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">About this property</h2>
              <p className="text-gray-500 leading-relaxed">{property.description}</p>
            </div>

            {/* Amenities */}
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
          </div>

          {/* Right — Pricing & Contact */}
          <div className="space-y-4">
            {/* Price */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="text-3xl font-bold text-blue-600">₦{property.price.toLocaleString()}</p>
              <p className="text-gray-400 text-sm">per year</p>
              <div className="mt-2 bg-blue-50 rounded-xl p-3 text-center">
                <p className="text-blue-600 font-semibold">≈ ₦{Math.round(property.price / 12).toLocaleString()}/month</p>
                <p className="text-blue-400 text-xs mt-1">with Nestify rent financing</p>
              </div>
              <button className="w-full mt-4 bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700">
                Apply Now
              </button>
              <button className="w-full mt-2 border border-blue-600 text-blue-600 py-3 rounded-full font-semibold hover:bg-blue-50">
                Schedule Inspection
              </button>
            </div>

            {/* Landlord */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Listed by</h3>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                  {property.landlord.name[0]}
                </div>
                <div>
                  <p className="font-medium text-gray-900">{property.landlord.name}</p>
                  {property.landlord.verified && (
                    <span className="text-xs text-blue-600 flex items-center gap-1">
                      <Shield size={12} /> Verified Landlord
                    </span>
                  )}
                </div>
              </div>
              <button className="w-full mt-4 bg-gray-100 text-gray-700 py-3 rounded-full font-semibold hover:bg-gray-200">
                Contact Landlord
              </button>
            </div>

            {/* Financing info */}
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
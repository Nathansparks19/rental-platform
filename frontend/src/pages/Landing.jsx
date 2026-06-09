import { Search, MapPin, Shield, CreditCard } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-gray-100">
        <h1 className="text-2xl font-bold text-blue-600">Nestify</h1>
        <div className="flex gap-4">
          <button className="text-gray-600 hover:text-blue-600 font-medium">Login</button>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center text-center px-8 py-24 bg-gradient-to-b from-blue-50 to-white">
        <h2 className="text-5xl font-bold text-gray-900 max-w-2xl leading-tight">
          Find Your Perfect Home in Nigeria
        </h2>
        <p className="mt-4 text-xl text-gray-500 max-w-xl">
          Verified listings, transparent pricing, and flexible rent financing — all in one place.
        </p>
        <div className="mt-8 flex items-center bg-white border border-gray-200 rounded-full px-4 py-3 shadow-md w-full max-w-lg">
          <Search className="text-gray-400 mr-3" size={20} />
          <input
            type="text"
            placeholder="Search by location, e.g. Lekki, Abuja..."
            className="flex-1 outline-none text-gray-700"
          />
          <button className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700">
            Search
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="px-8 py-20 max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Nestify?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-blue-50">
            <MapPin className="text-blue-600 mb-4" size={36} />
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Verified Listings</h4>
            <p className="text-gray-500">Every property is verified before it goes live. No scams, no surprises.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-blue-50">
            <CreditCard className="text-blue-600 mb-4" size={36} />
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Flexible Rent Financing</h4>
            <p className="text-gray-500">Pay rent monthly while your landlord gets the full amount upfront.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-blue-50">
            <Shield className="text-blue-600 mb-4" size={36} />
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Secure & Transparent</h4>
            <p className="text-gray-500">Your payments and data are fully protected at every step.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white text-center px-8 py-20">
        <h3 className="text-4xl font-bold mb-4">Ready to find your next home?</h3>
        <p className="text-blue-100 text-lg mb-8">Join thousands of Nigerians finding verified rentals with ease.</p>
        <Link to="/listings" className="bg-white text-blue-600 font-bold px-8 py-4 rounded-full text-lg hover:bg-blue-50">
          Browse Listings
        </Link>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-400 text-sm border-t border-gray-100">
        © 2026 Nestify. Built for Nigeria.
      </footer>
    </div>
  )
}
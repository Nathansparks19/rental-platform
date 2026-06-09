import { Home, Plus, Users, CreditCard, Bell, LogOut, CheckCircle, Clock, XCircle, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const listings = [
  {
    id: 1,
    title: '3 Bedroom Flat',
    location: 'Lekki Phase 1, Lagos',
    price: 1500000,
    status: 'active',
    applications: 4,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=300',
  },
  {
    id: 2,
    title: '2 Bedroom Apartment',
    location: 'Wuse 2, Abuja',
    price: 1200000,
    status: 'active',
    applications: 2,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=300',
  },
  {
    id: 3,
    title: '4 Bedroom Duplex',
    location: 'GRA, Port Harcourt',
    price: 2500000,
    status: 'inactive',
    applications: 0,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=300',
  },
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
  approved: { label: 'Approved', color: 'bg-green-100 text-green-600' },
  pending: { label: 'Pending', color: 'bg-yellow-100 text-yellow-600' },
  rejected: { label: 'Rejected', color: 'bg-red-100 text-red-600' },
  received: { label: 'Received', color: 'bg-green-100 text-green-600' },
  upcoming: { label: 'Upcoming', color: 'bg-blue-100 text-blue-600' },
}

export default function LandlordDashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-100 flex flex-col py-8 px-4 fixed h-full">
        <Link to="/" className="text-2xl font-bold text-blue-600 px-4 mb-10">Ilé</Link>
        <nav className="space-y-1 flex-1">
          {[
            { id: 'overview', label: 'Overview', icon: Home },
            { id: 'listings', label: 'My Listings', icon: Home },
            { id: 'applications', label: 'Applications', icon: Users },
            { id: 'payments', label: 'Payments', icon: CreditCard },
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                activeTab === id ? 'bg-blue-50 text-blue-600' : 'text-gray-500 hover:bg-gray-50'
              }`}
            >
              <Icon size={18} />
              {label}
            </button>
          ))}
        </nav>
        <button className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-red-500 text-sm">
          <LogOut size={18} /> Sign Out
        </button>
      </div>

      {/* Main */}
      <div className="ml-64 flex-1 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {activeTab === 'overview' && 'Overview'}
              {activeTab === 'listings' && 'My Listings'}
              {activeTab === 'applications' && 'Applications'}
              {activeTab === 'payments' && 'Payments'}
            </h1>
            <p className="text-gray-500 text-sm mt-1">Welcome back, Mr. Adebayo</p>
          </div>
          <div className="flex items-center gap-3">
            {activeTab === 'listings' && (
              <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700">
                <Plus size={16} /> Add Listing
              </button>
            )}
            <button className="relative p-2 bg-white rounded-full shadow-sm">
              <Bell size={20} className="text-gray-400" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>
          </div>
        </div>

        {/* Overview */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <p className="text-gray-500 text-sm">Active Listings</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">2</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <p className="text-gray-500 text-sm">Total Applications</p>
                <p className="text-3xl font-bold text-blue-600 mt-1">6</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <p className="text-gray-500 text-sm">Revenue (Upfront)</p>
                <p className="text-3xl font-bold text-green-600 mt-1">₦2.7M</p>
              </div>
            </div>

            {/* Listings preview */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="font-semibold text-gray-900 mb-4">Your Listings</h2>
              <div className="space-y-3">
                {listings.map(listing => (
                  <div key={listing.id} className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0">
                    <div className="flex items-center gap-3">
                      <img src={listing.image} alt={listing.title} className="w-12 h-12 rounded-xl object-cover" />
                      <div>
                        <p className="font-medium text-gray-900">{listing.title}</p>
                        <p className="text-sm text-gray-400 flex items-center gap-1">
                          <MapPin size={12} /> {listing.location}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-blue-600">₦{listing.price.toLocaleString()}/yr</p>
                      <p className="text-xs text-gray-400">{listing.applications} applications</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Listings Tab */}
        {activeTab === 'listings' && (
          <div className="space-y-4">
            {listings.map(listing => (
              <div key={listing.id} className="bg-white rounded-2xl p-6 shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img src={listing.image} alt={listing.title} className="w-16 h-16 rounded-xl object-cover" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{listing.title}</h3>
                    <p className="text-gray-400 text-sm flex items-center gap-1">
                      <MapPin size={12} /> {listing.location}
                    </p>
                    <p className="text-blue-600 font-bold mt-1">₦{listing.price.toLocaleString()}/yr</p>
                  </div>
                </div>
                <div className="text-right space-y-2">
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                    listing.status === 'active' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-500'
                  }`}>
                    {listing.status === 'active' ? 'Active' : 'Inactive'}
                  </span>
                  <p className="text-xs text-gray-400">{listing.applications} applications</p>
                  <div className="flex gap-2 justify-end">
                    <button className="text-xs text-blue-600 hover:underline">Edit</button>
                    <button className="text-xs text-red-400 hover:underline">Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Applications Tab */}
        {activeTab === 'applications' && (
          <div className="space-y-4">
            {applications.map(app => (
              <div key={app.id} className="bg-white rounded-2xl p-6 shadow-sm flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900">{app.name}</h3>
                  <p className="text-gray-400 text-sm">{app.property}</p>
                  <p className="text-gray-400 text-xs mt-1">{app.date}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${statusConfig[app.status].color}`}>
                    {statusConfig[app.status].label}
                  </span>
                  {app.status === 'pending' && (
                    <div className="flex gap-2">
                      <button className="text-xs bg-green-600 text-white px-3 py-1 rounded-full hover:bg-green-700">
                        Approve
                      </button>
                      <button className="text-xs bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600">
                        Reject
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Payments Tab */}
        {activeTab === 'payments' && (
          <div className="space-y-4">
            <div className="bg-green-50 rounded-2xl p-6 mb-2">
              <p className="text-green-600 font-semibold">Ilé pays you upfront</p>
              <p className="text-green-400 text-sm mt-1">You receive the full annual rent. Tenants pay monthly to Ilé.</p>
            </div>
            {payments.map(payment => (
              <div key={payment.id} className="bg-white rounded-2xl p-6 shadow-sm flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900">{payment.tenant}</h3>
                  <p className="text-gray-400 text-sm">{payment.property}</p>
                  <p className="text-gray-400 text-xs mt-1">{payment.date}</p>
                </div>
                <div className="text-right space-y-2">
                  <p className="font-bold text-gray-900">₦{payment.amount.toLocaleString()}</p>
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${statusConfig[payment.status].color}`}>
                    {statusConfig[payment.status].label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
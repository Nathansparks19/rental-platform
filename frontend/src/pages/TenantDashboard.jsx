import { Home, CreditCard, Heart, Bell, LogOut, CheckCircle, Clock, XCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const applications = [
  {
    id: 1,
    property: '3 Bedroom Flat',
    location: 'Lekki Phase 1, Lagos',
    status: 'approved',
    date: 'June 1, 2026',
    price: 1500000,
  },
  {
    id: 2,
    property: '2 Bedroom Apartment',
    location: 'Wuse 2, Abuja',
    status: 'pending',
    date: 'June 5, 2026',
    price: 1200000,
  },
  {
    id: 3,
    property: '1 Bedroom Studio',
    location: 'Yaba, Lagos',
    status: 'rejected',
    date: 'May 28, 2026',
    price: 600000,
  },
]

const payments = [
  { id: 1, month: 'June 2026', amount: 125000, status: 'paid', due: 'June 1, 2026' },
  { id: 2, month: 'July 2026', amount: 125000, status: 'upcoming', due: 'July 1, 2026' },
  { id: 3, month: 'August 2026', amount: 125000, status: 'upcoming', due: 'August 1, 2026' },
]

const statusConfig = {
  approved: { label: 'Approved', color: 'bg-green-100 text-green-600', icon: CheckCircle },
  pending: { label: 'Pending', color: 'bg-yellow-100 text-yellow-600', icon: Clock },
  rejected: { label: 'Rejected', color: 'bg-red-100 text-red-600', icon: XCircle },
}

export default function TenantDashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-100 flex flex-col py-8 px-4 fixed h-full">
        <Link to="/" className="text-2xl font-bold text-blue-600 px-4 mb-10">Nestify</Link>
        <nav className="space-y-1 flex-1">
          {[
            { id: 'overview', label: 'Overview', icon: Home },
            { id: 'applications', label: 'Applications', icon: CheckCircle },
            { id: 'payments', label: 'Rent Payments', icon: CreditCard },
            { id: 'saved', label: 'Saved Properties', icon: Heart },
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
              {activeTab === 'applications' && 'My Applications'}
              {activeTab === 'payments' && 'Rent Payments'}
              {activeTab === 'saved' && 'Saved Properties'}
            </h1>
            <p className="text-gray-500 text-sm mt-1">Welcome back, John</p>
          </div>
          <button className="relative p-2 bg-white rounded-full shadow-sm">
            <Bell size={20} className="text-gray-400" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </button>
        </div>

        {/* Overview */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <p className="text-gray-500 text-sm">Active Applications</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">2</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <p className="text-gray-500 text-sm">Next Payment</p>
                <p className="text-3xl font-bold text-blue-600 mt-1">₦125k</p>
                <p className="text-xs text-gray-400 mt-1">Due July 1</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <p className="text-gray-500 text-sm">Saved Properties</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">4</p>
              </div>
            </div>

            {/* Recent Applications */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="font-semibold text-gray-900 mb-4">Recent Applications</h2>
              <div className="space-y-3">
                {applications.map(app => {
                  const { label, color, icon: Icon } = statusConfig[app.status]
                  return (
                    <div key={app.id} className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0">
                      <div>
                        <p className="font-medium text-gray-900">{app.property}</p>
                        <p className="text-sm text-gray-400">{app.location}</p>
                      </div>
                      <span className={`flex items-center gap-1 text-xs font-medium px-3 py-1 rounded-full ${color}`}>
                        <Icon size={12} /> {label}
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
          <div className="space-y-4">
            {applications.map(app => {
              const { label, color, icon: Icon } = statusConfig[app.status]
              return (
                <div key={app.id} className="bg-white rounded-2xl p-6 shadow-sm flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">{app.property}</h3>
                    <p className="text-gray-400 text-sm">{app.location}</p>
                    <p className="text-gray-400 text-xs mt-1">Applied: {app.date}</p>
                  </div>
                  <div className="text-right space-y-2">
                    <p className="font-bold text-blue-600">₦{app.price.toLocaleString()}/yr</p>
                    <span className={`flex items-center gap-1 text-xs font-medium px-3 py-1 rounded-full ${color}`}>
                      <Icon size={12} /> {label}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* Payments Tab */}
        {activeTab === 'payments' && (
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-2xl p-6 mb-2">
              <p className="text-blue-600 font-semibold">Rent Financing Active</p>
              <p className="text-blue-400 text-sm mt-1">3 Bedroom Flat, Lekki Phase 1 — ₦125,000/month</p>
            </div>
            {payments.map(payment => (
              <div key={payment.id} className="bg-white rounded-2xl p-6 shadow-sm flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900">{payment.month}</h3>
                  <p className="text-gray-400 text-sm">Due: {payment.due}</p>
                </div>
                <div className="text-right space-y-2">
                  <p className="font-bold text-gray-900">₦{payment.amount.toLocaleString()}</p>
                  {payment.status === 'paid' ? (
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-green-100 text-green-600">Paid</span>
                  ) : (
                    <button className="text-xs font-medium px-3 py-1 rounded-full bg-blue-600 text-white hover:bg-blue-700">
                      Pay Now
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Saved Tab */}
        {activeTab === 'saved' && (
          <div className="bg-white rounded-2xl p-12 shadow-sm text-center">
            <Heart size={48} className="text-gray-200 mx-auto mb-4" />
            <p className="text-gray-500">Your saved properties will appear here.</p>
            <Link to="/listings" className="mt-4 inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700">
              Browse Listings
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
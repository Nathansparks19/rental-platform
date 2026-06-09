import { Search, MapPin, Shield, CreditCard, Star, ArrowRight } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Navbar from '../components/Navbar'

const container = {
  maxWidth: '1100px',
  margin: '0 auto',
  padding: '0 40px',
}

export default function Landing() {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const handleSearch = () => {
    if (search) navigate(`/listings?search=${search}`)
    else navigate('/listings')
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FAFAF8', fontFamily: 'DM Sans, sans-serif', overflowX: 'hidden' }}>
      <Navbar />

      {/* Hero */}
      <section style={{ backgroundColor: '#0B4D2E', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.1,
          backgroundImage: `url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400')`,
          backgroundSize: 'cover', backgroundPosition: 'center'
        }} />
        <div style={{ ...container, position: 'relative', paddingTop: '112px', paddingBottom: '112px' }}>
          <span style={{
            display: 'inline-block', fontSize: '14px', fontWeight: 500,
            padding: '8px 16px', borderRadius: '999px', marginBottom: '32px',
            backgroundColor: 'rgba(232,160,32,0.15)', color: '#E8A020',
            border: '1px solid rgba(232,160,32,0.3)'
          }}>
            🇳🇬 Nigeria's Most Trusted Rental Platform
          </span>

          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '64px', fontWeight: 800, color: 'white', maxWidth: '700px', lineHeight: 1.1, marginBottom: '24px' }}>
            Find Your Perfect <span style={{ color: '#E8A020' }}>Home</span> in Nigeria
          </h1>

          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', maxWidth: '520px', marginBottom: '40px', lineHeight: 1.6 }}>
            Verified listings, transparent pricing, and flexible rent financing — pay monthly while your landlord gets paid upfront.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'white', borderRadius: '16px', padding: '12px 16px', boxShadow: '0 10px 40px rgba(0,0,0,0.2)', maxWidth: '560px' }}>
            <Search size={20} style={{ color: '#0B4D2E', marginRight: '12px', flexShrink: 0 }} />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSearch()}
              placeholder="Search by location, e.g. Lekki, Abuja..."
              style={{ flex: 1, outline: 'none', border: 'none', fontSize: '15px', color: '#1A1A1A', backgroundColor: 'transparent' }}
            />
            <button
              onClick={handleSearch}
              style={{ backgroundColor: '#0B4D2E', color: 'white', border: 'none', padding: '10px 24px', borderRadius: '12px', fontWeight: 600, cursor: 'pointer', flexShrink: 0 }}
            >
              Search
            </button>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginTop: '32px', fontSize: '14px', color: 'rgba(255,255,255,0.6)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Star size={14} style={{ color: '#E8A020', fill: '#E8A020' }} /> 4.9/5 rating
            </span>
            <span>•</span>
            <span>500+ verified listings</span>
            <span>•</span>
            <span>10,000+ happy tenants</span>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ backgroundColor: 'white', borderBottom: '1px solid #e7e5e4' }}>
        <div style={{ ...container, paddingTop: '48px', paddingBottom: '48px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px' }}>
          {[
            { value: '500+', label: 'Verified Listings' },
            { value: '10k+', label: 'Happy Tenants' },
            { value: '3', label: 'Cities Covered' },
            { value: '98%', label: 'Satisfaction Rate' },
          ].map(({ value, label }) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '36px', fontWeight: 800, color: '#0B4D2E', fontFamily: 'Playfair Display, serif', marginBottom: '4px' }}>{value}</p>
              <p style={{ fontSize: '14px', color: '#78716c' }}>{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section>
        <div style={{ ...container, paddingTop: '96px', paddingBottom: '96px' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: '42px', fontWeight: 800, color: '#0B4D2E', fontFamily: 'Playfair Display, serif', marginBottom: '16px' }}>
              Why choose Ilé?
            </h2>
            <p style={{ fontSize: '18px', color: '#78716c', maxWidth: '500px', margin: '0 auto' }}>
              We're solving the biggest problems in Nigerian real estate — one verified listing at a time.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {[
              { icon: MapPin, title: 'Verified Listings', desc: 'Every property is physically verified before going live. No scams, no fake listings, no surprises.', bg: '#F0F7F4', iconBg: '#0B4D2E' },
              { icon: CreditCard, title: 'Flexible Rent Financing', desc: 'Pay rent monthly at your pace. Your landlord receives the full annual amount upfront from us.', bg: '#FDF6EC', iconBg: '#E8A020' },
              { icon: Shield, title: 'Secure & Transparent', desc: 'Your payments and personal data are fully protected at every step of the process.', bg: '#F0F7F4', iconBg: '#0B4D2E' },
            ].map(({ icon: Icon, title, desc, bg, iconBg }) => (
              <div key={title} style={{ backgroundColor: bg, borderRadius: '24px', padding: '40px' }}>
                <div style={{ width: '48px', height: '48px', backgroundColor: iconBg, borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                  <Icon color="white" size={24} />
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0B4D2E', marginBottom: '12px' }}>{title}</h3>
                <p style={{ color: '#78716c', lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ backgroundColor: '#0B4D2E' }}>
        <div style={{ ...container, paddingTop: '96px', paddingBottom: '96px' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: '42px', fontWeight: 800, color: 'white', fontFamily: 'Playfair Display, serif', marginBottom: '16px' }}>
              How it works
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)' }}>Get into your new home in 3 simple steps</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {[
              { step: '01', title: 'Browse & Search', desc: 'Search verified listings by location, price, and property type across Nigeria.' },
              { step: '02', title: 'Apply Online', desc: 'Submit your application directly through Ilé. No agents, no middlemen.' },
              { step: '03', title: 'Move In & Pay Monthly', desc: 'Get approved, move in, and pay your rent monthly through our financing.' },
            ].map(({ step, title, desc }) => (
              <div key={step} style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '24px', padding: '40px' }}>
                <span style={{ fontSize: '56px', fontWeight: 900, color: '#E8A020', fontFamily: 'Playfair Display, serif', display: 'block', marginBottom: '16px' }}>{step}</span>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'white', marginBottom: '12px' }}>{title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section style={{ backgroundColor: 'white' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', padding: '96px 40px', textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '24px' }}>
            {[1,2,3,4,5].map(i => <Star key={i} size={20} style={{ color: '#E8A020', fill: '#E8A020' }} />)}
          </div>
          <p style={{ fontSize: '24px', color: '#44403c', lineHeight: 1.6, marginBottom: '32px', fontFamily: 'Playfair Display, serif' }}>
            "Ilé made finding a verified apartment in Lekki so easy. I paid my first month and moved in within a week. No agent stress, no wahala."
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: '#0B4D2E', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '14px' }}>AO</div>
            <div style={{ textAlign: 'left' }}>
              <p style={{ fontWeight: 600, color: '#1c1917' }}>Amaka Okonkwo</p>
              <p style={{ fontSize: '14px', color: '#a8a29e' }}>Tenant, Lagos</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#FDF6EC' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', padding: '96px 40px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '52px', fontWeight: 800, color: '#0B4D2E', fontFamily: 'Playfair Display, serif', marginBottom: '16px', lineHeight: 1.1 }}>
            Ready to find your next home?
          </h2>
          <p style={{ fontSize: '20px', color: '#78716c', marginBottom: '40px' }}>
            Join thousands of Nigerians finding verified rentals with flexible payment options.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
            <Link to="/listings" style={{ backgroundColor: '#0B4D2E', color: 'white', fontWeight: 700, padding: '16px 32px', borderRadius: '999px', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
              Browse Listings <ArrowRight size={20} />
            </Link>
            <Link to="/register" style={{ color: '#0B4D2E', fontWeight: 700, padding: '16px 32px', borderRadius: '999px', fontSize: '18px', border: '2px solid #0B4D2E', textDecoration: 'none' }}>
              Create Account
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: 'white', borderTop: '1px solid #e7e5e4' }}>
        <div style={{ ...container, paddingTop: '40px', paddingBottom: '40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '24px', fontWeight: 800, color: '#0B4D2E', fontFamily: 'Playfair Display, serif' }}>Ilé</span>
          <p style={{ fontSize: '14px', color: '#a8a29e' }}>© 2026 Ilé. Built for Nigeria.</p>
          <div style={{ display: 'flex', gap: '24px', fontSize: '14px', color: '#a8a29e' }}>
            <a href="#" style={{ color: '#a8a29e', textDecoration: 'none' }}>Privacy</a>
            <a href="#" style={{ color: '#a8a29e', textDecoration: 'none' }}>Terms</a>
            <a href="#" style={{ color: '#a8a29e', textDecoration: 'none' }}>Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
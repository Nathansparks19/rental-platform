import { Search, MapPin, Shield, CreditCard, Star, ArrowRight, CheckCircle } from 'lucide-react'
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

      {/* Hero — Split Layout */}
      <section style={{ backgroundColor: '#FAFAF8' }}>
        <div style={{ ...container, paddingTop: '80px', paddingBottom: '80px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
          {/* Left */}
          <div>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              fontSize: '13px', fontWeight: 600, color: '#0B4D2E',
              backgroundColor: '#E8F5EE', padding: '6px 14px',
              borderRadius: '999px', marginBottom: '28px',
              border: '1px solid #C3E0CE'
            }}>
              <span style={{ width: '6px', height: '6px', backgroundColor: '#0B4D2E', borderRadius: '50%', display: 'inline-block' }} />
              Nigeria's Most Trusted Rental Platform
            </span>

            <h1 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '56px', fontWeight: 800,
              color: '#0D1C12', lineHeight: 1.1,
              marginBottom: '20px'
            }}>
              Find a Home You'll <span style={{ color: '#0B4D2E', fontStyle: 'italic' }}>Love</span> in Nigeria
            </h1>

            <p style={{ fontSize: '17px', color: '#57534e', lineHeight: 1.7, marginBottom: '36px', maxWidth: '440px' }}>
              Verified listings across Lagos, Abuja and Port Harcourt. Pay rent monthly — your landlord gets the full amount upfront.
            </p>

            {/* Search */}
            <div style={{
              display: 'flex', alignItems: 'center',
              backgroundColor: 'white', borderRadius: '16px',
              padding: '8px 8px 8px 16px',
              boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
              border: '1px solid #e7e5e4',
              marginBottom: '24px'
            }}>
              <Search size={18} style={{ color: '#a8a29e', marginRight: '10px', flexShrink: 0 }} />
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
                style={{
                  backgroundColor: '#0B4D2E', color: 'white',
                  border: 'none', padding: '12px 24px',
                  borderRadius: '12px', fontWeight: 600,
                  fontSize: '15px', cursor: 'pointer', flexShrink: 0
                }}
              >
                Search
              </button>
            </div>

            {/* Trust signals */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              {['No agent fees', 'Verified listings', 'Monthly payments'].map(item => (
                <span key={item} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#78716c', fontWeight: 500 }}>
                  <CheckCircle size={14} style={{ color: '#0B4D2E' }} /> {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right — Image Stack */}
          <div style={{ position: 'relative', height: '520px' }}>
            <div style={{
              position: 'absolute', top: 0, right: 0,
              width: '88%', height: '75%',
              borderRadius: '24px', overflow: 'hidden',
              boxShadow: '0 24px 60px rgba(0,0,0,0.15)'
            }}>
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800"
                alt="Property"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{
              position: 'absolute', bottom: 0, left: 0,
              width: '60%', height: '45%',
              borderRadius: '20px', overflow: 'hidden',
              boxShadow: '0 16px 40px rgba(0,0,0,0.12)',
              border: '4px solid #FAFAF8'
            }}>
              <img
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500"
                alt="Property"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            {/* Floating card */}
            <div style={{
              position: 'absolute', top: '52%', left: '10%',
              backgroundColor: 'white', borderRadius: '16px',
              padding: '14px 18px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
              display: 'flex', alignItems: 'center', gap: '12px',
              zIndex: 10
            }}>
              <div style={{ width: '40px', height: '40px', backgroundColor: '#E8F5EE', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <MapPin size={18} style={{ color: '#0B4D2E' }} />
              </div>
              <div>
                <p style={{ fontSize: '13px', fontWeight: 700, color: '#0D1C12', marginBottom: '2px' }}>Lekki Phase 1</p>
                <p style={{ fontSize: '12px', color: '#78716c' }}>₦125,000/month</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ backgroundColor: '#0B4D2E' }}>
        <div style={{ ...container, paddingTop: '40px', paddingBottom: '40px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px' }}>
          {[
            { value: '500+', label: 'Verified Listings' },
            { value: '10k+', label: 'Happy Tenants' },
            { value: '3', label: 'Cities Covered' },
            { value: '98%', label: 'Satisfaction Rate' },
          ].map(({ value, label }) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '36px', fontWeight: 800, color: '#E8A020', fontFamily: 'Playfair Display, serif', marginBottom: '4px' }}>{value}</p>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section style={{ backgroundColor: 'white' }}>
        <div style={{ ...container, paddingTop: '96px', paddingBottom: '96px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <div>
              <span style={{ fontSize: '13px', fontWeight: 600, color: '#0B4D2E', textTransform: 'uppercase', letterSpacing: '1px' }}>Why Ilé</span>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '42px', fontWeight: 800, color: '#0D1C12', marginTop: '12px', marginBottom: '20px', lineHeight: 1.2 }}>
                Renting in Nigeria, finally done right
              </h2>
              <p style={{ fontSize: '16px', color: '#78716c', lineHeight: 1.7, marginBottom: '40px' }}>
                We built Ilé to solve the real problems Nigerians face when looking for a home — fake listings, agent wahala, and the burden of paying a full year upfront.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  { title: 'Verified Listings Only', desc: 'Every property is physically inspected before going live.' },
                  { title: 'Pay Rent Monthly', desc: 'We finance your rent so you pay monthly. Your landlord gets paid upfront.' },
                  { title: 'No Hidden Fees', desc: 'What you see is what you pay. No agent commissions, no surprises.' },
                ].map(({ title, desc }) => (
                  <div key={title} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{ width: '24px', height: '24px', backgroundColor: '#E8F5EE', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                      <CheckCircle size={14} style={{ color: '#0B4D2E' }} />
                    </div>
                    <div>
                      <p style={{ fontWeight: 700, color: '#0D1C12', marginBottom: '4px' }}>{title}</p>
                      <p style={{ fontSize: '14px', color: '#78716c', lineHeight: 1.6 }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ position: 'relative', height: '480px' }}>
              <div style={{ width: '100%', height: '100%', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 24px 60px rgba(0,0,0,0.12)' }}>
                <img
                  src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800"
                  alt="Interior"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{
                position: 'absolute', bottom: '24px', left: '-24px',
                backgroundColor: 'white', borderRadius: '16px',
                padding: '16px 20px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              }}>
                <p style={{ fontSize: '12px', color: '#78716c', marginBottom: '4px' }}>Monthly payment</p>
                <p style={{ fontSize: '22px', fontWeight: 800, color: '#0B4D2E', fontFamily: 'Playfair Display, serif' }}>₦100,000</p>
                <p style={{ fontSize: '12px', color: '#a8a29e' }}>instead of ₦1.2M upfront</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ backgroundColor: '#FAFAF8' }}>
        <div style={{ ...container, paddingTop: '96px', paddingBottom: '96px' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span style={{ fontSize: '13px', fontWeight: 600, color: '#0B4D2E', textTransform: 'uppercase', letterSpacing: '1px' }}>Process</span>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '42px', fontWeight: 800, color: '#0D1C12', marginTop: '12px' }}>
              Move in within days, not months
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {[
              { step: '01', title: 'Browse & Search', desc: 'Search verified listings by location, price, and type across Lagos, Abuja, and Port Harcourt.', color: '#E8F5EE' },
              { step: '02', title: 'Apply Online', desc: 'Submit your application in minutes. No agents, no back and forth, no unnecessary stress.', color: '#FDF6EC' },
              { step: '03', title: 'Move In & Pay Monthly', desc: 'Get approved, move in, and start paying monthly. We handle the landlord upfront payment.', color: '#E8F5EE' },
            ].map(({ step, title, desc, color }) => (
              <div key={step} style={{ backgroundColor: color, borderRadius: '24px', padding: '40px' }}>
                <span style={{ fontSize: '48px', fontWeight: 900, color: '#0B4D2E', fontFamily: 'Playfair Display, serif', opacity: 0.15, display: 'block', marginBottom: '16px' }}>{step}</span>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0D1C12', marginBottom: '12px' }}>{title}</h3>
                <p style={{ color: '#78716c', lineHeight: 1.6, fontSize: '15px' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section style={{ backgroundColor: '#0B4D2E' }}>
        <div style={{ ...container, paddingTop: '96px', paddingBottom: '96px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', gap: '4px', marginBottom: '24px' }}>
                {[1,2,3,4,5].map(i => <Star key={i} size={20} style={{ color: '#E8A020', fill: '#E8A020' }} />)}
              </div>
              <p style={{ fontSize: '26px', color: 'white', lineHeight: 1.6, marginBottom: '32px', fontFamily: 'Playfair Display, serif' }}>
                "Ilé made finding a verified apartment in Lekki so easy. I paid my first month and moved in within a week. No agent stress, no wahala."
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#E8A020', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700 }}>AO</div>
                <div>
                  <p style={{ fontWeight: 600, color: 'white' }}>Amaka Okonkwo</p>
                  <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)' }}>Tenant, Lekki Phase 1</p>
                </div>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {[
                { value: '4.9/5', label: 'Average rating' },
                { value: '< 7 days', label: 'Average move-in time' },
                { value: '0', label: 'Agent fees' },
                { value: '100%', label: 'Verified listings' },
              ].map(({ value, label }) => (
                <div key={label} style={{ backgroundColor: 'rgba(255,255,255,0.07)', borderRadius: '16px', padding: '24px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <p style={{ fontSize: '28px', fontWeight: 800, color: '#E8A020', fontFamily: 'Playfair Display, serif', marginBottom: '4px' }}>{value}</p>
                  <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)' }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#FDF6EC' }}>
        <div style={{ ...container, paddingTop: '96px', paddingBottom: '96px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '52px', fontWeight: 800, color: '#0D1C12', marginBottom: '16px', lineHeight: 1.1 }}>
            Your next home is waiting
          </h2>
          <p style={{ fontSize: '18px', color: '#78716c', marginBottom: '40px', maxWidth: '500px', margin: '0 auto 40px' }}>
            Join thousands of Nigerians who found their perfect home through Ilé.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
            <Link to="/listings" style={{
              backgroundColor: '#0B4D2E', color: 'white',
              fontWeight: 700, padding: '16px 32px',
              borderRadius: '999px', fontSize: '16px',
              display: 'flex', alignItems: 'center', gap: '8px',
              textDecoration: 'none'
            }}>
              Browse Listings <ArrowRight size={18} />
            </Link>
            <Link to="/register" style={{
              color: '#0B4D2E', fontWeight: 700,
              padding: '16px 32px', borderRadius: '999px',
              fontSize: '16px', border: '2px solid #0B4D2E',
              textDecoration: 'none'
            }}>
              Create Account
            </Link>
          </div>
          <Link to="/waitlist" style={{ color: '#78716c', fontSize: '14px', textDecoration: 'underline', marginTop: '20px', display: 'block' }}>
            Not ready? Join the waitlist instead
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#0D1C12' }}>
        <div style={{ ...container, paddingTop: '48px', paddingBottom: '48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '24px', fontWeight: 800, color: 'white', fontFamily: 'Playfair Display, serif' }}>Ilé</span>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)' }}>© 2026 Ilé. Built for Nigeria.</p>
          <div style={{ display: 'flex', gap: '24px', fontSize: '14px' }}>
            {['Privacy', 'Terms', 'Contact'].map(item => (
              <a key={item} href="#" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>{item}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
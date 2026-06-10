import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Listings from './pages/Listings'
import PropertyDetail from './pages/PropertyDetail'
import Login from './pages/Login'
import Register from './pages/Register'
import TenantDashboard from './pages/TenantDashboard'
import LandlordDashboard from './pages/LandlordDashboard'
import Waitlist from './pages/Waitlist'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/listings/:id" element={<PropertyDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tenant" element={<TenantDashboard />} />
        <Route path="/landlord" element={<LandlordDashboard />} />
        <Route path="/waitlist" element={<Waitlist />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
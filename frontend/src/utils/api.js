const BASE_URL = 'http://127.0.0.1:8000'

const getToken = () => localStorage.getItem('token')

export const api = {
  // Auth
  register: async (data) => {
    const res = await fetch(`${BASE_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    return res.json()
  },

  login: async (data) => {
    const res = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    return res.json()
  },

  // Properties
  getProperties: async () => {
    const res = await fetch(`${BASE_URL}/properties`)
    return res.json()
  },

  getProperty: async (id) => {
    const res = await fetch(`${BASE_URL}/properties/${id}`)
    return res.json()
  },

  createProperty: async (data) => {
    const res = await fetch(`${BASE_URL}/properties`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getToken()}`,
      },
      body: JSON.stringify(data),
    })
    return res.json()
  },

  // Applications
  applyForProperty: async (property_id) => {
    const res = await fetch(`${BASE_URL}/applications`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getToken()}`,
      },
      body: JSON.stringify({ property_id }),
    })
    return res.json()
  },

  getMyApplications: async () => {
    const res = await fetch(`${BASE_URL}/applications/mine`, {
      headers: { 'Authorization': `Bearer ${getToken()}` },
    })
    return res.json()
  },
}
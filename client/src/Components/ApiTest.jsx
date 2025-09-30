import React, { useEffect, useState } from 'react'

const ApiTest = () => {
  const [status, setStatus] = useState('Testing...')
  const [data, setData] = useState(null)

  useEffect(() => {
    const testAPI = async () => {
      try {
        console.log('🔍 Environment Variables:')
        console.log('VITE_API_URL:', import.meta.env.VITE_API_URL)
        console.log('NODE_ENV:', import.meta.env.NODE_ENV)
        
        // Test 1: Direct fetch to backend root
        console.log('🧪 Test 1: Backend root')
        const rootResponse = await fetch('https://portfolio-2-5ta4.onrender.com/')
        console.log('Root status:', rootResponse.status)
        
        // Test 2: Portfolio API endpoint
        console.log('🧪 Test 2: Portfolio API')
        const apiResponse = await fetch('https://portfolio-2-5ta4.onrender.com/api/v1/portfolio')
        console.log('API status:', apiResponse.status)
        
        if (apiResponse.ok) {
          const result = await apiResponse.json()
          console.log('✅ API Response:', result)
          setData(result)
          setStatus('✅ API Working!')
        } else {
          setStatus(`❌ API Error: ${apiResponse.status}`)
        }
        
      } catch (error) {
        console.error('❌ Network Error:', error)
        setStatus(`❌ Network Error: ${error.message}`)
      }
    }

    testAPI()
  }, [])

  return (
    <div style={{ 
      position: 'fixed', 
      top: '10px', 
      right: '10px', 
      background: 'white', 
      padding: '10px', 
      border: '1px solid #ccc',
      zIndex: 9999,
      fontSize: '12px',
      maxWidth: '300px'
    }}>
      <h4>API Test</h4>
      <p>Status: {status}</p>
      <p>API URL: {import.meta.env.VITE_API_URL}</p>
      {data && (
        <details>
          <summary>API Data</summary>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </details>
      )}
    </div>
  )
}

export default ApiTest
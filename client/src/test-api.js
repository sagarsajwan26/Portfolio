// Add this to any component to test API connection
const testAPI = async () => {
  try {
    console.log('Testing API connection...')
    console.log('API URL:', import.meta.env.VITE_API_URL)
    
    const response = await fetch('https://portfolio-2-5ta4.onrender.com/api/v1/portfolio')
    console.log('Response status:', response.status)
    
    if (response.ok) {
      const data = await response.json()
      console.log('API Response:', data)
    } else {
      console.error('API Error:', response.statusText)
    }
  } catch (error) {
    console.error('Network Error:', error)
  }
}

// Call this in useEffect or button click
testAPI()
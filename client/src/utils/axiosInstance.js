import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api/v1',
    timeout: 15000,
    headers: {
        // Don't set Content-Type globally; let Axios infer for FormData/multipart
        'Accept': 'application/json'
    }
})

if (import.meta.env.DEV) {
    console.log('API Base URL:', import.meta.env.VITE_API_URL)
}

axiosInstance.interceptors.request.use((config)=>{
    const token = localStorage.getItem('token')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    // If payload is FormData, ensure we don't force JSON content-type
    const isFormData = typeof FormData !== 'undefined' && config.data instanceof FormData
    if (!isFormData && config.method && config.method.toUpperCase() !== 'GET') {
        // For non-FormData, default to JSON
        if (!config.headers['Content-Type']) {
            config.headers['Content-Type'] = 'application/json'
        }
    } else if (isFormData) {
        // Let browser set multipart boundary
        delete config.headers['Content-Type']
    }

    return config
},
(error)=>{
    return Promise.reject(error)
})


axiosInstance.interceptors.response.use(
    response => response,
    error => {
        if (import.meta.env.DEV) {
            console.error('API Error:', error.response?.data || error.message)
        }

        if (error.response?.status === 401) {
            localStorage.removeItem('token')
        }

        return Promise.reject(error)
    }
)

export default axiosInstance
import axios from 'axios'

const axiosInstance= axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api/v1',
    withCredentials: false,
    timeout: 30000, // 30 seconds timeout
    headers: {
        'Content-Type': 'application/json'
    }
})

console.log('API Base URL:', import.meta.env.VITE_API_URL)

axiosInstance.interceptors.request.use((config)=>{
    const token = localStorage.getItem('token') 
    if(token) {
        config.headers.Authorization=`Bearer ${token}`
    }
    return config
},
(error)=>{
    return Promise.reject(error)
}
)


axiosInstance.interceptors.response.use((response)=>response,
(error)=>{
    console.error('Axios Error:', {
        message: error.message,
        code: error.code,
        response: error.response?.data,
        status: error.response?.status
    })
    
    if(error.response?.status === 401){
        localStorage.removeItem('token')
    }
    return Promise.reject(error)
}
)


export default axiosInstance
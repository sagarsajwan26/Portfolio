import axios from 'axios'

const axiosInstance= axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api/v1',
    withCredentials:true,
    
})

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
    if(error.response.status===401){
        localStorage.removeItem('token')
        
    }
    return Promise.reject(error)
}
)


export default axiosInstance
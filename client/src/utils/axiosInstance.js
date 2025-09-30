import axios from 'axios'

const axiosInstance= axios.create({
    baseURL:'https://portfolio-2-5ta4.onrender.com/api/v1',
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
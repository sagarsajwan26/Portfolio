import axios from 'axios'

const axiosInstance= axios.create({
    baseUrl:'http://localhost:3000/api/v1',
    withCredentials:true
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
        window.location.href='/login'
    }
    return Promise.reject(error)
}
)



export const axiosBaseQuery= ({baseUrl}={baseUrl:''})=>{
async({url, method, data, params})=>{
    try {
            const response = await axiosInstance({url, method, data, params})
            return {data:response.data}

    } catch (error) {
        let err= error 
        return {
            error:{
                status:err.response?.status,
                data:err.response?.data ||  err.message
            }
        }
    }
}
}
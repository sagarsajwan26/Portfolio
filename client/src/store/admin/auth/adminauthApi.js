import {createApi } from '@reduxjs/toolkit/query/react'
import { axiosBaseQuery } from '../../../utils/axiosInstance'


export const authApi= createApi({
    reducerPath:'auth',
    baseQuery:axiosBaseQuery({baseUrl:''}),
    endpoints:(builder)=>({
        loginAdmin:builder.mutation({
            query:(data)=>(
                {
                    url:"/auth/login",
                    method:'POST',
                    data
                }
            )
        })
    })
})


export const {useLoginAdminMutation } = authApi
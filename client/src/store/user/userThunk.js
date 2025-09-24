import { createAsyncThunk } from "@reduxjs/toolkit";


export const getuser= createAsyncThunk('/user/getuser',async({rejectWithValue})=>{
    const token = localStorage.getItem('token')
    try {
        const res= await axiosInstance.get('/user/') 
      
        return res.data.data
        
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})
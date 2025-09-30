
import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "../../utils/apiRoutes";
export const getPortfolioDetails= createAsyncThunk('/user/portfolio', async(_Draggable,{rejectWithValue})=>{
    try {
        console.log('🚀 Fetching portfolio data...')
        console.log('API URL:', import.meta.env.VITE_API_URL)
        
        const res= await apiService.getPortfolio()
        console.log('✅ Portfolio API Response:', res.data)
        
        return res.data.data
        
    } catch (error) {
        console.error('❌ Portfolio API Error:', error)
        console.error('Error response:', error.response?.data)
        console.error('Error status:', error.response?.status)
        return rejectWithValue(error.response?.data || error.message)
    }
})
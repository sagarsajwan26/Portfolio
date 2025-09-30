
import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "../../utils/apiRoutes";
export const getPortfolioDetails= createAsyncThunk('/user/portfolio', async(_Draggable,{rejectWithValue})=>{
    try {
        console.log('🚀 Fetching portfolio data...')
        console.log('API URL:', import.meta.env.VITE_API_URL)
        
        // Wake up the backend first (Render free tier sleeps)
        console.log('⏰ Waking up backend...')
        try {
            await fetch('https://portfolio-2-5ta4.onrender.com/', { 
                method: 'GET',
                mode: 'no-cors' // Bypass CORS for wake-up call
            })
            // Wait 2 seconds for backend to wake up
            await new Promise(resolve => setTimeout(resolve, 2000))
        } catch (wakeError) {
            console.log('Wake-up call completed (expected to fail with no-cors)')
        }
        
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
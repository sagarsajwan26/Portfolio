
import { createSlice } from "@reduxjs/toolkit"
import { getPortfolioDetails } from "./portfolioThunk"

const initialState={
    data:{},
    loading: false,
    error: null
}


const portfolioSlice= createSlice({
    name:'portfolio',
    initialState,
    reducers:{
       
    },
    extraReducers:(builder)=>{
        builder
            .addCase(getPortfolioDetails.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(getPortfolioDetails.fulfilled,(state,action)=>{
                state.loading = false
                state.data = action.payload
                console.log('✅ Portfolio data stored in Redux:', action.payload)
            })
            .addCase(getPortfolioDetails.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
                console.error('❌ Portfolio fetch failed:', action.payload)
            })
    }
   
})


export const { } = portfolioSlice.actions

export default portfolioSlice.reducer


import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "../../utils/apiRoutes";
export const getPortfolioDetails = createAsyncThunk(
    'portfolio/getDetails',
    async (_, { rejectWithValue }) => {
        try {
            const res = await apiService.getPortfolio()
            return res.data.data
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message)
        }
    }
)
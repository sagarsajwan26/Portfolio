import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "../../utils/apiRoutes";

export const sendMail = createAsyncThunk('/user/sendMail',async(data,{rejectWithValue})=>{
    try {
        const res= await apiService.submitContact(data)
        return res.data.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})
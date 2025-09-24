import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "../../utils/apiRoutes";

export const fetchProjectsForAdmin= createAsyncThunk('admin/getallProjects',async(_,{rejectWithValue})=>{
    try {
        const res= await apiService.getProjectsForAdmin()
       
        
        return res.data.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})
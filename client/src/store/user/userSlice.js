
import { createSlice } from "@reduxjs/toolkit"
import { addUserWorkExperience, deleteUserWorkExperience, getuserDetails, udpateUserWorkExperience, updateUserContactInfo, updateUserDetails, updateUserProfilePic, updateUserSocialInfo } from "./userThunk"

const initialState={
    user:null
}


const userSlice= createSlice({
    name:'user',
    initialState,
    reducers:{
       
    },
   extraReducers:(builder)=>{
    builder.addCase(getuserDetails.fulfilled,(state,action)=>{
    
        
        state.user= action.payload
    })

    builder.addCase(updateUserDetails.fulfilled,(state,action)=>{
        state.user= {...action.payload}
    })

    builder.addCase(udpateUserWorkExperience.fulfilled,(state,action)=>{
        state.user= {...action.payload}
    })

    builder.addCase(addUserWorkExperience.fulfilled, (state,action)=>{
        state.user.workExperience= action.payload.workExperience
        
    })
    builder.addCase(deleteUserWorkExperience.fulfilled, (state, action)=>{
        state.user= {...action.payload}
    })
    builder.addCase(updateUserContactInfo.fulfilled, (state, action)=>{
        state.user= {...action.payload}
    })
    builder.addCase(updateUserSocialInfo.fulfilled, (state, action)=>{
        state.user= {...action.payload}
    })
    builder.addCase(updateUserProfilePic.fulfilled,(state,action)=>{
        state.user= action.payload
    })

   }
})


export const { } = userSlice.actions

export default userSlice.reducer

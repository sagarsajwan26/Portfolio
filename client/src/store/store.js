
import { configureStore } from '@reduxjs/toolkit'
import authSlice from './auth/authSlice'
import userSlice from './user/userSlice'
import portfolioSlice from './portfolio/portfolioSlice'
import dashboardSlice from './dashboard/dashboardSlice'
import skillSlice from './skills/skillslice'
export const store= configureStore(
    {
        reducer:{
         
          auth:authSlice,
          portfolio:portfolioSlice,
          user:userSlice,
          dashboard:dashboardSlice,
          skill:skillSlice
        }  
    }
)
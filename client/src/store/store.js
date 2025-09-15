
import { configureStore } from '@reduxjs/toolkit'

const store= configureStore(
    {
        reducer:{
            auth:authReducer,
            admin:adminReducer,
            project:projectReducer,
            skill:skillReducer
        }        
    }
)
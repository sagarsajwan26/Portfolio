import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import {rateLimit} from 'express-rate-limit'
import authRoutes from './routes/auth.routes.js'
import userRoutes from './routes/user.routes.js'
import skillRoutes from './routes/skill.routes.js'
import projectRoutes from './routes/project.routes.js'
import { errorHandler } from './middleware/errorHandler.js'
const app= express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin:"http://localhost:5173",
    Credential:true,
    methods:["GET","POST","PUT","DELETE"]
}))





app.use('/api/v1/auth',authRoutes)
app.use('/api/v1/user',userRoutes)
app.use('/api/v1/skill',skillRoutes)
app.use('/api/v1/project',projectRoutes)

app.get('/',(req,res)=>{
    res.send('my profile server is working properly')
})

app.use(errorHandler)

export {app}

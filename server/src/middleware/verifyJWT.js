import jwt from 'jsonwebtoken'
import { ApiError } from '../utils/ApiError.js'


export const verifyJWT = (req,res,next)=>{
    const authHeader = req?.headers?.authorization || ''
    const bearerToken = authHeader.startsWith('Bearer ')
        ? authHeader.split(' ')[1]
        : undefined
    const  token = req?.cookies?.token ||  bearerToken
    if(!token){
        throw new ApiError(401,'Unauthorized Request')
    } 
    
    try {
            const decodeToken = jwt.verify(token, process.env.JWT_SECRET) 
            if(!decodeToken){
                throw new ApiError(401, 'Unauthorized Request')
            }
            req.user= decodeToken
            next()
        

    } catch (error) {
            return res.status(401).json({
                status:'error',
                message:'Invalid Token'
            })
    }
}
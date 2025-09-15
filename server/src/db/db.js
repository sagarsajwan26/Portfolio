import mongoose from 'mongoose'

export const connectDB=async()=>{
    try {
       const instance= await mongoose.connect(process.env.MONGO_DB_URI)
        console.log("DB connected", instance.connections[0].host)
    } catch (error) {
        console.log(error)
        process.env(1)
    }
}
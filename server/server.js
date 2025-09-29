import { app } from "./src/app.js";
import { connectDB } from "./src/db/db.js";
import 'dotenv/config'
const PORT= process.env.PORT || 3000;


connectDB().then(()=>{
    app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})
}) 
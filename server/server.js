import { app } from "./src/app.js";
import { connectDB } from "./src/db/db.js";
import 'dotenv/config'

const PORT = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Database connection failed:', error);
    process.exit(1);
  });
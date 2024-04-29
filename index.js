import app from "./App.js";
import mongoose from "mongoose";
const connectDB = async () => {
    try {
     
      const connectionInstance = await mongoose.connect(
        `mongodb+srv://maulicreations07:pass147258@cluster0.h9lytih.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
      );
      console.log(
        `\n Connected to MongoDB !! DN HOST:${connectionInstance.connection.host}`
      );
    } catch (error) {
      console.log("Error while connecting DB", error);
      process.exit(1);
    }
  };



connectDB().then(()=>{
    app.listen(8000 , ()=>{
        console.log(`Server is running on port 8000`)
    })
})

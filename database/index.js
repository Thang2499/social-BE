import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();
const connectDatabase = () => {
    // config
    const connectString = process.env.CONNECT_STRING;
    return mongoose.connect(connectString);

}
export default connectDatabase;
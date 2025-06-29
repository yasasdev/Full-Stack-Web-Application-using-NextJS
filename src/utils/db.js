import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
    } catch (error) {
        throw new Error(`Database connection failed!: ${error.message}`);
    }
}

export default connectDB;
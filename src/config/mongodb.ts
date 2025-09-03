import mongoose from 'mongoose';
import { config } from 'dotenv';

config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/lupylo';

const connectMongoDB = async (): Promise<void> => {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB connection established successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

export default connectMongoDB;
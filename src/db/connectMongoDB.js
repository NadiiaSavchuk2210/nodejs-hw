import mongoose from 'mongoose';
import { ENV_VARS } from '../constants/envVars.js';
import { getEnvVar } from '../helper/getEnvVar.js';

const clientOptions = {
  serverApi: { version: '1', strict: true, deprecationErrors: true },
};

export const connectMongoDB = async () => {
  try {
    const mongoUrl = getEnvVar(ENV_VARS.MONGO_URL);
    await mongoose.connect(mongoUrl, clientOptions);
    console.log('✅ MongoDB connection established successfully');
  } catch (error) {
    console.error('❌ Failed to connect to MongoDB:', error.message);
    process.exit(1);
  }
};

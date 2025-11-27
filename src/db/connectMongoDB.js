import mongoose from 'mongoose';
import { ENV_VARS } from '../constants/envVars.js';
import { getEnvVar } from '../helper/getEnvVar.js';

const clientOptions = {
  serverApi: { version: '1', strict: true, deprecationErrors: true },
};

export const connectMongoDB = async () => {
  try {
    const user = getEnvVar(ENV_VARS.DB_USER);
    const password = getEnvVar(ENV_VARS.DB_PASSWORD);
    const dbName = getEnvVar(ENV_VARS.DB_NAME);
    const host = getEnvVar(ENV_VARS.DB_HOST);
    const url = `mongodb+srv://${user}:${password}@${host}/${dbName}?appName=Cluster0`;

    await mongoose.connect(url, clientOptions);
    console.log('✅ MongoDB connection established successfully');
  } catch (error) {
    console.error('❌ Failed to connect to MongoDB:', error.message);
    process.exit(1);
  }
};

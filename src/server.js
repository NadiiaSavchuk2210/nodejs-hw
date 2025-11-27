import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { getEnvVar } from './helper/getEnvVar.js';
import { ENV_VARS } from './constants/envVars.js';
import { connectMongoDB } from './db/connectMongoDB.js';
import { logger } from './middleware/logger.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import { errorHandler } from './middleware/errorHandler.js';
import router from './routes/index.js';

const app = express();
const PORT = getEnvVar(ENV_VARS.PORT, 3000);

// Global middleware setup
app.use(logger(), express.json(), cors());

// Register routes
app.use(router);

// Fallback middlewares
app.use(notFoundHandler);
app.use(errorHandler);

// Initialize database connection
await connectMongoDB();

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { connectMongoDB } from './db/connectMongoDB.js';
import { logger } from './middleware/logger.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import { errorHandler } from './middleware/errorHandler.js';
import notesRoutes from './routes/notesRoutes.js';
import authRoutes from './routes/authRoutes.js';
import { errors } from 'celebrate';
import cookieParser from 'cookie-parser';

const app = express();
const PORT = process.env.PORT ?? 3000;

// Global middleware setup
app.use(logger(), express.json(), cors(), cookieParser());

// Register routes
app.use(authRoutes);
app.use(notesRoutes);

// Fallback middlewares
app.use(notFoundHandler);
app.use(errors());
app.use(errorHandler);

// Initialize database connection
await connectMongoDB();

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

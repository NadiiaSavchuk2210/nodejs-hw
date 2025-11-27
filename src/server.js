import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { logger } from './middleware/logger.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import { errorHandler } from './middleware/errorHandler.js';
import router from './routes/index.js';

export const startServer = async () => {
  const app = express();

  app.use(logger(), express.json(), cors());

  app.use(router);

  app.use(notFoundHandler);
  app.use(errorHandler);
};

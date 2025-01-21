import createError from 'http-errors';
import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import sequelize from './db/connection.js';

import authRoutes from './routes/auth.js';
import customerRoutes from './routes/customer.js';
import investmentRoutes from './routes/investment.js';
import receiptRoutes from './routes/receipt.js';

import { createApiResponse } from './utilities/httpResponse.js';
import { verifyAccessToken } from './middlewares/authMiddleware.js';

const app = express();

sequelize.sync();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("hello");
})
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/customer', customerRoutes);
app.use('/api/v1/investment', investmentRoutes);
app.use('/api/v1/receipt', receiptRoutes);

app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  let notFoundData = {
    message: "Requested resource is not found.."
  };
  res.json(createApiResponse(notFoundData, 404));
});

app.listen(process.env.APP_PORT);

import { NotFoundError } from '../error/notFound.error.js';

export const notFound = (req, res, next) => {
  throw new NotFoundError(`Not Found - ${req.originalUrl}`);
};

export const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    statusCode,
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

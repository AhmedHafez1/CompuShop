import { NotFoundError } from '../error/notFound.error';

export const notFound = (req, res, next) => {
  throw new NotFoundError(`Not Found - ${req.originalUrl}`);
};

export const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;

  // NOTE: checking for invalid ObjectId moved to it's own middleware
  // See README for further info.

  res.status(err.statusCode || 500).json({
    message: message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

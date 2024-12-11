import { isValidObjectId } from 'mongoose';
import { NotFoundError } from '../error/notFound.error.js';

// Checks if the req.params.id is a valid Mongoose ObjectId.

const checkObjectId = (req, res, next) => {
  if (!isValidObjectId(req.params.id)) {
    return next(new NotFoundError(`Invalid ObjectId of:  ${req.params.id}`));
  }

  next();
};

export default checkObjectId;

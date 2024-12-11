import { isValidObjectId } from 'mongoose';
import { NotFoundError } from '../error/notFound.error';

// Checks if the req.params.id is a valid Mongoose ObjectId.

function checkObjectId(req, res, next) {
  if (!isValidObjectId(req.params.id)) {
    throw new NotFoundError(`Invalid ObjectId of:  ${req.params.id}`);
  }
}

export default checkObjectId;

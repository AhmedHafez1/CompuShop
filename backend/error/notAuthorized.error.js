import { AppError } from './app.error';

export class NotAuthorizedError extends AppError {
  constructor(message) {
    super(message, 401);
  }
}

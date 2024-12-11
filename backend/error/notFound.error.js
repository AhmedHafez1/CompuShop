import { AppError } from './app.error';

export class NotFoundError extends AppError {
  constructor(message) {
    super(message, 404);
  }
}

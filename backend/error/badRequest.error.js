import { AppError } from './app.error';

export class BadRequestError extends AppError {
  constructor(message) {
    super(message, 400);
  }
}

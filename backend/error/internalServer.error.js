import { AppError } from './app.error';

export class InternalServerError extends AppError {
  constructor(message) {
    super(message, 500);
  }
}

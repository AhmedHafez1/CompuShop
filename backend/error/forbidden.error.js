import { AppError } from './app.error';

export class ForbiddenError extends AppError {
  constructor(message) {
    super(message, 403);
  }
}

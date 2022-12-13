import { ValidationError } from 'express-validator';

export class RequestValidationError extends Error {
  constructor(private errors: ValidationError[]) {
    super('Invalid request parameters');

    // Just becasue we are extending a build in class
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }
}

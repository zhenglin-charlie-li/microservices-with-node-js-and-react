

export class DatabaseConnectionError extends Error {
  reason = 'Error connecting to database';
  constructor() {
    super('Error connecting to db');

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }
}

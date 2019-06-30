// Extending Error classes.
// Handling validation exception in api request

// Super keywords used to call the base class properties
// w/out calling super the this property of a class is undefined.
export class ValidationException extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationException';
  }
}

// Super keywords used to call the base class properties
// w/out calling super the this property of a class is undefined.

// Extending Error classes.
// Handling validation exception in api request
export class ValidationException extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationException';
  }
}

export class InternalException extends Error {
  constructor(message) {
    super(message);
    this.name = 'InternalException';

    // TODO: do some additional logging here.
  }
}

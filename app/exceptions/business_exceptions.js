`use strict`;

class AppError extends Error{
    constructor(message, status){
        super(message);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
        this.status = status || 500;
    }
}

class NotFoundError extends AppError{
    constructor(message, status){
        super(message);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
        this.status = status || 404;
    }
}

class ForbiddenError extends AppError{
    constructor(message, status){
        super(message);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
        this.status = status || 403;
    }
}

class UniqueError extends AppError{
    constructor(message, status){
        super(message);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
        this.status = status || 409;
    }
}

class FileError extends AppError{
    constructor(message, status){
        super(message || 'Error while manipulating file');
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
        this.status = status || 500;
    }
}

class RequestValidationError extends AppError{
    constructor(message, status, reason){
        super(message|| 'bad request');
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
        this.status = status || 400;
        this.reason = reason || 'unknown'
    }
}

module.exports = {
  AppError,
  NotFoundError,
  ForbiddenError,
  UniqueError,
  FileError,
  RequestValidationError
};

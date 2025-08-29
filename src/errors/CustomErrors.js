
export class AppError extends Error {
    constructor(message, statusCode){
        super();
        this.message = message;
        this.statusCode = statusCode;
    }
}

export class UnauthorizedError extends AppError{
    constructor(message){
        super(message, 401);
        this.name = 'UnauthorizedError'
    }
}

export class AccessError extends AppError{
    constructor(message){
        super(message, 403);
        this.name = 'AccessError';
    }
}

export class NotFoundError extends AppError{
    constructor(message){
        super(message, 404);
        this.name = 'NotFoundError';
    }
}

export class ResourceAlreadyExistError extends AppError{
    constructor(message){
        super(message, 409);
        this.name = 'ResourceAlreadyExistError';
    }
}
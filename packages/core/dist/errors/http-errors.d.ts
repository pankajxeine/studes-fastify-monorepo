import { AppError } from './app-error';
export declare class BadRequestError extends AppError {
    constructor(message?: string, details?: unknown);
}
export declare class UnauthorizedError extends AppError {
    constructor(message?: string, details?: unknown);
}
export declare class ForbiddenError extends AppError {
    constructor(message?: string, details?: unknown);
}
export declare class NotFoundError extends AppError {
    constructor(message?: string, details?: unknown);
}
export declare class ConflictError extends AppError {
    constructor(message?: string, details?: unknown);
}

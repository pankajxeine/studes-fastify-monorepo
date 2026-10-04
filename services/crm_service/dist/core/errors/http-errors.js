"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConflictError = exports.NotFoundError = exports.ForbiddenError = exports.UnauthorizedError = exports.BadRequestError = void 0;
const app_error_1 = require("./app-error");
class BadRequestError extends app_error_1.AppError {
    constructor(message = 'Bad request', details) {
        super(message, 400, details);
    }
}
exports.BadRequestError = BadRequestError;
class UnauthorizedError extends app_error_1.AppError {
    constructor(message = 'Unauthorized', details) {
        super(message, 401, details);
    }
}
exports.UnauthorizedError = UnauthorizedError;
class ForbiddenError extends app_error_1.AppError {
    constructor(message = 'Forbidden', details) {
        super(message, 403, details);
    }
}
exports.ForbiddenError = ForbiddenError;
class NotFoundError extends app_error_1.AppError {
    constructor(message = 'Not found', details) {
        super(message, 404, details);
    }
}
exports.NotFoundError = NotFoundError;
class ConflictError extends app_error_1.AppError {
    constructor(message = 'Conflict', details) {
        super(message, 409, details);
    }
}
exports.ConflictError = ConflictError;

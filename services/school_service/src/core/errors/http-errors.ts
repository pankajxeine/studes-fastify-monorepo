import { AppError } from './app-error'
import { CustomErrorParams } from "./errorModel";

export class BadRequestError extends AppError {
  constructor(message = 'Bad request', details?: unknown) {
    super(message, 400, details)
  }
}

export class UnauthorizedError extends AppError {
  constructor(message = 'Unauthorized', details?: unknown) {
    super(message, 401, details)
  }
}

export class ForbiddenError extends AppError {
  constructor(message = 'Forbidden', details?: unknown) {
    super(message, 403, details)
  }
}

export class NotFoundError extends AppError {
  constructor(message = 'Not found', details?: unknown) {
    super(message, 404, details)
  }
}

export class ConflictError extends AppError {
  constructor(message = 'Conflict', details?: unknown) {
    super(message, 409, details)
  }
}

export const AuthInvalidEmail: CustomErrorParams = {
  message: "Unauthorized",
  code: "AUTH001",
  statusCode: 401,
};

export const AuthInvalidPassword: CustomErrorParams = {
  message: "Unauthorized",
  code: "AUTH002",
  statusCode: 401,
};
export const AuthMissingHeaders: CustomErrorParams = {
  message: "Unauthorized",
  code: "AUTH003",
  statusCode: 401,
};

export const AuthJWTError: CustomErrorParams = {
  message: "Unauthorized",
  code: "AUTH004",
  statusCode: 401,
};
export const AuthRegisterFailure: CustomErrorParams = {
  message: "Register Failure",
  code: "AUTH005",
  statusCode: 401,
};

export default {
  AuthInvalidEmail,
  AuthInvalidPassword,
  AuthMissingHeaders,
  AuthJWTError,
  AuthRegisterFailure,
};
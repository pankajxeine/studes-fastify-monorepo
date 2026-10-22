"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerErrorHandler = registerErrorHandler;
const zod_1 = require("zod");
function isAppErrorLike(error) {
    if (!error || typeof error !== 'object')
        return false;
    const candidate = error;
    return typeof candidate.statusCode === 'number' && typeof candidate.name === 'string' && typeof candidate.message === 'string';
}
function registerErrorHandler(app, options = {}) {
    app.setErrorHandler((error, request, reply) => {
        if (options.includeZod && error instanceof zod_1.ZodError) {
            const zodError = error;
            request.log.warn({
                method: request.method,
                url: request.url,
                error: 'ValidationError',
                details: zodError.flatten()
            }, 'request validation failed');
            reply.code(400).send({
                error: 'ValidationError',
                message: 'Invalid request',
                details: zodError.flatten()
            });
            return;
        }
        if (isAppErrorLike(error)) {
            request.log.warn({
                method: request.method,
                url: request.url,
                error: error.name,
                statusCode: error.statusCode,
                details: error.details ?? null
            }, 'request failed');
            reply.code(error.statusCode).send({
                error: error.name,
                message: error.message,
                details: error.details ?? null
            });
            return;
        }
        request.log.error({
            method: request.method,
            url: request.url,
            err: error
        }, 'request failed unexpectedly');
        reply.code(500).send({
            error: 'InternalServerError',
            message: 'Unexpected error'
        });
    });
}

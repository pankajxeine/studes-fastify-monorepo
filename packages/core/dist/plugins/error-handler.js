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
    app.setErrorHandler((error, _req, reply) => {
        if (options.includeZod && error instanceof zod_1.ZodError) {
            reply.code(400).send({
                error: 'ValidationError',
                message: 'Invalid request',
                details: error.flatten()
            });
            return;
        }
        if (isAppErrorLike(error)) {
            reply.code(error.statusCode).send({
                error: error.name,
                message: error.message,
                details: error.details ?? null
            });
            return;
        }
        app.log.error(error);
        reply.code(500).send({
            error: 'InternalServerError',
            message: 'Unexpected error'
        });
    });
}

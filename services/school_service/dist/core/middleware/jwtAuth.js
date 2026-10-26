"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtAuthGuard = jwtAuthGuard;
exports.extractToken = extractToken;
exports.getTokenPayload = getTokenPayload;
const __1 = require("..");
async function jwtAuthGuard(request, reply) {
    try {
        const token = extractToken(request);
        if (!token) {
            throw new __1.UnauthorizedError('Authorization token is required');
        }
        // Verify token using Fastify JWT plugin
        await request.jwtVerify();
    }
    catch (error) {
        throw new __1.UnauthorizedError('Invalid or expired token', error.message);
    }
}
function extractToken(request) {
    const authHeader = request.headers.authorization;
    if (!authHeader) {
        return null;
    }
    const parts = authHeader.split(' ');
    if (parts.length !== 2 || parts[0] !== 'Bearer') {
        return null;
    }
    return parts[1];
}
function getTokenPayload(request) {
    return request.user;
}

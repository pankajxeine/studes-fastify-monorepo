"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const bcrypt = __importStar(require("bcryptjs"));
const core_1 = require("../core");
const registerSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(8)
});
const loginSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(8)
});
const authRoutes = async (app) => {
    app.post('/auth/register', async (request, reply) => {
        request.log.info('auth register started');
        const body = registerSchema.parse(request.body);
        request.log.info({ email: body.email }, 'auth register checking existing user');
        const [existing] = await request.db.execute('select id from users where email = ?', [body.email]);
        if (existing.length > 0) {
            request.log.warn({ email: body.email }, 'auth register failed: email already registered');
            throw new core_1.ConflictError('Email already registered');
        }
        request.log.info({ email: body.email }, 'auth register hashing password');
        const hash = await bcrypt.hash(body.password, 12);
        await request.db.execute('insert into users (email, password_hash) values (?, ?)', [body.email, hash]);
        request.log.info({ email: body.email }, 'auth register user inserted');
        const [users] = await request.db.execute('select id, email, created_at from users where email = ? limit 1', [body.email]);
        reply.code(201);
        request.log.info({ userId: users[0]?.id, email: users[0]?.email }, 'auth register completed');
        return users[0];
    });
    app.post('/auth/login', async (request, reply) => {
        request.log.info('auth login started');
        const body = loginSchema.parse(request.body);
        request.log.info({ email: body.email }, 'auth login loading user');
        const [users] = await request.db.execute('select id, email, password_hash from users where email = ? limit 1', [body.email]);
        if (users.length === 0) {
            request.log.warn({ email: body.email }, 'auth login failed: user not found');
            throw new core_1.UnauthorizedError('Invalid credentials');
        }
        const user = users[0];
        request.log.info({ userId: user.id, email: user.email }, 'auth login verifying password');
        const ok = await bcrypt.compare(body.password, user.password_hash ?? '');
        if (!ok) {
            request.log.warn({ userId: user.id, email: user.email }, 'auth login failed: invalid password');
            throw new core_1.UnauthorizedError('Invalid credentials');
        }
        const token = app.jwt.sign({ sub: user.id, email: user.email });
        request.log.info({ userId: user.id, email: user.email }, 'auth login token created');
        reply.setCookie(app.env.SESSION_COOKIE_NAME, token, {
            path: '/',
            httpOnly: true,
            sameSite: 'lax'
        });
        request.log.info({ userId: user.id, email: user.email }, 'auth login completed');
        return { accessToken: token };
    });
    app.post('/auth/logout', async (_request, reply) => {
        _request.log.info('auth logout started');
        reply.clearCookie(app.env.SESSION_COOKIE_NAME, { path: '/' });
        reply.code(204);
        _request.log.info('auth logout completed');
        return null;
    });
};
exports.default = authRoutes;

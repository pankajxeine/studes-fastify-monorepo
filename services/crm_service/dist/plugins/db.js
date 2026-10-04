"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
const pg_1 = require("pg");
exports.default = (0, fastify_plugin_1.default)(async (app) => {
    const connectionString = app.env?.DATABASE_URL ?? process.env.DATABASE_URL;
    if (!connectionString) {
        throw new Error('DATABASE_URL is required');
    }
    const pool = new pg_1.Pool({ connectionString });
    app.decorate('pg', pool);
    app.addHook('onClose', async () => {
        await pool.end();
    });
});

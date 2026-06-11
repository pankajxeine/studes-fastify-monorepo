"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
const mysql2_1 = require("mysql2");
const promise_1 = __importDefault(require("mysql2/promise"));
exports.default = (0, fastify_plugin_1.default)(async (app) => {
    const connectionString = app.env?.DATABASE_URL ?? process.env.DATABASE_URL;
    if (!connectionString) {
        throw new Error('DATABASE_URL is required');
    }
    const url = new URL(connectionString);
    const database = url.pathname.replace(/^\//, '');
    if (!database) {
        throw new Error('DATABASE_URL must include a database name');
    }
    const pool = promise_1.default.createPool({
        host: url.hostname,
        port: url.port ? Number(url.port) : 3306,
        user: decodeURIComponent(url.username),
        password: decodeURIComponent(url.password),
        database,
        waitForConnections: true,
        connectionLimit: 10,
        multipleStatements: true
    });
    app.decorate('mysql', pool);
    app.decorate('mysqlDatabase', database);
    app.decorate('useTenantDatabase', async (connection, database) => {
        await connection.query(`use ${(0, mysql2_1.escapeId)(database)}`);
    });
    app.addHook('onClose', async () => {
        await pool.end();
    });
});

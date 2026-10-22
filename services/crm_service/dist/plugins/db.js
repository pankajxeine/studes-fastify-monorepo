"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
const sequelize_1 = require("sequelize");
const db_config_1 = __importDefault(require("../config/db.config"));
const fs = require("fs");
const path = require("path");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const db = {};
const ds = db_config_1.default[env];
// export type MysqlConnection = PoolConnection
exports.sequelize = new sequelize_1.Sequelize(ds.database, ds.username, ds.password, {
    host: ds.host,
    port: 5432,
    dialect: 'postgres',
    logging: false,
    pool: {
        max: 10, // keep small if using PgBouncer
        min: 0,
        idle: 10000,
    },
});
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
    // const pool = mysql.createPool({
    //   host: url.hostname,
    //   port: url.port ? Number(url.port) : 3306,
    //   user: decodeURIComponent(url.username),
    //   password: decodeURIComponent(url.password),
    //   database,
    //   waitForConnections: true,
    //   connectionLimit: 10,
    //   multipleStatements: true
    // })
    //initGeneratedEntities(sequelize)
    //app.decorate('sequelize', sequelize)
    // app.decorate('mysql', pool)
    //app.decorate('mysqlDatabase', database)
    app.decorate('useTenantDatabase', async (_database) => {
        throw new Error('Database-per-tenant is retired; use tenant_id scoped queries');
    });
    app.decorate('useCpanelDatabase', async (_database) => {
        throw new Error('Database-per-tenant is retired; use tenant_id scoped queries');
    });
    app.addHook('onClose', async () => {
        await exports.sequelize.close();
    });
});

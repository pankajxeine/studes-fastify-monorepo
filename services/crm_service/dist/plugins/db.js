"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
const sequelize_1 = require("sequelize");
const db_config_1 = __importDefault(require("../core/config/db.config"));
const environment = process.env.NODE_ENV || 'development';
const databaseConfig = db_config_1.default[environment];
exports.sequelize = new sequelize_1.Sequelize(databaseConfig.database, databaseConfig.username, databaseConfig.password, {
    host: databaseConfig.host,
    port: 5432,
    dialect: 'postgres',
    logging: false,
    pool: {
        max: 10,
        min: 0,
        idle: 10_000,
    },
    hooks: {
        afterConnect: async (connection) => {
            const schema = process.env.DEFAULT_CPANEL_SCHEMA ?? 'demo_cpanel';
            if (!/^[a-zA-Z0-9_]+$/.test(schema)) {
                throw new Error('Invalid DEFAULT_CPANEL_SCHEMA');
            }
            await connection.query(`SET search_path TO "${schema}", public`);
        },
    },
});
exports.default = (0, fastify_plugin_1.default)(async (app) => {
    const connectionString = app.env.DATABASE_URL;
    if (!connectionString) {
        throw new Error('DATABASE_URL is required');
    }
    const database = new URL(connectionString).pathname.replace(/^\//, '');
    if (!database) {
        throw new Error('DATABASE_URL must include a database name');
    }
    app.decorate('db', exports.sequelize);
    app.addHook('onClose', async () => {
        await exports.sequelize.close();
    });
});

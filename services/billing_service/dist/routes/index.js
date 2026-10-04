"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = registerRoutes;
const sample_fastify_sequelize_router_1 = __importDefault(require("./sample_fastify_sequelize.router"));
async function registerRoutes(app) {
    await app.register(sample_fastify_sequelize_router_1.default);
}

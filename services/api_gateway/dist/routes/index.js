"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = registerRoutes;
const api_gateway_router_1 = __importDefault(require("./api_gateway.router"));
async function registerRoutes(app) {
    await app.register(api_gateway_router_1.default);
}

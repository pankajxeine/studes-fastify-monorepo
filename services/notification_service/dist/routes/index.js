"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = registerRoutes;
const notification_router_1 = __importDefault(require("./notification.router"));
async function registerRoutes(app) {
    await app.register(notification_router_1.default);
}

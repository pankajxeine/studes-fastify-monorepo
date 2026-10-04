"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = registerRoutes;
const academics_router_1 = __importDefault(require("./academics.router"));
const assignments_router_1 = __importDefault(require("./assignments.router"));
const attendance_router_1 = __importDefault(require("./attendance.router"));
const core_router_1 = __importDefault(require("./core.router"));
const exams_router_1 = __importDefault(require("./exams.router"));
const fees_router_1 = __importDefault(require("./fees.router"));
const hostel_router_1 = __importDefault(require("./hostel.router"));
const leave_router_1 = __importDefault(require("./leave.router"));
const library_router_1 = __importDefault(require("./library.router"));
const notifications_router_1 = __importDefault(require("./notifications.router"));
const timetable_router_1 = __importDefault(require("./timetable.router"));
const transport_router_1 = __importDefault(require("./transport.router"));
async function registerRoutes(app) {
    await app.register(academics_router_1.default);
    await app.register(assignments_router_1.default);
    await app.register(attendance_router_1.default);
    await app.register(core_router_1.default);
    await app.register(exams_router_1.default);
    await app.register(fees_router_1.default);
    await app.register(hostel_router_1.default);
    await app.register(leave_router_1.default);
    await app.register(library_router_1.default);
    await app.register(notifications_router_1.default);
    await app.register(timetable_router_1.default);
    await app.register(transport_router_1.default);
}

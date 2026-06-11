"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.protectedRoutes = exports.verifyToken = void 0;
const auth_1 = require("./auth");
Object.defineProperty(exports, "verifyToken", { enumerable: true, get: function () { return auth_1.verifyToken; } });
const protectedRoute_1 = require("./protectedRoute");
Object.defineProperty(exports, "protectedRoutes", { enumerable: true, get: function () { return protectedRoute_1.protectedRoutes; } });

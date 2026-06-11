"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.protectedRoutes = void 0;
const auth_1 = require("./auth");
const protectedRoutes = async (app, routesToProtect) => {
    app.addHook("onRequest", async (request, reply) => {
        try {
            // Get the URL path without query string
            const urlPath = request.url.split('?')[0];
            // Check if the exact path matches
            if (routesToProtect[urlPath]) {
                await (0, auth_1.verifyToken)(request);
                return;
            }
            // Check if any route pattern matches (for routes with parameters like :id)
            for (const routePattern in routesToProtect) {
                if (routesToProtect[routePattern]) {
                    // Convert route pattern to regex (e.g., "/api/articles/update/:id" -> "/api/articles/update/[^/]+")
                    const patternRegex = new RegExp('^' + routePattern.replace(/:[^/]+/g, '[^/]+') + '$');
                    if (patternRegex.test(urlPath)) {
                        await (0, auth_1.verifyToken)(request);
                        return;
                    }
                }
            }
        }
        catch (error) {
            reply.send(error);
        }
    });
};
exports.protectedRoutes = protectedRoutes;
exports.default = { protectedRoutes: exports.protectedRoutes };

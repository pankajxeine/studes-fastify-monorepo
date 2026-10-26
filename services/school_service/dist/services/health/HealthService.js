"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthService = void 0;
class HealthService {
    async authHealth(app, request) {
        try {
            // TODO: implement logic using app + request
            void request;
            throw new Error('Not implemented');
        }
        catch (err) {
            app.log.error(err);
            throw err;
        }
    }
    async authHealthDb(app, request) {
        try {
            // TODO: implement logic using app + request
            void request;
            throw new Error('Not implemented');
        }
        catch (err) {
            app.log.error(err);
            throw err;
        }
    }
}
exports.HealthService = HealthService;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationsService = void 0;
class NotificationsService {
    async listNotifications(app, request) {
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
    async createNotification(app, input, request) {
        try {
            // TODO: implement logic using app + input
            void input;
            void request;
            throw new Error('Not implemented');
        }
        catch (err) {
            app.log.error(err);
            throw err;
        }
    }
}
exports.NotificationsService = NotificationsService;

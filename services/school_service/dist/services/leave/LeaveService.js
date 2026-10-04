"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeaveService = void 0;
class LeaveService {
    async listLeaveRequests(app, request) {
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
    async createLeaveRequest(app, input, request) {
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
exports.LeaveService = LeaveService;

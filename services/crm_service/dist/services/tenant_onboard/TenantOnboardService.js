"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantOnboardService = void 0;
class TenantOnboardService {
    async onboardTenant(app, input, request) {
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
exports.TenantOnboardService = TenantOnboardService;

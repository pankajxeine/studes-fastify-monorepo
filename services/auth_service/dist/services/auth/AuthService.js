"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
class AuthService {
    async authLogin(app, input, request) {
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
    async authRefresh(app, input, request) {
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
    async authLogout(app, request) {
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
    async authRegister(app, input, request) {
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
exports.AuthService = AuthService;

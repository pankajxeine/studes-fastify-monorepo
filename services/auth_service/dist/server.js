"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./telemetry");
const app_1 = require("./app");
async function main() {
    const app = await (0, app_1.buildApp)();
    const port = Number(app.env.PORT);
    const host = '0.0.0.0';
    try {
        await app.listen({ port, host });
        app.log.info({ port }, 'server started');
    }
    catch (err) {
        app.log.error(err, 'server failed to start');
        process.exit(1);
    }
}
void main();

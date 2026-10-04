"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = registerRoutes;
const billing_router_1 = __importDefault(require("./billing.router"));
const branches_router_1 = __importDefault(require("./branches.router"));
const company_router_1 = __importDefault(require("./company.router"));
const cpanel_users_router_1 = __importDefault(require("./cpanel_users.router"));
const crm_roles_router_1 = __importDefault(require("./crm_roles.router"));
const crm_users_router_1 = __importDefault(require("./crm_users.router"));
const customers_router_1 = __importDefault(require("./customers.router"));
const email_settings_router_1 = __importDefault(require("./email_settings.router"));
const email_templates_router_1 = __importDefault(require("./email_templates.router"));
const packages_router_1 = __importDefault(require("./packages.router"));
const reports_router_1 = __importDefault(require("./reports.router"));
const sales_agents_router_1 = __importDefault(require("./sales_agents.router"));
const settings_router_1 = __importDefault(require("./settings.router"));
const tenant_onboard_router_1 = __importDefault(require("./tenant_onboard.router"));
async function registerRoutes(app) {
    await app.register(billing_router_1.default);
    await app.register(branches_router_1.default);
    await app.register(company_router_1.default);
    await app.register(cpanel_users_router_1.default);
    await app.register(crm_roles_router_1.default);
    await app.register(crm_users_router_1.default);
    await app.register(customers_router_1.default);
    await app.register(email_settings_router_1.default);
    await app.register(email_templates_router_1.default);
    await app.register(packages_router_1.default);
    await app.register(reports_router_1.default);
    await app.register(sales_agents_router_1.default);
    await app.register(settings_router_1.default);
    await app.register(tenant_onboard_router_1.default);
}

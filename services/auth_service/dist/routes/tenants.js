"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_crypto_1 = require("node:crypto");
const node_fs_1 = require("node:fs");
const node_path_1 = require("node:path");
const zod_1 = require("zod");
const mysql2_1 = require("mysql2");
const tenantBodySchema = zod_1.z.object({
    name: zod_1.z.string().min(2),
    slug: zod_1.z.string().min(2).regex(/^[a-z0-9-]+$/),
    primaryDomain: zod_1.z.string().optional(),
    tenantType: zod_1.z.enum(['school', 'crm']).optional().default('school')
});
function readServiceSql(name) {
    return (0, node_fs_1.readFileSync)((0, node_path_1.resolve)(__dirname, '../../sql', name), 'utf8');
}
const tenantRoutes = async (app) => {
    app.post('/tenants', { config: { requireTenant: false } }, async (request, reply) => {
        const body = tenantBodySchema.parse(request.body);
        const schemaPrefix = body.tenantType === 'crm' ? 'crm' : 'tenant';
        const schemaName = `${schemaPrefix}_${body.slug.replace(/-/g, '_')}`;
        const tenantId = (0, node_crypto_1.randomUUID)();
        const client = await app.mysql.getConnection();
        try {
            await app.useTenantDatabase(client, app.mysqlDatabase);
            await client.beginTransaction();
            await client.execute('insert into tenants (id, name, slug, schema_name, tenant_type) values (?, ?, ?, ?, ?)', [tenantId, body.name, body.slug, schemaName, body.tenantType]);
            if (body.primaryDomain) {
                await client.execute('insert into tenant_domains (id, tenant_id, domain, is_primary) values (?, ?, ?, true)', [(0, node_crypto_1.randomUUID)(), tenantId, body.primaryDomain]);
            }
            await client.commit();
            await client.query(`create database if not exists ${(0, mysql2_1.escapeId)(schemaName)}`);
            await app.useTenantDatabase(client, schemaName);
            await client.query(readServiceSql('tenant.sql'));
            await app.useTenantDatabase(client, app.mysqlDatabase);
            const [tenants] = await client.execute('select id, slug, schema_name from tenants where id = ? limit 1', [tenantId]);
            reply.code(201);
            return tenants[0];
        }
        catch (err) {
            await client.rollback();
            throw err;
        }
        finally {
            client.release();
        }
    });
};
exports.default = tenantRoutes;

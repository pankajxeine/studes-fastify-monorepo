"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const node_fs_1 = require("node:fs");
const node_path_1 = require("node:path");
const tenantBodySchema = zod_1.z.object({
    name: zod_1.z.string().min(2),
    slug: zod_1.z.string().min(2).regex(/^[a-z0-9-]+$/),
    primaryDomain: zod_1.z.string().optional(),
    tenantType: zod_1.z.enum(['school', 'crm']).optional().default('school')
});
function readInfraSql(name) {
    return (0, node_fs_1.readFileSync)((0, node_path_1.resolve)(__dirname, '../../../../infra/sql', name), 'utf8');
}
function readAuthSql(name) {
    return (0, node_fs_1.readFileSync)((0, node_path_1.resolve)(__dirname, '../../../auth_service/sql', name), 'utf8');
}
const tenantRoutes = async (app) => {
    app.post('/tenants/onboard', { config: { requireTenant: false } }, async (request, reply) => {
        const body = tenantBodySchema.parse(request.body);
        const schemaPrefix = body.tenantType === 'crm' ? 'crm' : 'tenant';
        const schemaName = `${schemaPrefix}_${body.slug.replace(/-/g, '_')}`;
        const client = await app.pg.connect();
        try {
            await client.query('begin');
            const tenantRes = await client.query(`insert into public.tenants (name, slug, schema_name, tenant_type) values ($1, $2, $3, $4) returning id, slug, schema_name`, [body.name, body.slug, schemaName, body.tenantType]);
            if (body.primaryDomain) {
                await client.query(`insert into public.tenant_domains (tenant_id, domain, is_primary) values ($1, $2, true)`, [tenantRes.rows[0].id, body.primaryDomain]);
            }
            await client.query(`create schema if not exists ${schemaName}`);
            await client.query(`set search_path to ${schemaName}, public`);
            const templateSql = body.tenantType === 'crm'
                ? readInfraSql('crm_tenant_template.sql')
                : readInfraSql('tenant_template.sql');
            await client.query(templateSql);
            const authSql = readAuthSql('tenant.sql');
            await client.query(authSql);
            await client.query('commit');
            reply.code(201);
            return {
                tenant_id: tenantRes.rows[0].id,
                schema_name: tenantRes.rows[0].schema_name,
                status: 'created'
            };
        }
        catch (err) {
            await client.query('rollback');
            throw err;
        }
        finally {
            client.release();
        }
    });
};
exports.default = tenantRoutes;

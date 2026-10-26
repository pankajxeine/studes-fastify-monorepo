"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssuedCertificateService = void 0;
const db_utils_1 = require("../../../core/helper/db_utils");
const api_helper_1 = require("../../../core/helper/api_helper");
const api_helper_2 = require("../../../core/helper/api_helper");
function httpError(statusCode, message) {
    return Object.assign(new Error(message), { statusCode });
}
class IssuedCertificateService {
    async listIssuedCertificate(app, request) {
        try {
            // tenant schema comes from request context
            const schema = request?.dbSchema;
            (0, db_utils_1.verifyDbSchema)(schema);
            // bind model to tenant schema
            const models = app.models;
            (0, db_utils_1.verifyDbModel)(models);
            const model = models.docs_issued_certificate.schema(schema);
            const query = (request?.query ?? {});
            const parsePositiveInteger = (value, fallback) => {
                const parsed = Number(value);
                return Number.isInteger(parsed) && parsed > 0 ? parsed : fallback;
            };
            const page = parsePositiveInteger(query.page, 1);
            const limit = Math.min(parsePositiveInteger(query.limit, 20), 100);
            const { count, rows } = await model.findAndCountAll({
                limit,
                offset: (page - 1) * limit,
            });
            return {
                data: rows.map((row) => (0, api_helper_1.toApiAttributes)(row.get({ plain: true }))),
                pagination: {
                    page,
                    limit,
                    total: count,
                    totalPages: Math.ceil(count / limit),
                },
            };
        }
        catch (err) {
            app.log.error(err);
            throw err;
        }
    }
    async createIssuedCertificate(app, input, request) {
        try {
            // tenant schema comes from request context
            const schema = request?.dbSchema;
            (0, db_utils_1.verifyDbSchema)(schema);
            // bind model to tenant schema
            const models = app.models;
            (0, db_utils_1.verifyDbModel)(models);
            const model = models.docs_issued_certificate.schema(schema);
            const row = await model.create((0, api_helper_2.toModelAttributes)(input));
            return (0, api_helper_1.toApiAttributes)(row.get({ plain: true }));
        }
        catch (err) {
            app.log.error(err);
            throw err;
        }
    }
    async getIssuedCertificateById(app, request) {
        try {
            // tenant schema comes from request context
            const schema = request?.dbSchema;
            (0, db_utils_1.verifyDbSchema)(schema);
            // bind model to tenant schema
            const models = app.models;
            (0, db_utils_1.verifyDbModel)(models);
            const model = models.docs_issued_certificate.schema(schema);
            const { id } = (request?.params ?? {});
            if (id === undefined || id === '')
                throw httpError(400, 'id is required');
            const row = await model.findByPk(id);
            if (!row) {
                throw httpError(404, 'docs_issued_certificate not found');
            }
            return (0, api_helper_1.toApiAttributes)(row.get({ plain: true }));
        }
        catch (err) {
            app.log.error(err);
            throw err;
        }
    }
    async updateIssuedCertificate(app, input, request) {
        try {
            // tenant schema comes from request context
            const schema = request?.dbSchema;
            (0, db_utils_1.verifyDbSchema)(schema);
            // bind model to tenant schema
            const models = app.models;
            (0, db_utils_1.verifyDbModel)(models);
            const model = models.docs_issued_certificate.schema(schema);
            const { id } = (request?.params ?? {});
            if (id === undefined || id === '')
                throw httpError(400, 'id is required');
            const row = await model.findByPk(id);
            if (!row) {
                throw httpError(404, 'docs_issued_certificate not found');
            }
            await row.update((0, api_helper_2.toModelAttributes)(input));
            return (0, api_helper_1.toApiAttributes)(row.get({ plain: true }));
        }
        catch (err) {
            app.log.error(err);
            throw err;
        }
    }
    async deleteIssuedCertificate(app, request) {
        try {
            // tenant schema comes from request context
            const schema = request?.dbSchema;
            (0, db_utils_1.verifyDbSchema)(schema);
            // bind model to tenant schema
            const models = app.models;
            (0, db_utils_1.verifyDbModel)(models);
            const model = models.docs_issued_certificate.schema(schema);
            const { id } = (request?.params ?? {});
            if (id === undefined || id === '')
                throw httpError(400, 'id is required');
            const deletedCount = await model.destroy({ where: { id } });
            if (deletedCount === 0)
                throw httpError(404, 'docs_issued_certificate not found');
            return;
        }
        catch (err) {
            app.log.error(err);
            throw err;
        }
    }
}
exports.IssuedCertificateService = IssuedCertificateService;

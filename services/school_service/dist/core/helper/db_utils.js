"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyDbSchema = verifyDbSchema;
exports.verifyDbModel = verifyDbModel;
function verifyDbSchema(schema) {
    if (!schema)
        throw new Error('schema missing from request context');
}
function verifyDbModel(model) {
    if (!model)
        throw new Error('db model missing from app context');
}

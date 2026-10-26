"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocsDocumentTypeEntity = void 0;
exports.initDocsDocumentTypeEntity = initDocsDocumentTypeEntity;
const sequelize_1 = require("sequelize");
class DocsDocumentTypeEntity extends sequelize_1.Model {
}
exports.DocsDocumentTypeEntity = DocsDocumentTypeEntity;
function initDocsDocumentTypeEntity(sequelize) {
    DocsDocumentTypeEntity.init({
        id: {
            type: sequelize_1.DataTypes.BIGINT,
            field: 'id',
            allowNull: true,
            primaryKey: true,
            autoIncrement: true,
        },
        publicId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'public_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        recordCode: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'record_code',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('docs_document_type')"),
        },
        documentTypeCode: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'document_type_code',
            allowNull: true,
            unique: true,
        },
        name: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'name',
            allowNull: false,
        },
        description: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'description',
            allowNull: true,
        },
        appliesTo: {
            type: sequelize_1.DataTypes.STRING(10),
            field: 'applies_to',
            allowNull: false,
            defaultValue: "any",
        },
        isIdentity: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_identity',
            allowNull: false,
            defaultValue: false,
        },
        requiresVerification: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'requires_verification',
            allowNull: false,
            defaultValue: true,
        },
        hasExpiry: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'has_expiry',
            allowNull: false,
            defaultValue: false,
        },
        maxSizeMb: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'max_size_mb',
            allowNull: false,
            defaultValue: 10,
        },
        allowedMimeTypes: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'allowed_mime_types',
            allowNull: false,
            defaultValue: sequelize_1.Sequelize.literal("ARRAY[\r\n        'application/pdf'"),
        },
        sortOrder: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'sort_order',
            allowNull: false,
            defaultValue: 0,
        },
        isActive: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_active',
            allowNull: false,
            defaultValue: true,
        },
        createdAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'created_at',
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        createdBy: {
            type: sequelize_1.DataTypes.UUID,
            field: 'created_by',
            allowNull: true,
        },
        updatedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'updated_at',
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        updatedBy: {
            type: sequelize_1.DataTypes.UUID,
            field: 'updated_by',
            allowNull: true,
        }
    }, {
        sequelize,
        tableName: 'docs_document_type',
        timestamps: true,
        underscored: true,
        freezeTableName: true
    });
    return DocsDocumentTypeEntity;
}

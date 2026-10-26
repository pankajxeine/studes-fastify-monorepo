"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocsFileEntity = void 0;
exports.initDocsFileEntity = initDocsFileEntity;
const sequelize_1 = require("sequelize");
class DocsFileEntity extends sequelize_1.Model {
}
exports.DocsFileEntity = DocsFileEntity;
function initDocsFileEntity(sequelize) {
    DocsFileEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('docs_file')"),
        },
        fileId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'file_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        fileName: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'file_name',
            allowNull: false,
        },
        mimeType: {
            type: sequelize_1.DataTypes.STRING(100),
            field: 'mime_type',
            allowNull: false,
        },
        sizeBytes: {
            type: sequelize_1.DataTypes.BIGINT,
            field: 'size_bytes',
            allowNull: false,
        },
        storageProvider: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'storage_provider',
            allowNull: false,
            defaultValue: "s3",
        },
        storageKey: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'storage_key',
            allowNull: false,
        },
        checksumSha256: {
            type: sequelize_1.DataTypes.CHAR(64),
            field: 'checksum_sha256',
            allowNull: true,
        },
        ownerModule: {
            type: sequelize_1.DataTypes.STRING(30),
            field: 'owner_module',
            allowNull: false,
        },
        visibility: {
            type: sequelize_1.DataTypes.STRING(10),
            field: 'visibility',
            allowNull: false,
            defaultValue: "private",
        },
        scanStatus: {
            type: sequelize_1.DataTypes.STRING(10),
            field: 'scan_status',
            allowNull: false,
            defaultValue: "pending",
        },
        description: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'description',
            allowNull: true,
        },
        uploadedByUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'uploaded_by_user_id',
            allowNull: true,
            references: { model: 'iam_app_user', key: 'app_user_id' },
        },
        uploadedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'uploaded_at',
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        retentionUntil: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'retention_until',
            allowNull: true,
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
        tableName: 'docs_file',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['storage_provider', 'storage_key'] }
        ]
    });
    return DocsFileEntity;
}

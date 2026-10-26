"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdmisApplicationDocumentEntity = void 0;
exports.initAdmisApplicationDocumentEntity = initAdmisApplicationDocumentEntity;
const sequelize_1 = require("sequelize");
class AdmisApplicationDocumentEntity extends sequelize_1.Model {
}
exports.AdmisApplicationDocumentEntity = AdmisApplicationDocumentEntity;
function initAdmisApplicationDocumentEntity(sequelize) {
    AdmisApplicationDocumentEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('admis_application_document')"),
        },
        applicationDocumentId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'application_document_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        applicationId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'application_id',
            allowNull: false,
            references: { model: 'admis_application', key: 'application_id' },
            onDelete: 'CASCADE',
        },
        documentTypeCode: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'document_type_code',
            allowNull: false,
            references: { model: 'docs_document_type', key: 'document_type_code' },
            onUpdate: 'CASCADE',
        },
        fileId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'file_id',
            allowNull: true,
            references: { model: 'docs_file', key: 'file_id' },
        },
        isRequired: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_required',
            allowNull: false,
            defaultValue: true,
        },
        status: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'status',
            allowNull: false,
            defaultValue: "pending",
        },
        receivedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'received_at',
            allowNull: true,
        },
        verifiedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'verified_at',
            allowNull: true,
        },
        verifiedByUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'verified_by_user_id',
            allowNull: true,
            references: { model: 'iam_app_user', key: 'app_user_id' },
        },
        rejectionReason: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'rejection_reason',
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
        tableName: 'admis_application_document',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['application_id', 'document_type_code'] }
        ]
    });
    return AdmisApplicationDocumentEntity;
}

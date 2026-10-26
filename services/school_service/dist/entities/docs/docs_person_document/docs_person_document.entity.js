"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocsPersonDocumentEntity = void 0;
exports.initDocsPersonDocumentEntity = initDocsPersonDocumentEntity;
const sequelize_1 = require("sequelize");
class DocsPersonDocumentEntity extends sequelize_1.Model {
}
exports.DocsPersonDocumentEntity = DocsPersonDocumentEntity;
function initDocsPersonDocumentEntity(sequelize) {
    DocsPersonDocumentEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('docs_person_document')"),
        },
        personDocumentId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'person_document_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        personId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'person_id',
            allowNull: false,
            references: { model: 'ppl_person', key: 'person_id' },
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
            allowNull: false,
            references: { model: 'docs_file', key: 'file_id' },
        },
        documentNo: {
            type: sequelize_1.DataTypes.STRING(60),
            field: 'document_no',
            allowNull: true,
        },
        issuingAuthority: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'issuing_authority',
            allowNull: true,
        },
        issuedOn: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'issued_on',
            allowNull: true,
        },
        expiresOn: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'expires_on',
            allowNull: true,
        },
        verificationStatus: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'verification_status',
            allowNull: false,
            defaultValue: "pending",
        },
        submittedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'submitted_at',
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        verifiedByUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'verified_by_user_id',
            allowNull: true,
            references: { model: 'iam_app_user', key: 'app_user_id' },
        },
        verifiedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'verified_at',
            allowNull: true,
        },
        rejectionReason: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'rejection_reason',
            allowNull: true,
        },
        notes: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'notes',
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
        tableName: 'docs_person_document',
        timestamps: true,
        underscored: true,
        freezeTableName: true
    });
    return DocsPersonDocumentEntity;
}

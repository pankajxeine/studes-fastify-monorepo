"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocsIssuedCertificateEntity = void 0;
exports.initDocsIssuedCertificateEntity = initDocsIssuedCertificateEntity;
const sequelize_1 = require("sequelize");
class DocsIssuedCertificateEntity extends sequelize_1.Model {
}
exports.DocsIssuedCertificateEntity = DocsIssuedCertificateEntity;
function initDocsIssuedCertificateEntity(sequelize) {
    DocsIssuedCertificateEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('docs_issued_certificate')"),
        },
        issuedCertificateId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'issued_certificate_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        certificateTemplateId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'certificate_template_id',
            allowNull: false,
            references: { model: 'docs_certificate_template', key: 'certificate_template_id' },
        },
        personId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'person_id',
            allowNull: false,
            references: { model: 'ppl_person', key: 'person_id' },
        },
        status: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'status',
            allowNull: false,
            defaultValue: "requested",
        },
        purpose: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'purpose',
            allowNull: false,
        },
        requestedByUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'requested_by_user_id',
            allowNull: true,
            references: { model: 'iam_app_user', key: 'app_user_id' },
        },
        requestedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'requested_at',
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        approvedByUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'approved_by_user_id',
            allowNull: true,
            references: { model: 'iam_app_user', key: 'app_user_id' },
        },
        approvedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'approved_at',
            allowNull: true,
        },
        certificateNo: {
            type: sequelize_1.DataTypes.STRING(30),
            field: 'certificate_no',
            allowNull: true,
        },
        verificationCode: {
            type: sequelize_1.DataTypes.STRING(16),
            field: 'verification_code',
            allowNull: true,
        },
        issuedByUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'issued_by_user_id',
            allowNull: true,
            references: { model: 'iam_app_user', key: 'app_user_id' },
        },
        issuedOn: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'issued_on',
            allowNull: true,
        },
        validUntil: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'valid_until',
            allowNull: true,
        },
        fileId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'file_id',
            allowNull: true,
            references: { model: 'docs_file', key: 'file_id' },
        },
        mergeData: {
            type: sequelize_1.DataTypes.JSONB,
            field: 'merge_data',
            allowNull: false,
            defaultValue: "{}",
        },
        rejectionReason: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'rejection_reason',
            allowNull: true,
        },
        revokedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'revoked_at',
            allowNull: true,
        },
        revocationReason: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'revocation_reason',
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
        tableName: 'docs_issued_certificate',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['certificate_no'] },
            { unique: true, fields: ['verification_code'] }
        ]
    });
    return DocsIssuedCertificateEntity;
}

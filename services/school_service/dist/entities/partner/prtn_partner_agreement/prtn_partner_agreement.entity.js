"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrtnPartnerAgreementEntity = void 0;
exports.initPrtnPartnerAgreementEntity = initPrtnPartnerAgreementEntity;
const sequelize_1 = require("sequelize");
class PrtnPartnerAgreementEntity extends sequelize_1.Model {
}
exports.PrtnPartnerAgreementEntity = PrtnPartnerAgreementEntity;
function initPrtnPartnerAgreementEntity(sequelize) {
    PrtnPartnerAgreementEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('prtn_partner_agreement')"),
        },
        partnerAgreementId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'partner_agreement_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        partnerOrganizationId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'partner_organization_id',
            allowNull: false,
            references: { model: 'prtn_partner_organization', key: 'partner_organization_id' },
        },
        campusId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'campus_id',
            allowNull: true,
            references: { model: 'org_campus', key: 'campus_id' },
        },
        agreementType: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'agreement_type',
            allowNull: false,
        },
        referenceNo: {
            type: sequelize_1.DataTypes.STRING(40),
            field: 'reference_no',
            allowNull: false,
        },
        title: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'title',
            allowNull: false,
        },
        status: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'status',
            allowNull: false,
            defaultValue: "draft",
        },
        validFrom: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'valid_from',
            allowNull: false,
        },
        validTo: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'valid_to',
            allowNull: true,
        },
        validity: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'validity',
            allowNull: true,
            autoIncrement: true,
        },
        isAutoRenew: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_auto_renew',
            allowNull: false,
            defaultValue: false,
        },
        renewalNoticeDays: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'renewal_notice_days',
            allowNull: true,
        },
        signedOn: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'signed_on',
            allowNull: true,
        },
        signedByUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'signed_by_user_id',
            allowNull: true,
            references: { model: 'iam_app_user', key: 'app_user_id' },
        },
        partnerSignatoryName: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'partner_signatory_name',
            allowNull: true,
        },
        agreementFileId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'agreement_file_id',
            allowNull: true,
            references: { model: 'docs_file', key: 'file_id' },
        },
        termsSummary: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'terms_summary',
            allowNull: true,
        },
        terminatedOn: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'terminated_on',
            allowNull: true,
        },
        terminationReason: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'termination_reason',
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
        tableName: 'prtn_partner_agreement',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['reference_no'] },
            { unique: true, fields: ['partner_agreement_id', 'partner_organization_id'] }
        ]
    });
    return PrtnPartnerAgreementEntity;
}

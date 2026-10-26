"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocsCertificateTemplateEntity = void 0;
exports.initDocsCertificateTemplateEntity = initDocsCertificateTemplateEntity;
const sequelize_1 = require("sequelize");
class DocsCertificateTemplateEntity extends sequelize_1.Model {
}
exports.DocsCertificateTemplateEntity = DocsCertificateTemplateEntity;
function initDocsCertificateTemplateEntity(sequelize) {
    DocsCertificateTemplateEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('docs_certificate_template')"),
        },
        certificateTemplateId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'certificate_template_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        campusId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'campus_id',
            allowNull: true,
            references: { model: 'org_campus', key: 'campus_id' },
        },
        code: {
            type: sequelize_1.DataTypes.STRING(30),
            field: 'code',
            allowNull: false,
        },
        name: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'name',
            allowNull: false,
        },
        certificateType: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'certificate_type',
            allowNull: false,
        },
        bodyTemplate: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'body_template',
            allowNull: false,
        },
        templateFileId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'template_file_id',
            allowNull: true,
            references: { model: 'docs_file', key: 'file_id' },
        },
        numberPrefix: {
            type: sequelize_1.DataTypes.STRING(10),
            field: 'number_prefix',
            allowNull: false,
        },
        validityDays: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'validity_days',
            allowNull: true,
        },
        requiresApproval: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'requires_approval',
            allowNull: false,
            defaultValue: true,
        },
        signatoryTitle: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'signatory_title',
            allowNull: false,
            defaultValue: "Principal",
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
        tableName: 'docs_certificate_template',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['campus_id', 'code'] }
        ]
    });
    return DocsCertificateTemplateEntity;
}

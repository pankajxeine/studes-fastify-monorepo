"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrtnPartnerContactEntity = void 0;
exports.initPrtnPartnerContactEntity = initPrtnPartnerContactEntity;
const sequelize_1 = require("sequelize");
class PrtnPartnerContactEntity extends sequelize_1.Model {
}
exports.PrtnPartnerContactEntity = PrtnPartnerContactEntity;
function initPrtnPartnerContactEntity(sequelize) {
    PrtnPartnerContactEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('prtn_partner_contact')"),
        },
        partnerContactId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'partner_contact_id',
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
        personId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'person_id',
            allowNull: false,
            references: { model: 'ppl_person', key: 'person_id' },
        },
        jobTitle: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'job_title',
            allowNull: true,
        },
        department: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'department',
            allowNull: true,
        },
        isPrimary: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_primary',
            allowNull: false,
            defaultValue: false,
        },
        canPostDrives: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'can_post_drives',
            allowNull: false,
            defaultValue: false,
        },
        startOn: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'start_on',
            allowNull: false,
            defaultValue: sequelize_1.Sequelize.literal("CURRENT_DATE"),
        },
        endOn: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'end_on',
            allowNull: true,
        },
        isActive: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_active',
            allowNull: false,
            defaultValue: true,
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
        tableName: 'prtn_partner_contact',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['partner_organization_id', 'person_id'] },
            { unique: true, fields: ['partner_contact_id', 'partner_organization_id'] }
        ]
    });
    return PrtnPartnerContactEntity;
}

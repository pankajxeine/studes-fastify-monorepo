"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrtnPartnerOrganizationEntity = void 0;
exports.initPrtnPartnerOrganizationEntity = initPrtnPartnerOrganizationEntity;
const sequelize_1 = require("sequelize");
class PrtnPartnerOrganizationEntity extends sequelize_1.Model {
}
exports.PrtnPartnerOrganizationEntity = PrtnPartnerOrganizationEntity;
function initPrtnPartnerOrganizationEntity(sequelize) {
    PrtnPartnerOrganizationEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('prtn_partner_organization')"),
        },
        partnerOrganizationId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'partner_organization_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        partnerTypeCode: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'partner_type_code',
            allowNull: false,
            references: { model: 'prtn_partner_type', key: 'partner_type_code' },
            onUpdate: 'CASCADE',
        },
        code: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'code',
            allowNull: false,
        },
        name: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'name',
            allowNull: false,
        },
        legalName: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'legal_name',
            allowNull: true,
        },
        industry: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'industry',
            allowNull: true,
        },
        websiteUrl: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'website_url',
            allowNull: true,
        },
        email: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'email',
            allowNull: true,
        },
        phone: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'phone',
            allowNull: true,
        },
        addressLine1: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'address_line1',
            allowNull: true,
        },
        addressLine2: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'address_line2',
            allowNull: true,
        },
        city: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'city',
            allowNull: true,
        },
        stateRegion: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'state_region',
            allowNull: true,
        },
        postalCode: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'postal_code',
            allowNull: true,
        },
        countryCode: {
            type: sequelize_1.DataTypes.CHAR(2),
            field: 'country_code',
            allowNull: true,
        },
        taxRegistrationNo: {
            type: sequelize_1.DataTypes.STRING(40),
            field: 'tax_registration_no',
            allowNull: true,
        },
        relationshipManagerStaffId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'relationship_manager_staff_id',
            allowNull: true,
            references: { model: 'hr_staff', key: 'staff_id' },
        },
        logoFileId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'logo_file_id',
            allowNull: true,
            references: { model: 'docs_file', key: 'file_id' },
        },
        partnerSinceOn: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'partner_since_on',
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
        },
        deletedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'deleted_at',
            allowNull: true,
        }
    }, {
        sequelize,
        tableName: 'prtn_partner_organization',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: true,
        deletedAt: 'deletedAt',
        indexes: [
            { unique: true, fields: ['code'] }
        ]
    });
    return PrtnPartnerOrganizationEntity;
}

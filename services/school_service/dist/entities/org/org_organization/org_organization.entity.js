"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrgOrganizationEntity = void 0;
exports.initOrgOrganizationEntity = initOrgOrganizationEntity;
const sequelize_1 = require("sequelize");
class OrgOrganizationEntity extends sequelize_1.Model {
}
exports.OrgOrganizationEntity = OrgOrganizationEntity;
function initOrgOrganizationEntity(sequelize) {
    OrgOrganizationEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('org_organization')"),
        },
        organizationId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'organization_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        isSingleton: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_singleton',
            allowNull: false,
            defaultValue: true,
        },
        name: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'name',
            allowNull: false,
        },
        shortName: {
            type: sequelize_1.DataTypes.STRING(30),
            field: 'short_name',
            allowNull: true,
        },
        legalName: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'legal_name',
            allowNull: true,
        },
        registrationNo: {
            type: sequelize_1.DataTypes.STRING(60),
            field: 'registration_no',
            allowNull: true,
        },
        taxId: {
            type: sequelize_1.DataTypes.STRING(40),
            field: 'tax_id',
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
        website: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'website',
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
            allowNull: false,
        },
        currencyCode: {
            type: sequelize_1.DataTypes.CHAR(3),
            field: 'currency_code',
            allowNull: false,
        },
        timezone: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'timezone',
            allowNull: false,
        },
        locale: {
            type: sequelize_1.DataTypes.STRING(10),
            field: 'locale',
            allowNull: false,
            defaultValue: "en-US",
        },
        academicYearStartMonth: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'academic_year_start_month',
            allowNull: false,
            defaultValue: 8,
        },
        logoFileId: {
            type: sequelize_1.DataTypes.UUID,
            field: 'logo_file_id',
            allowNull: true,
        },
        motto: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'motto',
            allowNull: true,
        },
        foundedYear: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'founded_year',
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
        tableName: 'org_organization',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['is_singleton'] }
        ]
    });
    return OrgOrganizationEntity;
}

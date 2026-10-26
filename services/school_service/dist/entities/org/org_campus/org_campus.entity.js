"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrgCampusEntity = void 0;
exports.initOrgCampusEntity = initOrgCampusEntity;
const sequelize_1 = require("sequelize");
class OrgCampusEntity extends sequelize_1.Model {
}
exports.OrgCampusEntity = OrgCampusEntity;
function initOrgCampusEntity(sequelize) {
    OrgCampusEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('org_campus')"),
        },
        campusId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'campus_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        organizationId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'organization_id',
            allowNull: false,
            references: { model: 'org_organization', key: 'organization_id' },
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
        campusType: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'campus_type',
            allowNull: false,
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
        phone: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'phone',
            allowNull: true,
        },
        email: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'email',
            allowNull: true,
        },
        timezone: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'timezone',
            allowNull: true,
        },
        latitude: {
            type: sequelize_1.DataTypes.DECIMAL(9, 6),
            field: 'latitude',
            allowNull: true,
        },
        longitude: {
            type: sequelize_1.DataTypes.DECIMAL(9, 6),
            field: 'longitude',
            allowNull: true,
        },
        establishedOn: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'established_on',
            allowNull: true,
        },
        principalStaffId: {
            type: sequelize_1.DataTypes.UUID,
            field: 'principal_staff_id',
            allowNull: true,
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
        tableName: 'org_campus',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['code'] },
            { unique: true, fields: ['name'] }
        ]
    });
    return OrgCampusEntity;
}

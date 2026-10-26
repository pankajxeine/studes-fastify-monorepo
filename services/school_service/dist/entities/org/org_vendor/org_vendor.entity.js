"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrgVendorEntity = void 0;
exports.initOrgVendorEntity = initOrgVendorEntity;
const sequelize_1 = require("sequelize");
class OrgVendorEntity extends sequelize_1.Model {
}
exports.OrgVendorEntity = OrgVendorEntity;
function initOrgVendorEntity(sequelize) {
    OrgVendorEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('org_vendor')"),
        },
        vendorId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'vendor_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
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
        serviceCategory: {
            type: sequelize_1.DataTypes.STRING(30),
            field: 'service_category',
            allowNull: false,
        },
        taxId: {
            type: sequelize_1.DataTypes.STRING(40),
            field: 'tax_id',
            allowNull: true,
        },
        contactName: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'contact_name',
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
            allowNull: true,
        },
        paymentTermsDays: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'payment_terms_days',
            allowNull: false,
            defaultValue: 30,
        },
        bankAccountName: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'bank_account_name',
            allowNull: true,
        },
        bankAccountNo: {
            type: sequelize_1.DataTypes.STRING(40),
            field: 'bank_account_no',
            allowNull: true,
        },
        bankRoutingCode: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'bank_routing_code',
            allowNull: true,
        },
        rating: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'rating',
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
        tableName: 'org_vendor',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: true,
        deletedAt: 'deletedAt'
    });
    return OrgVendorEntity;
}

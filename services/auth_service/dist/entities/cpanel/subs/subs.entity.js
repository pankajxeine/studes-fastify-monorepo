"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubsEntity = void 0;
exports.initSubsEntity = initSubsEntity;
const sequelize_1 = require("sequelize");
class SubsEntity extends sequelize_1.Model {
}
exports.SubsEntity = SubsEntity;
function initSubsEntity(sequelize) {
    SubsEntity.init({
        id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'id',
            allowNull: true,
            primaryKey: true,
        },
        customerId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'customer_id',
            allowNull: true,
            references: { model: 'customers', key: 'id' },
            onDelete: 'CASCADE',
        },
        subdomain: {
            type: sequelize_1.DataTypes.STRING(50),
            field: 'subdomain',
            allowNull: true,
        },
        protocol: {
            type: sequelize_1.DataTypes.STRING(5),
            field: 'protocol',
            allowNull: true,
        },
        shortname: {
            type: sequelize_1.DataTypes.STRING(30),
            field: 'shortname',
            allowNull: true,
        },
        databaseName: {
            type: sequelize_1.DataTypes.STRING(30),
            field: 'database_name',
            allowNull: true,
        },
        name: {
            type: sequelize_1.DataTypes.STRING(50),
            field: 'name',
            allowNull: true,
        },
        logo: {
            type: sequelize_1.DataTypes.STRING(255),
            field: 'logo',
            allowNull: true,
        },
        cloudPrintLogo: {
            type: sequelize_1.DataTypes.STRING(255),
            field: 'cloud_print_logo',
            allowNull: true,
        },
        logoZpl: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'logo_zpl',
            allowNull: true,
        },
        siteLogo: {
            type: sequelize_1.DataTypes.STRING(255),
            field: 'site_logo',
            allowNull: true,
        },
        faviconIcon: {
            type: sequelize_1.DataTypes.STRING(255),
            field: 'favicon_icon',
            allowNull: true,
        },
        mobileLogo: {
            type: sequelize_1.DataTypes.STRING(255),
            field: 'mobile_logo',
            allowNull: true,
        },
        industryId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'industry_id',
            allowNull: true,
            references: { model: 'industries', key: 'id' },
            onDelete: 'CASCADE',
        },
        packageId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'package_id',
            allowNull: true,
            references: { model: 'sub_packages', key: 'id' },
            onDelete: 'CASCADE',
        },
        environmentId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'environment_id',
            allowNull: true,
        },
        industryEnvironmentId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'industry_environment_id',
            allowNull: true,
        },
        authKey: {
            type: sequelize_1.DataTypes.STRING(50),
            field: 'auth_key',
            allowNull: true,
        },
        decimalValue: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'decimal_value',
            allowNull: true,
            defaultValue: 2,
        },
        s3Folder: {
            type: sequelize_1.DataTypes.STRING(100),
            field: 's3_folder',
            allowNull: true,
        },
        status: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'status',
            allowNull: false,
            defaultValue: "Active",
        },
        siteCreated: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'site_created',
            allowNull: false,
            defaultValue: "No",
        },
        allowPackageUpgrade: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'allow_package_upgrade',
            allowNull: false,
            defaultValue: "No",
        },
        permissionBasedOn: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'permission_based_on',
            allowNull: true,
            defaultValue: "Role",
        },
        sourceOfCreation: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'source_of_creation',
            allowNull: true,
        },
        defaultRole: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'default_role',
            allowNull: true,
        },
        isRoleSynced: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_role_synced',
            allowNull: false,
            defaultValue: "No",
        },
        languageId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'language_id',
            allowNull: true,
        },
        currencyId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'currency_id',
            allowNull: true,
        },
        bundleRetailPrice: {
            type: sequelize_1.DataTypes.DECIMAL(15, 2),
            field: 'bundle_retail_price',
            allowNull: true,
        },
        billingFrequency: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'billing_frequency',
            allowNull: false,
            defaultValue: "Monthly",
        },
        signupDate: {
            type: sequelize_1.DataTypes.DATE,
            field: 'signup_date',
            allowNull: true,
        },
        lastAccess: {
            type: sequelize_1.DataTypes.DATE,
            field: 'last_access',
            allowNull: true,
        },
        createdAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'created_at',
            allowNull: true,
        },
        updatedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'updated_at',
            allowNull: true,
        },
        deletedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'deleted_at',
            allowNull: true,
        }
    }, {
        sequelize,
        tableName: 'subs',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: false,
        indexes: [
            { unique: true, fields: ['subdomain'] },
            { unique: true, fields: ['shortname'] }
        ]
    });
    return SubsEntity;
}

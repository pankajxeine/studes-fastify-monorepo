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
        },
        customer_id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'customer_id',
            allowNull: true,
        },
        subdomain: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'subdomain',
            allowNull: true,
            defaultValue: null,
        },
        protocol: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'protocol',
            allowNull: true,
            defaultValue: null,
        },
        shortname: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'shortname',
            allowNull: true,
            defaultValue: null,
        },
        database_name: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'database_name',
            allowNull: true,
            defaultValue: null,
        },
        name: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'name',
            allowNull: true,
            defaultValue: null,
        },
        logo: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'logo',
            allowNull: true,
            defaultValue: null,
        },
        cloud_print_logo: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'cloud_print_logo',
            allowNull: true,
            defaultValue: null,
        },
        logo_zpl: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'logo_zpl',
            allowNull: true,
            defaultValue: null,
        },
        site_logo: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'site_logo',
            allowNull: true,
            defaultValue: null,
        },
        favicon_icon: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'favicon_icon',
            allowNull: true,
            defaultValue: null,
        },
        mobile_logo: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'mobile_logo',
            allowNull: true,
            defaultValue: null,
        },
        industry_id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'industry_id',
            allowNull: true,
        },
        package_id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'package_id',
            allowNull: true,
        },
        environment_id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'environment_id',
            allowNull: true,
        },
        industry_environment_id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'industry_environment_id',
            allowNull: true,
        },
        auth_key: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'auth_key',
            allowNull: true,
            defaultValue: null,
        },
        decimal_value: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'decimal_value',
            allowNull: true,
        },
        s3_folder: {
            type: sequelize_1.DataTypes.CHAR,
            field: 's3_folder',
            allowNull: true,
            defaultValue: null,
        },
        status: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'status',
            allowNull: true,
            defaultValue: null,
        },
        site_created: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'site_created',
            allowNull: true,
            defaultValue: null,
        },
        allow_package_upgrade: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'allow_package_upgrade',
            allowNull: true,
            defaultValue: null,
        },
        permission_based_on: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'permission_based_on',
            allowNull: true,
            defaultValue: null,
        },
        source_of_creation: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'source_of_creation',
            allowNull: true,
            defaultValue: null,
        },
        default_role: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'default_role',
            allowNull: true,
        },
        is_role_synced: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_role_synced',
            allowNull: true,
        },
        language_id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'language_id',
            allowNull: true,
        },
        currency_id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'currency_id',
            allowNull: true,
        },
        bundle_retail_price: {
            type: sequelize_1.DataTypes.DECIMAL(4, 1),
            field: 'bundle_retail_price',
            allowNull: true,
            defaultValue: null,
        },
        billing_frequency: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'billing_frequency',
            allowNull: true,
            defaultValue: null,
        },
        signup_date: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'signup_date',
            allowNull: true,
            defaultValue: null,
        },
        order_count: {
            type: sequelize_1.DataTypes.DECIMAL(6, 3),
            field: 'order_count',
            allowNull: true,
            defaultValue: null,
        },
        product_count: {
            type: sequelize_1.DataTypes.DECIMAL(4, 3),
            field: 'product_count',
            allowNull: true,
            defaultValue: null,
        },
        created_at: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'created_at',
            allowNull: true,
            defaultValue: null,
        },
        updated_at: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'updated_at',
            allowNull: true,
            defaultValue: null,
        },
        last_access: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'last_access',
            allowNull: true,
            defaultValue: null,
        }
    }, {
        sequelize,
        tableName: 'subs',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: true
    });
    return SubsEntity;
}

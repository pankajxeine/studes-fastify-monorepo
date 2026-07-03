"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersEntity = void 0;
exports.initCustomersEntity = initCustomersEntity;
const sequelize_1 = require("sequelize");
class CustomersEntity extends sequelize_1.Model {
}
exports.CustomersEntity = CustomersEntity;
function initCustomersEntity(sequelize) {
    CustomersEntity.init({
        id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'id',
            allowNull: true,
        },
        name: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'name',
            allowNull: true,
            defaultValue: null,
        },
        contact_title: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'contact_title',
            allowNull: true,
            defaultValue: null,
        },
        customer_type: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'customer_type',
            allowNull: true,
            defaultValue: null,
        },
        contact_name: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'contact_name',
            allowNull: true,
            defaultValue: null,
        },
        customer_status_id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'customer_status_id',
            allowNull: true,
        },
        created_by: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'created_by',
            allowNull: true,
        },
        updated_by: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'updated_by',
            allowNull: true,
        },
        customer_number: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'customer_number',
            allowNull: true,
            defaultValue: null,
        },
        type: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'type',
            allowNull: true,
            defaultValue: null,
        },
        customer_email: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'customer_email',
            allowNull: true,
            defaultValue: null,
        },
        client_email: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'client_email',
            allowNull: true,
            defaultValue: null,
        },
        dba: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'dba',
            allowNull: true,
            defaultValue: null,
        },
        contract_start_date: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'contract_start_date',
            allowNull: true,
            defaultValue: null,
        },
        contract_expire_date: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'contract_expire_date',
            allowNull: true,
            defaultValue: null,
        },
        cost_center: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'cost_center',
            allowNull: true,
        },
        city: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'city',
            allowNull: true,
            defaultValue: null,
        },
        state_id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'state_id',
            allowNull: true,
        },
        country_id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'country_id',
            allowNull: true,
        },
        postal_code: {
            type: sequelize_1.DataTypes.INTEGER,
            field: 'postal_code',
            allowNull: true,
        },
        phone_number: {
            type: sequelize_1.DataTypes.BIGINT,
            field: 'phone_number',
            allowNull: true,
        },
        street_address: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'street_address',
            allowNull: true,
            defaultValue: null,
        },
        chain_number: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'chain_number',
            allowNull: true,
            defaultValue: null,
        },
        sic_code: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'sic_code',
            allowNull: true,
        },
        branch_id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'branch_id',
            allowNull: true,
        },
        status: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'status',
            allowNull: true,
            defaultValue: null,
        },
        hours_elapsed: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'hours_elapsed',
            allowNull: true,
        },
        minutes_elapsed: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'minutes_elapsed',
            allowNull: true,
        },
        is_new_client: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'is_new_client',
            allowNull: true,
            defaultValue: null,
        },
        allow_package_upgrade: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'allow_package_upgrade',
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
        deleted_at: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'deleted_at',
            allowNull: true,
            defaultValue: null,
        }
    }, {
        sequelize,
        tableName: 'customers',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: true
    });
    return CustomersEntity;
}

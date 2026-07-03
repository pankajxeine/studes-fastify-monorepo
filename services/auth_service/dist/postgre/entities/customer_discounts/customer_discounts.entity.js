"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerDiscountsEntity = void 0;
exports.initCustomerDiscountsEntity = initCustomerDiscountsEntity;
const sequelize_1 = require("sequelize");
class CustomerDiscountsEntity extends sequelize_1.Model {
}
exports.CustomerDiscountsEntity = CustomerDiscountsEntity;
function initCustomerDiscountsEntity(sequelize) {
    CustomerDiscountsEntity.init({
        id: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'id',
            allowNull: true,
            defaultValue: null,
        },
        customer_id: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'customer_id',
            allowNull: true,
            defaultValue: null,
        },
        package_id: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'package_id',
            allowNull: true,
            defaultValue: null,
        },
        sub_id: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'sub_id',
            allowNull: true,
            defaultValue: null,
        },
        discount_percentage: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'discount_percentage',
            allowNull: true,
            defaultValue: null,
        },
        discount_duration: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'discount_duration',
            allowNull: true,
            defaultValue: null,
        },
        discount_used: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'discount_used',
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
        }
    }, {
        sequelize,
        tableName: 'customer_discounts',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: true
    });
    return CustomerDiscountsEntity;
}

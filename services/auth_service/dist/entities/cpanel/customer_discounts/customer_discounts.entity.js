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
            type: sequelize_1.DataTypes.INTEGER,
            field: 'id',
            allowNull: true,
            primaryKey: true,
        },
        customerId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'customer_id',
            allowNull: true,
        },
        packageId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'package_id',
            allowNull: true,
        },
        subId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'sub_id',
            allowNull: true,
        },
        discountPercentage: {
            type: sequelize_1.DataTypes.DECIMAL(10, 2),
            field: 'discount_percentage',
            allowNull: false,
            defaultValue: 0.00,
        },
        discountDuration: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'discount_duration',
            allowNull: true,
        },
        discountUsed: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'discount_used',
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
        }
    }, {
        sequelize,
        tableName: 'customer_discounts',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: false,
        indexes: [
            { unique: true, fields: ['id'] },
            { unique: true, fields: ['customer_id', 'sub_id'] }
        ]
    });
    return CustomerDiscountsEntity;
}

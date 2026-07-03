"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerNumbersEntity = void 0;
exports.initCustomerNumbersEntity = initCustomerNumbersEntity;
const sequelize_1 = require("sequelize");
class CustomerNumbersEntity extends sequelize_1.Model {
}
exports.CustomerNumbersEntity = CustomerNumbersEntity;
function initCustomerNumbersEntity(sequelize) {
    CustomerNumbersEntity.init({
        id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'id',
            allowNull: true,
            primaryKey: true,
        },
        module: {
            type: sequelize_1.DataTypes.STRING(14),
            field: 'module',
            allowNull: true,
        },
        prefix: {
            type: sequelize_1.DataTypes.STRING(4),
            field: 'prefix',
            allowNull: true,
        },
        nextNo: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'next_no',
            allowNull: true,
        }
    }, {
        sequelize,
        tableName: 'customer_numbers',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: false,
        indexes: [
            { unique: true, fields: ['id'] }
        ]
    });
    return CustomerNumbersEntity;
}

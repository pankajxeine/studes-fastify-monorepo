"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerExportTemplatesEntity = void 0;
exports.initCustomerExportTemplatesEntity = initCustomerExportTemplatesEntity;
const sequelize_1 = require("sequelize");
class CustomerExportTemplatesEntity extends sequelize_1.Model {
}
exports.CustomerExportTemplatesEntity = CustomerExportTemplatesEntity;
function initCustomerExportTemplatesEntity(sequelize) {
    CustomerExportTemplatesEntity.init({
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
        is_default: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'is_default',
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
        tableName: 'customer_export_templates',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: true
    });
    return CustomerExportTemplatesEntity;
}

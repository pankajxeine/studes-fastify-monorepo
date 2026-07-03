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
            type: sequelize_1.DataTypes.INTEGER,
            field: 'id',
            allowNull: true,
            primaryKey: true,
        },
        name: {
            type: sequelize_1.DataTypes.STRING(200),
            field: 'name',
            allowNull: true,
        },
        isDefault: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_default',
            allowNull: true,
            defaultValue: "no",
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
        tableName: 'customer_export_templates',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: false,
        indexes: [
            { unique: true, fields: ['id'] }
        ]
    });
    return CustomerExportTemplatesEntity;
}

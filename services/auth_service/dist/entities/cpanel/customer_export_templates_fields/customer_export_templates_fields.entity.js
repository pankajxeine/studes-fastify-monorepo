"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerExportTemplatesFieldsEntity = void 0;
exports.initCustomerExportTemplatesFieldsEntity = initCustomerExportTemplatesFieldsEntity;
const sequelize_1 = require("sequelize");
class CustomerExportTemplatesFieldsEntity extends sequelize_1.Model {
}
exports.CustomerExportTemplatesFieldsEntity = CustomerExportTemplatesFieldsEntity;
function initCustomerExportTemplatesFieldsEntity(sequelize) {
    CustomerExportTemplatesFieldsEntity.init({
        id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'id',
            allowNull: true,
            primaryKey: true,
        },
        templateId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'template_id',
            allowNull: true,
        },
        label: {
            type: sequelize_1.DataTypes.STRING(100),
            field: 'label',
            allowNull: true,
        },
        value: {
            type: sequelize_1.DataTypes.STRING(100),
            field: 'value',
            allowNull: true,
        },
        sequence: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'sequence',
            allowNull: true,
        },
        module: {
            type: sequelize_1.DataTypes.STRING(200),
            field: 'module',
            allowNull: true,
        },
        isRequired: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_required',
            allowNull: true,
            defaultValue: "yes",
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
        tableName: 'customer_export_templates_fields',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: false,
        indexes: [
            { unique: true, fields: ['id'] },
            { unique: true, fields: ['template_id'] }
        ]
    });
    return CustomerExportTemplatesFieldsEntity;
}

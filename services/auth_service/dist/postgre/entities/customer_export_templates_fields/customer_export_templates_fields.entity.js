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
        },
        template_id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'template_id',
            allowNull: true,
        },
        label: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'label',
            allowNull: true,
            defaultValue: null,
        },
        value: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'value',
            allowNull: true,
            defaultValue: null,
        },
        sequence: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'sequence',
            allowNull: true,
        },
        module: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'module',
            allowNull: true,
            defaultValue: null,
        },
        is_required: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'is_required',
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
        tableName: 'customer_export_templates_fields',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: true
    });
    return CustomerExportTemplatesFieldsEntity;
}

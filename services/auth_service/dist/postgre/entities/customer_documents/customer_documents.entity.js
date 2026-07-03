"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerDocumentsEntity = void 0;
exports.initCustomerDocumentsEntity = initCustomerDocumentsEntity;
const sequelize_1 = require("sequelize");
class CustomerDocumentsEntity extends sequelize_1.Model {
}
exports.CustomerDocumentsEntity = CustomerDocumentsEntity;
function initCustomerDocumentsEntity(sequelize) {
    CustomerDocumentsEntity.init({
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
        document_name: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'document_name',
            allowNull: true,
            defaultValue: null,
        },
        file_name: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'file_name',
            allowNull: true,
            defaultValue: null,
        },
        document_type_id: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'document_type_id',
            allowNull: true,
            defaultValue: null,
        },
        created_by: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'created_by',
            allowNull: true,
            defaultValue: null,
        },
        updated_by: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'updated_by',
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
        tableName: 'customer_documents',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: true
    });
    return CustomerDocumentsEntity;
}

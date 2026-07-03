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
            type: sequelize_1.DataTypes.TEXT,
            field: 'id',
            allowNull: true,
            primaryKey: true,
        },
        customerId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'customer_id',
            allowNull: true,
            primaryKey: true,
        },
        documentName: {
            type: sequelize_1.DataTypes.STRING(300),
            field: 'document_name',
            allowNull: true,
        },
        fileName: {
            type: sequelize_1.DataTypes.STRING(300),
            field: 'file_name',
            allowNull: true,
        },
        documentTypeId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'document_type_id',
            allowNull: true,
            primaryKey: true,
        },
        createdBy: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'created_by',
            allowNull: true,
        },
        updatedBy: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'updated_by',
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
        },
        deletedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'deleted_at',
            allowNull: true,
        }
    }, {
        sequelize,
        tableName: 'customer_documents',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: false,
        indexes: [
            { unique: true, fields: ['id', 'customer_id', 'document_type_id'] }
        ]
    });
    return CustomerDocumentsEntity;
}

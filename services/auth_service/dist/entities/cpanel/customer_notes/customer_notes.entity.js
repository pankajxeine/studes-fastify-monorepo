"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerNotesEntity = void 0;
exports.initCustomerNotesEntity = initCustomerNotesEntity;
const sequelize_1 = require("sequelize");
class CustomerNotesEntity extends sequelize_1.Model {
}
exports.CustomerNotesEntity = CustomerNotesEntity;
function initCustomerNotesEntity(sequelize) {
    CustomerNotesEntity.init({
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
        subject: {
            type: sequelize_1.DataTypes.STRING(50),
            field: 'subject',
            allowNull: true,
        },
        description: {
            type: sequelize_1.DataTypes.STRING(500),
            field: 'description',
            allowNull: true,
        },
        assigneeId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'assignee_id',
            allowNull: true,
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
        tableName: 'customer_notes',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: false,
        indexes: [
            { unique: true, fields: ['id'] }
        ]
    });
    return CustomerNotesEntity;
}

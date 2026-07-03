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
        subject: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'subject',
            allowNull: true,
            defaultValue: null,
        },
        description: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'description',
            allowNull: true,
            defaultValue: null,
        },
        assignee_id: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'assignee_id',
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
        tableName: 'customer_notes',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: true
    });
    return CustomerNotesEntity;
}

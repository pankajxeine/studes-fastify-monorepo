"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceTicketTypesEntity = void 0;
exports.initServiceTicketTypesEntity = initServiceTicketTypesEntity;
const sequelize_1 = require("sequelize");
class ServiceTicketTypesEntity extends sequelize_1.Model {
}
exports.ServiceTicketTypesEntity = ServiceTicketTypesEntity;
function initServiceTicketTypesEntity(sequelize) {
    ServiceTicketTypesEntity.init({
        id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'id',
            allowNull: true,
            primaryKey: true,
        },
        name: {
            type: sequelize_1.DataTypes.STRING(50),
            field: 'name',
            allowNull: true,
        },
        status: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'status',
            allowNull: false,
            defaultValue: "Active",
        },
        createdBy: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'created_by',
            allowNull: true,
        },
        hours: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'hours',
            allowNull: true,
            defaultValue: 0,
        },
        sequence: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'sequence',
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
        tableName: 'service_ticket_types',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: false,
        indexes: [
            { unique: true, fields: ['id'] }
        ]
    });
    return ServiceTicketTypesEntity;
}

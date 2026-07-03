"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceTicketUserContentsEntity = void 0;
exports.initServiceTicketUserContentsEntity = initServiceTicketUserContentsEntity;
const sequelize_1 = require("sequelize");
class ServiceTicketUserContentsEntity extends sequelize_1.Model {
}
exports.ServiceTicketUserContentsEntity = ServiceTicketUserContentsEntity;
function initServiceTicketUserContentsEntity(sequelize) {
    ServiceTicketUserContentsEntity.init({
        id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'id',
            allowNull: true,
            primaryKey: true,
        },
        serviceTicketId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'service_ticket_id',
            allowNull: true,
        },
        customerId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'customer_id',
            allowNull: true,
        },
        subId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'sub_id',
            allowNull: true,
        },
        userId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'user_id',
            allowNull: true,
        },
        content: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'content',
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
        tableName: 'service_ticket_user_contents',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: false,
        indexes: [
            { unique: true, fields: ['id'] }
        ]
    });
    return ServiceTicketUserContentsEntity;
}

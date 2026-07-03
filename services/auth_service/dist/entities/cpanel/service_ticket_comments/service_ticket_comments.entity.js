"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceTicketCommentsEntity = void 0;
exports.initServiceTicketCommentsEntity = initServiceTicketCommentsEntity;
const sequelize_1 = require("sequelize");
class ServiceTicketCommentsEntity extends sequelize_1.Model {
}
exports.ServiceTicketCommentsEntity = ServiceTicketCommentsEntity;
function initServiceTicketCommentsEntity(sequelize) {
    ServiceTicketCommentsEntity.init({
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
        userId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'user_id',
            allowNull: true,
        },
        userComment: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'user_comment',
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
        }
    }, {
        sequelize,
        tableName: 'service_ticket_comments',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: false,
        indexes: [
            { unique: true, fields: ['id'] }
        ]
    });
    return ServiceTicketCommentsEntity;
}

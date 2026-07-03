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
            type: sequelize_1.DataTypes.CHAR,
            field: 'id',
            allowNull: true,
            defaultValue: null,
        },
        service_ticket_id: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'service_ticket_id',
            allowNull: true,
            defaultValue: null,
        },
        user_id: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'user_id',
            allowNull: true,
            defaultValue: null,
        },
        user_comment: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'user_comment',
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
        tableName: 'service_ticket_comments',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: true
    });
    return ServiceTicketCommentsEntity;
}

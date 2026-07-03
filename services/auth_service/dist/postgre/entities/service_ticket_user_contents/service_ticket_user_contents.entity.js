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
        customer_id: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'customer_id',
            allowNull: true,
            defaultValue: null,
        },
        sub_id: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'sub_id',
            allowNull: true,
            defaultValue: null,
        },
        user_id: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'user_id',
            allowNull: true,
            defaultValue: null,
        },
        content: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'content',
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
        tableName: 'service_ticket_user_contents',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: true
    });
    return ServiceTicketUserContentsEntity;
}

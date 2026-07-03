"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesAgentsEntity = void 0;
exports.initSalesAgentsEntity = initSalesAgentsEntity;
const sequelize_1 = require("sequelize");
class SalesAgentsEntity extends sequelize_1.Model {
}
exports.SalesAgentsEntity = SalesAgentsEntity;
function initSalesAgentsEntity(sequelize) {
    SalesAgentsEntity.init({
        id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'id',
            allowNull: true,
            primaryKey: true,
        },
        name: {
            type: sequelize_1.DataTypes.STRING(100),
            field: 'name',
            allowNull: true,
        },
        address1: {
            type: sequelize_1.DataTypes.STRING(100),
            field: 'address1',
            allowNull: true,
        },
        address2: {
            type: sequelize_1.DataTypes.STRING(100),
            field: 'address2',
            allowNull: true,
        },
        notes: {
            type: sequelize_1.DataTypes.STRING(200),
            field: 'notes',
            allowNull: true,
        },
        city: {
            type: sequelize_1.DataTypes.STRING(30),
            field: 'city',
            allowNull: true,
        },
        stateId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'state_id',
            allowNull: true,
        },
        countryId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'country_id',
            allowNull: true,
        },
        postalCode: {
            type: sequelize_1.DataTypes.STRING(10),
            field: 'postal_code',
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
        }
    }, {
        sequelize,
        tableName: 'sales_agents',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: false,
        indexes: [
            { unique: true, fields: ['id'] }
        ]
    });
    return SalesAgentsEntity;
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CpanelsEntity = void 0;
exports.initCpanelsEntity = initCpanelsEntity;
const sequelize_1 = require("sequelize");
class CpanelsEntity extends sequelize_1.Model {
}
exports.CpanelsEntity = CpanelsEntity;
function initCpanelsEntity(sequelize) {
    CpanelsEntity.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            field: 'id',
            allowNull: true,
            primaryKey: true,
            autoIncrement: true,
        },
        domain: {
            type: sequelize_1.DataTypes.STRING(100),
            field: 'domain',
            allowNull: false,
        },
        apiEndpoint: {
            type: sequelize_1.DataTypes.STRING(100),
            field: 'api_endpoint',
            allowNull: false,
        },
        settings: {
            type: sequelize_1.DataTypes.JSONB,
            field: 'settings',
            allowNull: true,
        },
        createdAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'created_at',
            allowNull: false,
        },
        updatedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'updated_at',
            allowNull: false,
        }
    }, {
        sequelize,
        tableName: 'cpanels',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: false,
        indexes: [
            { unique: true, fields: ['domain'] }
        ]
    });
    return CpanelsEntity;
}

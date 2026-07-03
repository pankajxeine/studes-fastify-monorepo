"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrmsEntity = void 0;
exports.initCrmsEntity = initCrmsEntity;
const sequelize_1 = require("sequelize");
class CrmsEntity extends sequelize_1.Model {
}
exports.CrmsEntity = CrmsEntity;
function initCrmsEntity(sequelize) {
    CrmsEntity.init({
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
        cpanelId: {
            type: sequelize_1.DataTypes.INTEGER,
            field: 'cpanel_id',
            allowNull: false,
            references: { model: 'cpanels', key: 'id' },
            onDelete: 'CASCADE',
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
        tableName: 'crms',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: false,
        indexes: [
            { unique: true, fields: ['domain'] }
        ]
    });
    return CrmsEntity;
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SitesEntity = void 0;
exports.initSitesEntity = initSitesEntity;
const sequelize_1 = require("sequelize");
class SitesEntity extends sequelize_1.Model {
}
exports.SitesEntity = SitesEntity;
function initSitesEntity(sequelize) {
    SitesEntity.init({
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
        shortCode: {
            type: sequelize_1.DataTypes.STRING(100),
            field: 'short_code',
            allowNull: false,
        },
        mobileLogo: {
            type: sequelize_1.DataTypes.STRING(255),
            field: 'mobile_logo',
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
        tableName: 'sites',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: false,
        indexes: [
            { unique: true, fields: ['domain'] }
        ]
    });
    return SitesEntity;
}

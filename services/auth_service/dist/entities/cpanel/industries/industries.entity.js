"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndustriesEntity = void 0;
exports.initIndustriesEntity = initIndustriesEntity;
const sequelize_1 = require("sequelize");
class IndustriesEntity extends sequelize_1.Model {
}
exports.IndustriesEntity = IndustriesEntity;
function initIndustriesEntity(sequelize) {
    IndustriesEntity.init({
        id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'id',
            allowNull: true,
            primaryKey: true,
        },
        code: {
            type: sequelize_1.DataTypes.STRING(8),
            field: 'code',
            allowNull: true,
        },
        name: {
            type: sequelize_1.DataTypes.STRING(7),
            field: 'name',
            allowNull: true,
        },
        description: {
            type: sequelize_1.DataTypes.STRING(17),
            field: 'description',
            allowNull: true,
        },
        type: {
            type: sequelize_1.DataTypes.STRING(8),
            field: 'type',
            allowNull: true,
        },
        image: {
            type: sequelize_1.DataTypes.STRING(12),
            field: 'image',
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
        tableName: 'industries',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: false,
        indexes: [
            { unique: true, fields: ['id'] },
            { unique: true, fields: ['code'] }
        ]
    });
    return IndustriesEntity;
}

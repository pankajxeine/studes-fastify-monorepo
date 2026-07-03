"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkeletonDetailsEntity = void 0;
exports.initSkeletonDetailsEntity = initSkeletonDetailsEntity;
const sequelize_1 = require("sequelize");
class SkeletonDetailsEntity extends sequelize_1.Model {
}
exports.SkeletonDetailsEntity = SkeletonDetailsEntity;
function initSkeletonDetailsEntity(sequelize) {
    SkeletonDetailsEntity.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            field: 'id',
            allowNull: true,
            primaryKey: true,
            autoIncrement: true,
        },
        databaseName: {
            type: sequelize_1.DataTypes.STRING(50),
            field: 'database_name',
            allowNull: false,
        },
        environment: {
            type: sequelize_1.DataTypes.STRING(50),
            field: 'environment',
            allowNull: true,
        },
        industry: {
            type: sequelize_1.DataTypes.STRING(50),
            field: 'industry',
            allowNull: false,
        },
        configuration: {
            type: sequelize_1.DataTypes.JSONB,
            field: 'configuration',
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
        tableName: 'skeleton_details',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: false
    });
    return SkeletonDetailsEntity;
}

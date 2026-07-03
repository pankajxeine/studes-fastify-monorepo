"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkeletonConfigurationsEntity = void 0;
exports.initSkeletonConfigurationsEntity = initSkeletonConfigurationsEntity;
const sequelize_1 = require("sequelize");
class SkeletonConfigurationsEntity extends sequelize_1.Model {
}
exports.SkeletonConfigurationsEntity = SkeletonConfigurationsEntity;
function initSkeletonConfigurationsEntity(sequelize) {
    SkeletonConfigurationsEntity.init({
        id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'id',
            allowNull: true,
        },
        skeleton_database_name: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'skeleton_database_name',
            allowNull: true,
            defaultValue: null,
        },
        institute_type: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'institute_type',
            allowNull: true,
            defaultValue: null,
        },
        environment: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'environment',
            allowNull: true,
            defaultValue: null,
        },
        database_connections: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'database_connections',
            allowNull: true,
            defaultValue: null,
        },
        configuration_details: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'configuration_details',
            allowNull: true,
            defaultValue: null,
        },
        description: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'description',
            allowNull: true,
            defaultValue: null,
        },
        status: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'status',
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
        tableName: 'skeleton_configurations',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: true
    });
    return SkeletonConfigurationsEntity;
}

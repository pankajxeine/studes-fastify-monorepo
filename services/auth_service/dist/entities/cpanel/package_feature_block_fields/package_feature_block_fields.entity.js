"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackageFeatureBlockFieldsEntity = void 0;
exports.initPackageFeatureBlockFieldsEntity = initPackageFeatureBlockFieldsEntity;
const sequelize_1 = require("sequelize");
class PackageFeatureBlockFieldsEntity extends sequelize_1.Model {
}
exports.PackageFeatureBlockFieldsEntity = PackageFeatureBlockFieldsEntity;
function initPackageFeatureBlockFieldsEntity(sequelize) {
    PackageFeatureBlockFieldsEntity.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            field: 'id',
            allowNull: true,
            primaryKey: true,
        },
        packageFeatureBlockId: {
            type: sequelize_1.DataTypes.INTEGER,
            field: 'package_feature_block_id',
            allowNull: true,
        },
        fieldId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'field_id',
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
        tableName: 'package_feature_block_fields',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: false,
        indexes: [
            { unique: true, fields: ['id'] }
        ]
    });
    return PackageFeatureBlockFieldsEntity;
}

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
        },
        package_feature_block_id: {
            type: sequelize_1.DataTypes.INTEGER,
            field: 'package_feature_block_id',
            allowNull: true,
        },
        field_id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'field_id',
            allowNull: true,
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
        tableName: 'package_feature_block_fields',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: true
    });
    return PackageFeatureBlockFieldsEntity;
}

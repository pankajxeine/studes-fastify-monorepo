"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackageFeatureBlocksEntity = void 0;
exports.initPackageFeatureBlocksEntity = initPackageFeatureBlocksEntity;
const sequelize_1 = require("sequelize");
class PackageFeatureBlocksEntity extends sequelize_1.Model {
}
exports.PackageFeatureBlocksEntity = PackageFeatureBlocksEntity;
function initPackageFeatureBlocksEntity(sequelize) {
    PackageFeatureBlocksEntity.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            field: 'id',
            allowNull: true,
        },
        package_feature_id: {
            type: sequelize_1.DataTypes.INTEGER,
            field: 'package_feature_id',
            allowNull: true,
        },
        block_id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'block_id',
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
        tableName: 'package_feature_blocks',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: true
    });
    return PackageFeatureBlocksEntity;
}

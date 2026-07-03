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
            primaryKey: true,
        },
        packageFeatureId: {
            type: sequelize_1.DataTypes.INTEGER,
            field: 'package_feature_id',
            allowNull: true,
        },
        blockId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'block_id',
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
        tableName: 'package_feature_blocks',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: false,
        indexes: [
            { unique: true, fields: ['id'] }
        ]
    });
    return PackageFeatureBlocksEntity;
}

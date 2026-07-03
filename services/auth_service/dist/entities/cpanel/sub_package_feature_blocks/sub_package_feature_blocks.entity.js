"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubPackageFeatureBlocksEntity = void 0;
exports.initSubPackageFeatureBlocksEntity = initSubPackageFeatureBlocksEntity;
const sequelize_1 = require("sequelize");
class SubPackageFeatureBlocksEntity extends sequelize_1.Model {
}
exports.SubPackageFeatureBlocksEntity = SubPackageFeatureBlocksEntity;
function initSubPackageFeatureBlocksEntity(sequelize) {
    SubPackageFeatureBlocksEntity.init({
        id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'id',
            allowNull: true,
            primaryKey: true,
        },
        subPackageFeatureId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'sub_package_feature_id',
            allowNull: true,
        },
        blockId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'block_id',
            allowNull: true,
        },
        isSelected: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_selected',
            allowNull: false,
            defaultValue: "No",
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
        },
        deletedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'deleted_at',
            allowNull: true,
        }
    }, {
        sequelize,
        tableName: 'sub_package_feature_blocks',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: false,
        indexes: [
            { unique: true, fields: ['id'] }
        ]
    });
    return SubPackageFeatureBlocksEntity;
}

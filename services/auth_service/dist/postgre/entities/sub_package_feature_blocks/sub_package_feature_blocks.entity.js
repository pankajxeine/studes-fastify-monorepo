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
        },
        sub_package_feature_id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'sub_package_feature_id',
            allowNull: true,
        },
        block_id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'block_id',
            allowNull: true,
        },
        is_selected: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_selected',
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
        tableName: 'sub_package_feature_blocks',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: true
    });
    return SubPackageFeatureBlocksEntity;
}

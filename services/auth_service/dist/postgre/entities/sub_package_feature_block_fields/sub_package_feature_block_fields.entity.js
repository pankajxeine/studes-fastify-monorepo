"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubPackageFeatureBlockFieldsEntity = void 0;
exports.initSubPackageFeatureBlockFieldsEntity = initSubPackageFeatureBlockFieldsEntity;
const sequelize_1 = require("sequelize");
class SubPackageFeatureBlockFieldsEntity extends sequelize_1.Model {
}
exports.SubPackageFeatureBlockFieldsEntity = SubPackageFeatureBlockFieldsEntity;
function initSubPackageFeatureBlockFieldsEntity(sequelize) {
    SubPackageFeatureBlockFieldsEntity.init({
        id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'id',
            allowNull: true,
        },
        sub_package_feature_block_id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'sub_package_feature_block_id',
            allowNull: true,
        },
        field_id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'field_id',
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
        tableName: 'sub_package_feature_block_fields',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: true
    });
    return SubPackageFeatureBlockFieldsEntity;
}

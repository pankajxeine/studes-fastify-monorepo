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
            primaryKey: true,
        },
        subPackageFeatureBlockId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'sub_package_feature_block_id',
            allowNull: true,
        },
        fieldId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'field_id',
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
        tableName: 'sub_package_feature_block_fields',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: false,
        indexes: [
            { unique: true, fields: ['id'] }
        ]
    });
    return SubPackageFeatureBlockFieldsEntity;
}

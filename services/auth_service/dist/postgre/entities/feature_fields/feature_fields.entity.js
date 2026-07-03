"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeatureFieldsEntity = void 0;
exports.initFeatureFieldsEntity = initFeatureFieldsEntity;
const sequelize_1 = require("sequelize");
class FeatureFieldsEntity extends sequelize_1.Model {
}
exports.FeatureFieldsEntity = FeatureFieldsEntity;
function initFeatureFieldsEntity(sequelize) {
    FeatureFieldsEntity.init({
        id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'id',
            allowNull: true,
        },
        module_block_id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'module_block_id',
            allowNull: true,
        },
        field_name: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'field_name',
            allowNull: true,
            defaultValue: null,
        },
        field_key: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'field_key',
            allowNull: true,
            defaultValue: null,
        },
        is_required: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_required',
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
        tableName: 'feature_fields',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: true
    });
    return FeatureFieldsEntity;
}

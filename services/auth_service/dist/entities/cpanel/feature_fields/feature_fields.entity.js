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
            primaryKey: true,
        },
        moduleBlockId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'module_block_id',
            allowNull: true,
        },
        fieldName: {
            type: sequelize_1.DataTypes.STRING(22),
            field: 'field_name',
            allowNull: true,
        },
        fieldKey: {
            type: sequelize_1.DataTypes.STRING(35),
            field: 'field_key',
            allowNull: true,
        },
        isRequired: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_required',
            allowNull: true,
            defaultValue: "Yes",
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
        tableName: 'feature_fields',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: false,
        indexes: [
            { unique: true, fields: ['id'] }
        ]
    });
    return FeatureFieldsEntity;
}

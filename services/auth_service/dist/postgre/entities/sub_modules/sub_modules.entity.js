"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubModulesEntity = void 0;
exports.initSubModulesEntity = initSubModulesEntity;
const sequelize_1 = require("sequelize");
class SubModulesEntity extends sequelize_1.Model {
}
exports.SubModulesEntity = SubModulesEntity;
function initSubModulesEntity(sequelize) {
    SubModulesEntity.init({
        id: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'id',
            allowNull: true,
            defaultValue: null,
        },
        sub_id: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'sub_id',
            allowNull: true,
            defaultValue: null,
        },
        module_id: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'module_id',
            allowNull: true,
            defaultValue: null,
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
        tableName: 'sub_modules',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: true
    });
    return SubModulesEntity;
}

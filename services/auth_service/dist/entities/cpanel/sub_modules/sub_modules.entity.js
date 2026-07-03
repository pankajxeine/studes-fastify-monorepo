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
            type: sequelize_1.DataTypes.TEXT,
            field: 'id',
            allowNull: true,
            primaryKey: true,
        },
        subId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'sub_id',
            allowNull: true,
        },
        moduleId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'module_id',
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
        },
        deletedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'deleted_at',
            allowNull: true,
        }
    }, {
        sequelize,
        tableName: 'sub_modules',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: false,
        indexes: [
            { unique: true, fields: ['id'] }
        ]
    });
    return SubModulesEntity;
}

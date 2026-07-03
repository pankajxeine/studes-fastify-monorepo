"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentTypesEntity = void 0;
exports.initDocumentTypesEntity = initDocumentTypesEntity;
const sequelize_1 = require("sequelize");
class DocumentTypesEntity extends sequelize_1.Model {
}
exports.DocumentTypesEntity = DocumentTypesEntity;
function initDocumentTypesEntity(sequelize) {
    DocumentTypesEntity.init({
        id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'id',
            allowNull: true,
        },
        name: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'name',
            allowNull: true,
            defaultValue: null,
        },
        status: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'status',
            allowNull: true,
            defaultValue: null,
        },
        created_by: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'created_by',
            allowNull: true,
        },
        updated_by: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'updated_by',
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
        },
        deleted_at: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'deleted_at',
            allowNull: true,
            defaultValue: null,
        }
    }, {
        sequelize,
        tableName: 'document_types',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: true
    });
    return DocumentTypesEntity;
}

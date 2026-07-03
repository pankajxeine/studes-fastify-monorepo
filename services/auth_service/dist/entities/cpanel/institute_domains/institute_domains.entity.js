"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstituteDomainsEntity = void 0;
exports.initInstituteDomainsEntity = initInstituteDomainsEntity;
const sequelize_1 = require("sequelize");
class InstituteDomainsEntity extends sequelize_1.Model {
}
exports.InstituteDomainsEntity = InstituteDomainsEntity;
function initInstituteDomainsEntity(sequelize) {
    InstituteDomainsEntity.init({
        id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'id',
            allowNull: true,
            primaryKey: true,
        },
        instituteId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'institute_id',
            allowNull: true,
        },
        domain: {
            type: sequelize_1.DataTypes.STRING(100),
            field: 'domain',
            allowNull: true,
        },
        schemaName: {
            type: sequelize_1.DataTypes.STRING(100),
            field: 'schema_name',
            allowNull: true,
        },
        isPrimary: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_primary',
            allowNull: true,
            defaultValue: "Yes",
        },
        status: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'status',
            allowNull: true,
            defaultValue: "Active",
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
        tableName: 'institute_domains',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: false,
        indexes: [
            { unique: true, fields: ['id'] },
            { unique: true, fields: ['domain'] }
        ]
    });
    return InstituteDomainsEntity;
}

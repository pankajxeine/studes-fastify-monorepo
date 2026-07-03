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
        },
        institute_id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'institute_id',
            allowNull: true,
        },
        domain: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'domain',
            allowNull: true,
            defaultValue: null,
        },
        schema_name: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'schema_name',
            allowNull: true,
            defaultValue: null,
        },
        is_primary: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_primary',
            allowNull: true,
        },
        status: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'status',
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
        tableName: 'institute_domains',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: true
    });
    return InstituteDomainsEntity;
}

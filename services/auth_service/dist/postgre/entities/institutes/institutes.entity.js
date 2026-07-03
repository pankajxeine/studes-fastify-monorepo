"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstitutesEntity = void 0;
exports.initInstitutesEntity = initInstitutesEntity;
const sequelize_1 = require("sequelize");
class InstitutesEntity extends sequelize_1.Model {
}
exports.InstitutesEntity = InstitutesEntity;
function initInstitutesEntity(sequelize) {
    InstitutesEntity.init({
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
        schema_name: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'schema_name',
            allowNull: true,
            defaultValue: null,
        },
        institute_type: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'institute_type',
            allowNull: true,
            defaultValue: null,
        },
        registration_number: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'registration_number',
            allowNull: true,
            defaultValue: null,
        },
        principal_name: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'principal_name',
            allowNull: true,
            defaultValue: null,
        },
        email: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'email',
            allowNull: true,
            defaultValue: null,
        },
        phone: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'phone',
            allowNull: true,
            defaultValue: null,
        },
        address: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'address',
            allowNull: true,
            defaultValue: null,
        },
        city: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'city',
            allowNull: true,
            defaultValue: null,
        },
        state: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'state',
            allowNull: true,
            defaultValue: null,
        },
        postal_code: {
            type: sequelize_1.DataTypes.INTEGER,
            field: 'postal_code',
            allowNull: true,
        },
        country: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'country',
            allowNull: true,
            defaultValue: null,
        },
        description: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'description',
            allowNull: true,
            defaultValue: null,
        },
        settings: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'settings',
            allowNull: true,
            defaultValue: null,
        },
        status: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'status',
            allowNull: true,
            defaultValue: null,
        },
        activation_date: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'activation_date',
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
        tableName: 'institutes',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: true
    });
    return InstitutesEntity;
}

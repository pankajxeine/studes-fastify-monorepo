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
            primaryKey: true,
        },
        name: {
            type: sequelize_1.DataTypes.STRING(50),
            field: 'name',
            allowNull: true,
        },
        schemaName: {
            type: sequelize_1.DataTypes.STRING(23),
            field: 'schema_name',
            allowNull: true,
        },
        instituteType: {
            type: sequelize_1.DataTypes.STRING(15),
            field: 'institute_type',
            allowNull: true,
        },
        registrationNumber: {
            type: sequelize_1.DataTypes.STRING(12),
            field: 'registration_number',
            allowNull: true,
        },
        principalName: {
            type: sequelize_1.DataTypes.STRING(18),
            field: 'principal_name',
            allowNull: true,
        },
        email: {
            type: sequelize_1.DataTypes.STRING(50),
            field: 'email',
            allowNull: true,
        },
        phone: {
            type: sequelize_1.DataTypes.STRING(15),
            field: 'phone',
            allowNull: true,
        },
        address: {
            type: sequelize_1.DataTypes.STRING(50),
            field: 'address',
            allowNull: true,
        },
        city: {
            type: sequelize_1.DataTypes.STRING(50),
            field: 'city',
            allowNull: true,
        },
        state: {
            type: sequelize_1.DataTypes.STRING(50),
            field: 'state',
            allowNull: true,
        },
        postalCode: {
            type: sequelize_1.DataTypes.INTEGER,
            field: 'postal_code',
            allowNull: true,
        },
        country: {
            type: sequelize_1.DataTypes.STRING(50),
            field: 'country',
            allowNull: true,
        },
        description: {
            type: sequelize_1.DataTypes.STRING(200),
            field: 'description',
            allowNull: true,
        },
        settings: {
            type: sequelize_1.DataTypes.JSONB,
            field: 'settings',
            allowNull: true,
        },
        status: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'status',
            allowNull: true,
            defaultValue: "Active",
        },
        activationDate: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'activation_date',
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
        }
    }, {
        sequelize,
        tableName: 'institutes',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: false,
        indexes: [
            { unique: true, fields: ['id'] }
        ]
    });
    return InstitutesEntity;
}

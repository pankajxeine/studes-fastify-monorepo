"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CpanelCompaniesEntity = void 0;
exports.initCpanelCompaniesEntity = initCpanelCompaniesEntity;
const sequelize_1 = require("sequelize");
class CpanelCompaniesEntity extends sequelize_1.Model {
}
exports.CpanelCompaniesEntity = CpanelCompaniesEntity;
function initCpanelCompaniesEntity(sequelize) {
    CpanelCompaniesEntity.init({
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
        date_format_id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'date_format_id',
            allowNull: true,
        },
        timezone_id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'timezone_id',
            allowNull: true,
        },
        currency_id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'currency_id',
            allowNull: true,
        },
        address1: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'address1',
            allowNull: true,
            defaultValue: null,
        },
        address2: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'address2',
            allowNull: true,
            defaultValue: null,
        },
        city: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'city',
            allowNull: true,
            defaultValue: null,
        },
        state_id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'state_id',
            allowNull: true,
        },
        country_id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'country_id',
            allowNull: true,
        },
        postal_code: {
            type: sequelize_1.DataTypes.INTEGER,
            field: 'postal_code',
            allowNull: true,
        },
        phone: {
            type: sequelize_1.DataTypes.BIGINT,
            field: 'phone',
            allowNull: true,
        },
        fax: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'fax',
            allowNull: true,
            defaultValue: null,
        },
        email: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'email',
            allowNull: true,
            defaultValue: null,
        },
        website: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'website',
            allowNull: true,
            defaultValue: null,
        },
        title_tag: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'title_tag',
            allowNull: true,
            defaultValue: null,
        },
        status: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'status',
            allowNull: true,
            defaultValue: null,
        },
        theme_json: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'theme_json',
            allowNull: true,
            defaultValue: null,
        },
        application: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'application',
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
        },
        logo: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'logo',
            allowNull: true,
            defaultValue: null,
        },
        favicon_icon: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'favicon_icon',
            allowNull: true,
            defaultValue: null,
        },
        loading_icon: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'loading_icon',
            allowNull: true,
            defaultValue: null,
        },
        bundle_name: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'bundle_name',
            allowNull: true,
            defaultValue: null,
        }
    }, {
        sequelize,
        tableName: 'cpanel_companies',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: true
    });
    return CpanelCompaniesEntity;
}

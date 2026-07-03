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
            primaryKey: true,
        },
        name: {
            type: sequelize_1.DataTypes.STRING(50),
            field: 'name',
            allowNull: true,
        },
        dateFormatId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'date_format_id',
            allowNull: true,
        },
        timezoneId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'timezone_id',
            allowNull: true,
        },
        currencyId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'currency_id',
            allowNull: true,
        },
        address1: {
            type: sequelize_1.DataTypes.STRING(50),
            field: 'address1',
            allowNull: true,
        },
        address2: {
            type: sequelize_1.DataTypes.STRING(50),
            field: 'address2',
            allowNull: true,
        },
        city: {
            type: sequelize_1.DataTypes.STRING(30),
            field: 'city',
            allowNull: true,
        },
        stateId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'state_id',
            allowNull: true,
        },
        countryId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'country_id',
            allowNull: true,
        },
        postalCode: {
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
            type: sequelize_1.DataTypes.STRING(20),
            field: 'fax',
            allowNull: true,
        },
        email: {
            type: sequelize_1.DataTypes.STRING(50),
            field: 'email',
            allowNull: true,
        },
        website: {
            type: sequelize_1.DataTypes.STRING(30),
            field: 'website',
            allowNull: true,
        },
        titleTag: {
            type: sequelize_1.DataTypes.STRING(50),
            field: 'title_tag',
            allowNull: true,
        },
        status: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'status',
            allowNull: true,
            defaultValue: "Active",
        },
        themeJson: {
            type: sequelize_1.DataTypes.JSONB,
            field: 'theme_json',
            allowNull: true,
        },
        application: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'application',
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
        logo: {
            type: sequelize_1.DataTypes.STRING(255),
            field: 'logo',
            allowNull: true,
        },
        faviconIcon: {
            type: sequelize_1.DataTypes.STRING(255),
            field: 'favicon_icon',
            allowNull: true,
        },
        loadingIcon: {
            type: sequelize_1.DataTypes.STRING(255),
            field: 'loading_icon',
            allowNull: true,
        },
        bundleName: {
            type: sequelize_1.DataTypes.STRING(30),
            field: 'bundle_name',
            allowNull: true,
        }
    }, {
        sequelize,
        tableName: 'cpanel_companies',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: false
    });
    return CpanelCompaniesEntity;
}

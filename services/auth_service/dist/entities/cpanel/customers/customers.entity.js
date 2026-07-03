"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersEntity = void 0;
exports.initCustomersEntity = initCustomersEntity;
const sequelize_1 = require("sequelize");
class CustomersEntity extends sequelize_1.Model {
}
exports.CustomersEntity = CustomersEntity;
function initCustomersEntity(sequelize) {
    CustomersEntity.init({
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
        contactTitle: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'contact_title',
            allowNull: true,
        },
        customerType: {
            type: sequelize_1.DataTypes.STRING(10),
            field: 'customer_type',
            allowNull: true,
        },
        contactName: {
            type: sequelize_1.DataTypes.STRING(50),
            field: 'contact_name',
            allowNull: true,
        },
        customerStatusId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'customer_status_id',
            allowNull: true,
        },
        createdBy: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'created_by',
            allowNull: true,
        },
        updatedBy: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'updated_by',
            allowNull: true,
        },
        customerNumber: {
            type: sequelize_1.DataTypes.STRING(10),
            field: 'customer_number',
            allowNull: true,
        },
        type: {
            type: sequelize_1.DataTypes.STRING(10),
            field: 'type',
            allowNull: true,
        },
        customerEmail: {
            type: sequelize_1.DataTypes.STRING(150),
            field: 'customer_email',
            allowNull: true,
        },
        clientEmail: {
            type: sequelize_1.DataTypes.STRING(150),
            field: 'client_email',
            allowNull: true,
        },
        dba: {
            type: sequelize_1.DataTypes.STRING(50),
            field: 'dba',
            allowNull: true,
        },
        contractStartDate: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'contract_start_date',
            allowNull: true,
        },
        contractExpireDate: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'contract_expire_date',
            allowNull: true,
        },
        costCenter: {
            type: sequelize_1.DataTypes.STRING(30),
            field: 'cost_center',
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
        phoneNumber: {
            type: sequelize_1.DataTypes.BIGINT,
            field: 'phone_number',
            allowNull: true,
        },
        streetAddress: {
            type: sequelize_1.DataTypes.STRING(22),
            field: 'street_address',
            allowNull: true,
        },
        chainNumber: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'chain_number',
            allowNull: true,
        },
        sicCode: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'sic_code',
            allowNull: true,
        },
        branchId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'branch_id',
            allowNull: true,
        },
        status: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'status',
            allowNull: true,
            defaultValue: "Active",
        },
        hoursElapsed: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'hours_elapsed',
            allowNull: true,
            defaultValue: 0,
        },
        minutesElapsed: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'minutes_elapsed',
            allowNull: true,
            defaultValue: 0,
        },
        isNewClient: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_new_client',
            allowNull: true,
            defaultValue: "No",
        },
        allowPackageUpgrade: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'allow_package_upgrade',
            allowNull: true,
            defaultValue: "No",
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
        tableName: 'customers',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: false,
        indexes: [
            { unique: true, fields: ['id'] }
        ]
    });
    return CustomersEntity;
}

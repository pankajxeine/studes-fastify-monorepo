"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PplPersonAddressEntity = void 0;
exports.initPplPersonAddressEntity = initPplPersonAddressEntity;
const sequelize_1 = require("sequelize");
class PplPersonAddressEntity extends sequelize_1.Model {
}
exports.PplPersonAddressEntity = PplPersonAddressEntity;
function initPplPersonAddressEntity(sequelize) {
    PplPersonAddressEntity.init({
        id: {
            type: sequelize_1.DataTypes.BIGINT,
            field: 'id',
            allowNull: true,
            primaryKey: true,
            autoIncrement: true,
        },
        publicId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'public_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        recordCode: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'record_code',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('ppl_person_address')"),
        },
        personAddressId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'person_address_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        personId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'person_id',
            allowNull: false,
            references: { model: 'ppl_person', key: 'person_id' },
            onDelete: 'CASCADE',
        },
        addressType: {
            type: sequelize_1.DataTypes.STRING(12),
            field: 'address_type',
            allowNull: false,
            defaultValue: "home",
        },
        addressLine1: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'address_line1',
            allowNull: false,
        },
        addressLine2: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'address_line2',
            allowNull: true,
        },
        city: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'city',
            allowNull: false,
        },
        stateRegion: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'state_region',
            allowNull: true,
        },
        postalCode: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'postal_code',
            allowNull: true,
        },
        countryCode: {
            type: sequelize_1.DataTypes.CHAR(2),
            field: 'country_code',
            allowNull: false,
        },
        isPrimary: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_primary',
            allowNull: false,
            defaultValue: false,
        },
        validFrom: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'valid_from',
            allowNull: true,
        },
        validTo: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'valid_to',
            allowNull: true,
        },
        createdAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'created_at',
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        createdBy: {
            type: sequelize_1.DataTypes.UUID,
            field: 'created_by',
            allowNull: true,
        },
        updatedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'updated_at',
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        updatedBy: {
            type: sequelize_1.DataTypes.UUID,
            field: 'updated_by',
            allowNull: true,
        }
    }, {
        sequelize,
        tableName: 'ppl_person_address',
        timestamps: true,
        underscored: true,
        freezeTableName: true
    });
    return PplPersonAddressEntity;
}

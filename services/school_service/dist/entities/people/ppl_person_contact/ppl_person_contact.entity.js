"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PplPersonContactEntity = void 0;
exports.initPplPersonContactEntity = initPplPersonContactEntity;
const sequelize_1 = require("sequelize");
class PplPersonContactEntity extends sequelize_1.Model {
}
exports.PplPersonContactEntity = PplPersonContactEntity;
function initPplPersonContactEntity(sequelize) {
    PplPersonContactEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('ppl_person_contact')"),
        },
        personContactId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'person_contact_id',
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
        contactType: {
            type: sequelize_1.DataTypes.STRING(12),
            field: 'contact_type',
            allowNull: false,
        },
        contactValue: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'contact_value',
            allowNull: false,
        },
        isPrimary: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_primary',
            allowNull: false,
            defaultValue: false,
        },
        isVerified: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_verified',
            allowNull: false,
            defaultValue: false,
        },
        verifiedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'verified_at',
            allowNull: true,
        },
        isOptedIn: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_opted_in',
            allowNull: false,
            defaultValue: true,
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
        tableName: 'ppl_person_contact',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['person_id', 'contact_type', 'contact_value'] }
        ]
    });
    return PplPersonContactEntity;
}

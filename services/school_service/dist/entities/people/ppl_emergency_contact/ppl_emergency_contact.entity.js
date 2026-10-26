"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PplEmergencyContactEntity = void 0;
exports.initPplEmergencyContactEntity = initPplEmergencyContactEntity;
const sequelize_1 = require("sequelize");
class PplEmergencyContactEntity extends sequelize_1.Model {
}
exports.PplEmergencyContactEntity = PplEmergencyContactEntity;
function initPplEmergencyContactEntity(sequelize) {
    PplEmergencyContactEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('ppl_emergency_contact')"),
        },
        emergencyContactId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'emergency_contact_id',
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
        contactPersonId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'contact_person_id',
            allowNull: true,
            references: { model: 'ppl_person', key: 'person_id' },
        },
        contactName: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'contact_name',
            allowNull: true,
        },
        relationshipTypeCode: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'relationship_type_code',
            allowNull: false,
            references: { model: 'ppl_relationship_type', key: 'relationship_type_code' },
            onUpdate: 'CASCADE',
        },
        phone: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'phone',
            allowNull: false,
        },
        altPhone: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'alt_phone',
            allowNull: true,
        },
        email: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'email',
            allowNull: true,
        },
        priority: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'priority',
            allowNull: false,
            defaultValue: 1,
        },
        notes: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'notes',
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
        tableName: 'ppl_emergency_contact',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['person_id', 'priority'] }
        ]
    });
    return PplEmergencyContactEntity;
}

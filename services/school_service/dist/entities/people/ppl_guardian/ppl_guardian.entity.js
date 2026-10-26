"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PplGuardianEntity = void 0;
exports.initPplGuardianEntity = initPplGuardianEntity;
const sequelize_1 = require("sequelize");
class PplGuardianEntity extends sequelize_1.Model {
}
exports.PplGuardianEntity = PplGuardianEntity;
function initPplGuardianEntity(sequelize) {
    PplGuardianEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('ppl_guardian')"),
        },
        guardianId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'guardian_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        personId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'person_id',
            allowNull: false,
            references: { model: 'ppl_person', key: 'person_id' },
        },
        occupation: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'occupation',
            allowNull: true,
        },
        employer: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'employer',
            allowNull: true,
        },
        educationLevel: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'education_level',
            allowNull: true,
        },
        annualIncomeBand: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'annual_income_band',
            allowNull: true,
        },
        workPhone: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'work_phone',
            allowNull: true,
        },
        workEmail: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'work_email',
            allowNull: true,
        },
        preferredContactChannel: {
            type: sequelize_1.DataTypes.STRING(10),
            field: 'preferred_contact_channel',
            allowNull: false,
            defaultValue: "email",
        },
        preferredLanguage: {
            type: sequelize_1.DataTypes.STRING(40),
            field: 'preferred_language',
            allowNull: true,
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
        },
        deletedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'deleted_at',
            allowNull: true,
        }
    }, {
        sequelize,
        tableName: 'ppl_guardian',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: true,
        deletedAt: 'deletedAt',
        indexes: [
            { unique: true, fields: ['person_id'] }
        ]
    });
    return PplGuardianEntity;
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CntnPersonAllergenEntity = void 0;
exports.initCntnPersonAllergenEntity = initCntnPersonAllergenEntity;
const sequelize_1 = require("sequelize");
class CntnPersonAllergenEntity extends sequelize_1.Model {
}
exports.CntnPersonAllergenEntity = CntnPersonAllergenEntity;
function initCntnPersonAllergenEntity(sequelize) {
    CntnPersonAllergenEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('cntn_person_allergen')"),
        },
        personAllergenId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'person_allergen_id',
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
        allergenCode: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'allergen_code',
            allowNull: false,
            references: { model: 'cntn_allergen', key: 'allergen_code' },
            onUpdate: 'CASCADE',
        },
        medicalProfileId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'medical_profile_id',
            allowNull: true,
            references: { model: 'health_medical_profile', key: 'medical_profile_id' },
        },
        severity: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'severity',
            allowNull: false,
        },
        reaction: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'reaction',
            allowNull: true,
        },
        actionPlan: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'action_plan',
            allowNull: true,
        },
        isActive: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_active',
            allowNull: false,
            defaultValue: true,
        },
        verifiedOn: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'verified_on',
            allowNull: true,
        },
        verifiedByStaffId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'verified_by_staff_id',
            allowNull: true,
            references: { model: 'hr_staff', key: 'staff_id' },
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
        tableName: 'cntn_person_allergen',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['person_id', 'allergen_code'] }
        ]
    });
    return CntnPersonAllergenEntity;
}

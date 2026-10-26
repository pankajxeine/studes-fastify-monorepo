"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdmisApplicationGuardianEntity = void 0;
exports.initAdmisApplicationGuardianEntity = initAdmisApplicationGuardianEntity;
const sequelize_1 = require("sequelize");
class AdmisApplicationGuardianEntity extends sequelize_1.Model {
}
exports.AdmisApplicationGuardianEntity = AdmisApplicationGuardianEntity;
function initAdmisApplicationGuardianEntity(sequelize) {
    AdmisApplicationGuardianEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('admis_application_guardian')"),
        },
        applicationGuardianId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'application_guardian_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        applicationId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'application_id',
            allowNull: false,
            references: { model: 'admis_application', key: 'application_id' },
            onDelete: 'CASCADE',
        },
        guardianId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'guardian_id',
            allowNull: false,
            references: { model: 'ppl_guardian', key: 'guardian_id' },
        },
        relationshipTypeCode: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'relationship_type_code',
            allowNull: false,
            references: { model: 'ppl_relationship_type', key: 'relationship_type_code' },
            onUpdate: 'CASCADE',
        },
        isPrimaryContact: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_primary_contact',
            allowNull: false,
            defaultValue: false,
        },
        livesWithApplicant: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'lives_with_applicant',
            allowNull: false,
            defaultValue: true,
        },
        isFeePayer: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_fee_payer',
            allowNull: false,
            defaultValue: false,
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
        tableName: 'admis_application_guardian',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['application_id', 'guardian_id'] }
        ]
    });
    return AdmisApplicationGuardianEntity;
}

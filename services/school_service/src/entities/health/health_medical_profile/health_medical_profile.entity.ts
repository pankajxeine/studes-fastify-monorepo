import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type HealthMedicalProfileAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  medicalProfileId?: string
  personId: string
  bloodGroup?: string | null
  heightCm?: number | null
  weightKg?: number | null
  allergies?: string | null
  hasSevereAllergy?: string
  chronicConditions?: string | null
  medications?: string | null
  dietaryRestrictions?: string | null
  disabilityNotes?: string | null
  emergencyCarePlan?: string | null
  primaryPhysician?: string | null
  physicianPhone?: string | null
  insuranceProvider?: string | null
  insurancePolicyNo?: string | null
  lastReviewedOn?: Date | null
  reviewedByStaffId?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type HealthMedicalProfileCreationAttributes = Optional<HealthMedicalProfileAttributes, "id" | "publicId" | "recordCode" | "medicalProfileId" | "bloodGroup" | "heightCm" | "weightKg" | "allergies" | "hasSevereAllergy" | "chronicConditions" | "medications" | "dietaryRestrictions" | "disabilityNotes" | "emergencyCarePlan" | "primaryPhysician" | "physicianPhone" | "insuranceProvider" | "insurancePolicyNo" | "lastReviewedOn" | "reviewedByStaffId" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class HealthMedicalProfileEntity
  extends Model<HealthMedicalProfileAttributes, HealthMedicalProfileCreationAttributes>
  implements HealthMedicalProfileAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare medicalProfileId: string
  declare personId: string
  declare bloodGroup: string | null
  declare heightCm: number | null
  declare weightKg: number | null
  declare allergies: string | null
  declare hasSevereAllergy: string
  declare chronicConditions: string | null
  declare medications: string | null
  declare dietaryRestrictions: string | null
  declare disabilityNotes: string | null
  declare emergencyCarePlan: string | null
  declare primaryPhysician: string | null
  declare physicianPhone: string | null
  declare insuranceProvider: string | null
  declare insurancePolicyNo: string | null
  declare lastReviewedOn: Date | null
  declare reviewedByStaffId: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initHealthMedicalProfileEntity(sequelize: Sequelize): typeof HealthMedicalProfileEntity {
  HealthMedicalProfileEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
      },
      publicId: {
        type: DataTypes.TEXT,
        field: 'public_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('health_medical_profile')"),
      },
      medicalProfileId: {
        type: DataTypes.TEXT,
        field: 'medical_profile_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      personId: {
        type: DataTypes.TEXT,
        field: 'person_id',
        allowNull: false,
        references: { model: 'ppl_person', key: 'person_id' },
      },
      bloodGroup: {
        type: DataTypes.STRING(7),
        field: 'blood_group',
        allowNull: true,
      },
      heightCm: {
        type: DataTypes.DECIMAL(5, 1),
        field: 'height_cm',
        allowNull: true,
      },
      weightKg: {
        type: DataTypes.DECIMAL(5, 1),
        field: 'weight_kg',
        allowNull: true,
      },
      allergies: {
        type: DataTypes.TEXT,
        field: 'allergies',
        allowNull: true,
      },
      hasSevereAllergy: {
        type: DataTypes.TEXT,
        field: 'has_severe_allergy',
        allowNull: false,
        defaultValue: false,
      },
      chronicConditions: {
        type: DataTypes.TEXT,
        field: 'chronic_conditions',
        allowNull: true,
      },
      medications: {
        type: DataTypes.TEXT,
        field: 'medications',
        allowNull: true,
      },
      dietaryRestrictions: {
        type: DataTypes.TEXT,
        field: 'dietary_restrictions',
        allowNull: true,
      },
      disabilityNotes: {
        type: DataTypes.TEXT,
        field: 'disability_notes',
        allowNull: true,
      },
      emergencyCarePlan: {
        type: DataTypes.TEXT,
        field: 'emergency_care_plan',
        allowNull: true,
      },
      primaryPhysician: {
        type: DataTypes.TEXT,
        field: 'primary_physician',
        allowNull: true,
      },
      physicianPhone: {
        type: DataTypes.TEXT,
        field: 'physician_phone',
        allowNull: true,
      },
      insuranceProvider: {
        type: DataTypes.TEXT,
        field: 'insurance_provider',
        allowNull: true,
      },
      insurancePolicyNo: {
        type: DataTypes.STRING(60),
        field: 'insurance_policy_no',
        allowNull: true,
      },
      lastReviewedOn: {
        type: DataTypes.DATEONLY,
        field: 'last_reviewed_on',
        allowNull: true,
      },
      reviewedByStaffId: {
        type: DataTypes.TEXT,
        field: 'reviewed_by_staff_id',
        allowNull: true,
        references: { model: 'hr_staff', key: 'staff_id' },
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      createdBy: {
        type: DataTypes.UUID,
        field: 'created_by',
        allowNull: true,
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updatedBy: {
        type: DataTypes.UUID,
        field: 'updated_by',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'health_medical_profile',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['person_id'] }
      ]
    }
  )
  return HealthMedicalProfileEntity
}

import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type SisStudentGuardianAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  studentGuardianId?: string
  studentId: string
  guardianId: string
  relationshipTypeCode: string
  isPrimary?: string
  canPickup?: string
  receivesCommunications?: string
  livesWithStudent?: string
  hasLegalCustody?: string
  isFeePayer?: string
  isEmergencyContact?: string
  contactPriority?: number
  validFrom?: string
  validTo?: Date | null
  notes?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type SisStudentGuardianCreationAttributes = Optional<SisStudentGuardianAttributes, "id" | "publicId" | "recordCode" | "studentGuardianId" | "isPrimary" | "canPickup" | "receivesCommunications" | "livesWithStudent" | "hasLegalCustody" | "isFeePayer" | "isEmergencyContact" | "contactPriority" | "validFrom" | "validTo" | "notes" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class SisStudentGuardianEntity
  extends Model<SisStudentGuardianAttributes, SisStudentGuardianCreationAttributes>
  implements SisStudentGuardianAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare studentGuardianId: string
  declare studentId: string
  declare guardianId: string
  declare relationshipTypeCode: string
  declare isPrimary: string
  declare canPickup: string
  declare receivesCommunications: string
  declare livesWithStudent: string
  declare hasLegalCustody: string
  declare isFeePayer: string
  declare isEmergencyContact: string
  declare contactPriority: number
  declare validFrom: string
  declare validTo: Date | null
  declare notes: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initSisStudentGuardianEntity(sequelize: Sequelize): typeof SisStudentGuardianEntity {
  SisStudentGuardianEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('sis_student_guardian')"),
      },
      studentGuardianId: {
        type: DataTypes.TEXT,
        field: 'student_guardian_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      studentId: {
        type: DataTypes.TEXT,
        field: 'student_id',
        allowNull: false,
        references: { model: 'sis_student', key: 'student_id' },
        onDelete: 'CASCADE',
      },
      guardianId: {
        type: DataTypes.TEXT,
        field: 'guardian_id',
        allowNull: false,
        references: { model: 'ppl_guardian', key: 'guardian_id' },
      },
      relationshipTypeCode: {
        type: DataTypes.TEXT,
        field: 'relationship_type_code',
        allowNull: false,
        references: { model: 'ppl_relationship_type', key: 'relationship_type_code' },
        onUpdate: 'CASCADE',
      },
      isPrimary: {
        type: DataTypes.TEXT,
        field: 'is_primary',
        allowNull: false,
        defaultValue: false,
      },
      canPickup: {
        type: DataTypes.TEXT,
        field: 'can_pickup',
        allowNull: false,
        defaultValue: true,
      },
      receivesCommunications: {
        type: DataTypes.TEXT,
        field: 'receives_communications',
        allowNull: false,
        defaultValue: true,
      },
      livesWithStudent: {
        type: DataTypes.TEXT,
        field: 'lives_with_student',
        allowNull: false,
        defaultValue: true,
      },
      hasLegalCustody: {
        type: DataTypes.TEXT,
        field: 'has_legal_custody',
        allowNull: false,
        defaultValue: true,
      },
      isFeePayer: {
        type: DataTypes.TEXT,
        field: 'is_fee_payer',
        allowNull: false,
        defaultValue: false,
      },
      isEmergencyContact: {
        type: DataTypes.TEXT,
        field: 'is_emergency_contact',
        allowNull: false,
        defaultValue: true,
      },
      contactPriority: {
        type: DataTypes.SMALLINT,
        field: 'contact_priority',
        allowNull: false,
        defaultValue: 1,
      },
      validFrom: {
        type: DataTypes.TEXT,
        field: 'valid_from',
        allowNull: false,
        defaultValue: Sequelize.literal("current_date"),
      },
      validTo: {
        type: DataTypes.DATEONLY,
        field: 'valid_to',
        allowNull: true,
      },
      notes: {
        type: DataTypes.TEXT,
        field: 'notes',
        allowNull: true,
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
      tableName: 'sis_student_guardian',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['student_id', 'guardian_id'] }
      ]
    }
  )
  return SisStudentGuardianEntity
}

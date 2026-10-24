import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type AdmisApplicationGuardianAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  applicationGuardianId?: string
  applicationId: string
  guardianId: string
  relationshipTypeCode: string
  isPrimaryContact?: string
  livesWithApplicant?: string
  isFeePayer?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type AdmisApplicationGuardianCreationAttributes = Optional<AdmisApplicationGuardianAttributes, "id" | "publicId" | "recordCode" | "applicationGuardianId" | "isPrimaryContact" | "livesWithApplicant" | "isFeePayer" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class AdmisApplicationGuardianEntity
  extends Model<AdmisApplicationGuardianAttributes, AdmisApplicationGuardianCreationAttributes>
  implements AdmisApplicationGuardianAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare applicationGuardianId: string
  declare applicationId: string
  declare guardianId: string
  declare relationshipTypeCode: string
  declare isPrimaryContact: string
  declare livesWithApplicant: string
  declare isFeePayer: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initAdmisApplicationGuardianEntity(sequelize: Sequelize): typeof AdmisApplicationGuardianEntity {
  AdmisApplicationGuardianEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('admis_application_guardian')"),
      },
      applicationGuardianId: {
        type: DataTypes.TEXT,
        field: 'application_guardian_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      applicationId: {
        type: DataTypes.TEXT,
        field: 'application_id',
        allowNull: false,
        references: { model: 'admis_application', key: 'application_id' },
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
      isPrimaryContact: {
        type: DataTypes.TEXT,
        field: 'is_primary_contact',
        allowNull: false,
        defaultValue: false,
      },
      livesWithApplicant: {
        type: DataTypes.TEXT,
        field: 'lives_with_applicant',
        allowNull: false,
        defaultValue: true,
      },
      isFeePayer: {
        type: DataTypes.TEXT,
        field: 'is_fee_payer',
        allowNull: false,
        defaultValue: false,
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
      tableName: 'admis_application_guardian',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['application_id', 'guardian_id'] }
      ]
    }
  )
  return AdmisApplicationGuardianEntity
}

import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PplGuardianAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  guardianId?: string
  personId: string
  occupation?: string | null
  employer?: string | null
  educationLevel?: string | null
  annualIncomeBand?: string | null
  workPhone?: string | null
  workEmail?: string | null
  preferredContactChannel?: string
  preferredLanguage?: string | null
  notes?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
  deletedAt?: Date | null
}

export type PplGuardianCreationAttributes = Optional<PplGuardianAttributes, "id" | "publicId" | "recordCode" | "guardianId" | "occupation" | "employer" | "educationLevel" | "annualIncomeBand" | "workPhone" | "workEmail" | "preferredContactChannel" | "preferredLanguage" | "notes" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy" | "deletedAt">

export class PplGuardianEntity
  extends Model<PplGuardianAttributes, PplGuardianCreationAttributes>
  implements PplGuardianAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare guardianId: string
  declare personId: string
  declare occupation: string | null
  declare employer: string | null
  declare educationLevel: string | null
  declare annualIncomeBand: string | null
  declare workPhone: string | null
  declare workEmail: string | null
  declare preferredContactChannel: string
  declare preferredLanguage: string | null
  declare notes: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
  declare deletedAt: Date | null
}

export function initPplGuardianEntity(sequelize: Sequelize): typeof PplGuardianEntity {
  PplGuardianEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('ppl_guardian')"),
      },
      guardianId: {
        type: DataTypes.TEXT,
        field: 'guardian_id',
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
      occupation: {
        type: DataTypes.TEXT,
        field: 'occupation',
        allowNull: true,
      },
      employer: {
        type: DataTypes.TEXT,
        field: 'employer',
        allowNull: true,
      },
      educationLevel: {
        type: DataTypes.STRING(20),
        field: 'education_level',
        allowNull: true,
      },
      annualIncomeBand: {
        type: DataTypes.STRING(20),
        field: 'annual_income_band',
        allowNull: true,
      },
      workPhone: {
        type: DataTypes.TEXT,
        field: 'work_phone',
        allowNull: true,
      },
      workEmail: {
        type: DataTypes.TEXT,
        field: 'work_email',
        allowNull: true,
      },
      preferredContactChannel: {
        type: DataTypes.STRING(10),
        field: 'preferred_contact_channel',
        allowNull: false,
        defaultValue: "email",
      },
      preferredLanguage: {
        type: DataTypes.STRING(40),
        field: 'preferred_language',
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
      },
      deletedAt: {
        type: DataTypes.DATE,
        field: 'deleted_at',
        allowNull: true,
      }
    },
    {
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
    }
  )
  return PplGuardianEntity
}

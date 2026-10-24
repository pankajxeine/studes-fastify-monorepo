import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type AlumniAlumniEmploymentAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  alumniEmploymentId?: string
  alumnusId: string
  employerName: string
  jobTitle: string
  employmentType?: string
  industry?: string | null
  city?: string | null
  countryCode?: string | null
  startDate: string
  endDate?: Date | null
  isPrimary?: string
  isCurrent?: string | null
  description?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type AlumniAlumniEmploymentCreationAttributes = Optional<AlumniAlumniEmploymentAttributes, "id" | "publicId" | "recordCode" | "alumniEmploymentId" | "employmentType" | "industry" | "city" | "countryCode" | "endDate" | "isPrimary" | "isCurrent" | "description" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class AlumniAlumniEmploymentEntity
  extends Model<AlumniAlumniEmploymentAttributes, AlumniAlumniEmploymentCreationAttributes>
  implements AlumniAlumniEmploymentAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare alumniEmploymentId: string
  declare alumnusId: string
  declare employerName: string
  declare jobTitle: string
  declare employmentType: string
  declare industry: string | null
  declare city: string | null
  declare countryCode: string | null
  declare startDate: string
  declare endDate: Date | null
  declare isPrimary: string
  declare isCurrent: string | null
  declare description: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initAlumniAlumniEmploymentEntity(sequelize: Sequelize): typeof AlumniAlumniEmploymentEntity {
  AlumniAlumniEmploymentEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('alumni_alumni_employment')"),
      },
      alumniEmploymentId: {
        type: DataTypes.TEXT,
        field: 'alumni_employment_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      alumnusId: {
        type: DataTypes.TEXT,
        field: 'alumnus_id',
        allowNull: false,
        references: { model: 'alumni_alumnus', key: 'alumnus_id' },
        onDelete: 'CASCADE',
      },
      employerName: {
        type: DataTypes.TEXT,
        field: 'employer_name',
        allowNull: false,
      },
      jobTitle: {
        type: DataTypes.TEXT,
        field: 'job_title',
        allowNull: false,
      },
      employmentType: {
        type: DataTypes.STRING(20),
        field: 'employment_type',
        allowNull: false,
        defaultValue: "full_time",
      },
      industry: {
        type: DataTypes.TEXT,
        field: 'industry',
        allowNull: true,
      },
      city: {
        type: DataTypes.TEXT,
        field: 'city',
        allowNull: true,
      },
      countryCode: {
        type: DataTypes.CHAR(2),
        field: 'country_code',
        allowNull: true,
      },
      startDate: {
        type: DataTypes.TEXT,
        field: 'start_date',
        allowNull: false,
      },
      endDate: {
        type: DataTypes.DATEONLY,
        field: 'end_date',
        allowNull: true,
      },
      isPrimary: {
        type: DataTypes.TEXT,
        field: 'is_primary',
        allowNull: false,
        defaultValue: true,
      },
      isCurrent: {
        type: DataTypes.TEXT,
        field: 'is_current',
        allowNull: true,
        autoIncrement: true,
      },
      description: {
        type: DataTypes.TEXT,
        field: 'description',
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
      tableName: 'alumni_alumni_employment',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return AlumniAlumniEmploymentEntity
}

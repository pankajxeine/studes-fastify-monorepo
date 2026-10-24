import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type HrStaffExperienceAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  staffExperienceId?: string
  staffId: string
  employerName: string
  jobTitle: string
  location?: string | null
  startDate: string
  endDate?: Date | null
  responsibilities?: string | null
  reasonForLeaving?: string | null
  isVerified?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type HrStaffExperienceCreationAttributes = Optional<HrStaffExperienceAttributes, "id" | "publicId" | "recordCode" | "staffExperienceId" | "location" | "endDate" | "responsibilities" | "reasonForLeaving" | "isVerified" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class HrStaffExperienceEntity
  extends Model<HrStaffExperienceAttributes, HrStaffExperienceCreationAttributes>
  implements HrStaffExperienceAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare staffExperienceId: string
  declare staffId: string
  declare employerName: string
  declare jobTitle: string
  declare location: string | null
  declare startDate: string
  declare endDate: Date | null
  declare responsibilities: string | null
  declare reasonForLeaving: string | null
  declare isVerified: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initHrStaffExperienceEntity(sequelize: Sequelize): typeof HrStaffExperienceEntity {
  HrStaffExperienceEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('hr_staff_experience')"),
      },
      staffExperienceId: {
        type: DataTypes.TEXT,
        field: 'staff_experience_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      staffId: {
        type: DataTypes.TEXT,
        field: 'staff_id',
        allowNull: false,
        references: { model: 'hr_staff', key: 'staff_id' },
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
      location: {
        type: DataTypes.TEXT,
        field: 'location',
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
      responsibilities: {
        type: DataTypes.TEXT,
        field: 'responsibilities',
        allowNull: true,
      },
      reasonForLeaving: {
        type: DataTypes.TEXT,
        field: 'reason_for_leaving',
        allowNull: true,
      },
      isVerified: {
        type: DataTypes.TEXT,
        field: 'is_verified',
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
      tableName: 'hr_staff_experience',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['staff_id', 'employer_name', 'start_date'] }
      ]
    }
  )
  return HrStaffExperienceEntity
}

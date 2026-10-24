import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PrtnPlacementApplicationAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  placementApplicationId?: string
  placementDriveId: string
  studentId: string
  academicYearId: string
  status?: string
  appliedAt?: Date
  cgpaAtApplication?: number | null
  coverNote?: string | null
  shortlistedAt?: Date | null
  decidedAt?: Date | null
  rejectionReason?: string | null
  withdrawnAt?: Date | null
  withdrawalReason?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type PrtnPlacementApplicationCreationAttributes = Optional<PrtnPlacementApplicationAttributes, "id" | "publicId" | "recordCode" | "placementApplicationId" | "status" | "appliedAt" | "cgpaAtApplication" | "coverNote" | "shortlistedAt" | "decidedAt" | "rejectionReason" | "withdrawnAt" | "withdrawalReason" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class PrtnPlacementApplicationEntity
  extends Model<PrtnPlacementApplicationAttributes, PrtnPlacementApplicationCreationAttributes>
  implements PrtnPlacementApplicationAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare placementApplicationId: string
  declare placementDriveId: string
  declare studentId: string
  declare academicYearId: string
  declare status: string
  declare appliedAt: Date
  declare cgpaAtApplication: number | null
  declare coverNote: string | null
  declare shortlistedAt: Date | null
  declare decidedAt: Date | null
  declare rejectionReason: string | null
  declare withdrawnAt: Date | null
  declare withdrawalReason: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initPrtnPlacementApplicationEntity(sequelize: Sequelize): typeof PrtnPlacementApplicationEntity {
  PrtnPlacementApplicationEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('prtn_placement_application')"),
      },
      placementApplicationId: {
        type: DataTypes.TEXT,
        field: 'placement_application_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      placementDriveId: {
        type: DataTypes.TEXT,
        field: 'placement_drive_id',
        allowNull: false,
        references: { model: 'prtn_placement_drive', key: 'placement_drive_id' },
      },
      studentId: {
        type: DataTypes.TEXT,
        field: 'student_id',
        allowNull: false,
        references: { model: 'sis_student', key: 'student_id' },
      },
      academicYearId: {
        type: DataTypes.TEXT,
        field: 'academic_year_id',
        allowNull: false,
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "applied",
      },
      appliedAt: {
        type: DataTypes.DATE,
        field: 'applied_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      cgpaAtApplication: {
        type: DataTypes.DECIMAL(3, 2),
        field: 'cgpa_at_application',
        allowNull: true,
      },
      coverNote: {
        type: DataTypes.TEXT,
        field: 'cover_note',
        allowNull: true,
      },
      shortlistedAt: {
        type: DataTypes.DATE,
        field: 'shortlisted_at',
        allowNull: true,
      },
      decidedAt: {
        type: DataTypes.DATE,
        field: 'decided_at',
        allowNull: true,
      },
      rejectionReason: {
        type: DataTypes.TEXT,
        field: 'rejection_reason',
        allowNull: true,
      },
      withdrawnAt: {
        type: DataTypes.DATE,
        field: 'withdrawn_at',
        allowNull: true,
      },
      withdrawalReason: {
        type: DataTypes.TEXT,
        field: 'withdrawal_reason',
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
      tableName: 'prtn_placement_application',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['placement_drive_id', 'student_id'] },
      { unique: true, fields: ['placement_application_id', 'placement_drive_id'] },
      { unique: true, fields: ['placement_application_id', 'student_id', 'academic_year_id'] }
      ]
    }
  )
  return PrtnPlacementApplicationEntity
}

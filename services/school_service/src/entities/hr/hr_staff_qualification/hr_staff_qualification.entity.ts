import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type HrStaffQualificationAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  staffQualificationId?: string
  staffId: string
  qualificationLevel: string
  degreeName: string
  specialization?: string | null
  institution: string
  yearCompleted?: number | null
  gradeOrScore?: string | null
  isHighest?: string
  fileId?: string | null
  verifiedByUserId?: string | null
  verifiedAt?: Date | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type HrStaffQualificationCreationAttributes = Optional<HrStaffQualificationAttributes, "id" | "publicId" | "recordCode" | "staffQualificationId" | "specialization" | "yearCompleted" | "gradeOrScore" | "isHighest" | "fileId" | "verifiedByUserId" | "verifiedAt" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class HrStaffQualificationEntity
  extends Model<HrStaffQualificationAttributes, HrStaffQualificationCreationAttributes>
  implements HrStaffQualificationAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare staffQualificationId: string
  declare staffId: string
  declare qualificationLevel: string
  declare degreeName: string
  declare specialization: string | null
  declare institution: string
  declare yearCompleted: number | null
  declare gradeOrScore: string | null
  declare isHighest: string
  declare fileId: string | null
  declare verifiedByUserId: string | null
  declare verifiedAt: Date | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initHrStaffQualificationEntity(sequelize: Sequelize): typeof HrStaffQualificationEntity {
  HrStaffQualificationEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('hr_staff_qualification')"),
      },
      staffQualificationId: {
        type: DataTypes.TEXT,
        field: 'staff_qualification_id',
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
      qualificationLevel: {
        type: DataTypes.STRING(20),
        field: 'qualification_level',
        allowNull: false,
      },
      degreeName: {
        type: DataTypes.TEXT,
        field: 'degree_name',
        allowNull: false,
      },
      specialization: {
        type: DataTypes.TEXT,
        field: 'specialization',
        allowNull: true,
      },
      institution: {
        type: DataTypes.TEXT,
        field: 'institution',
        allowNull: false,
      },
      yearCompleted: {
        type: DataTypes.SMALLINT,
        field: 'year_completed',
        allowNull: true,
      },
      gradeOrScore: {
        type: DataTypes.STRING(20),
        field: 'grade_or_score',
        allowNull: true,
      },
      isHighest: {
        type: DataTypes.TEXT,
        field: 'is_highest',
        allowNull: false,
        defaultValue: false,
      },
      fileId: {
        type: DataTypes.TEXT,
        field: 'file_id',
        allowNull: true,
        references: { model: 'docs_file', key: 'file_id' },
      },
      verifiedByUserId: {
        type: DataTypes.TEXT,
        field: 'verified_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      verifiedAt: {
        type: DataTypes.DATE,
        field: 'verified_at',
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
      tableName: 'hr_staff_qualification',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['staff_id', 'degree_name', 'institution'] }
      ]
    }
  )
  return HrStaffQualificationEntity
}

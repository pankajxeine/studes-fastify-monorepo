import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type SisPreviousEducationAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  previousEducationId?: string
  studentId: string
  institutionName: string
  institutionCity?: string | null
  countryCode?: string | null
  boardOrUniversity?: string | null
  qualification: string
  startYear?: number | null
  endYear?: number | null
  scoreText?: string | null
  percentage?: string | null
  mediumOfInstruction?: string | null
  fileId?: string | null
  isVerified?: string
  verifiedByUserId?: string | null
  verifiedAt?: Date | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type SisPreviousEducationCreationAttributes = Optional<SisPreviousEducationAttributes, "id" | "publicId" | "recordCode" | "previousEducationId" | "institutionCity" | "countryCode" | "boardOrUniversity" | "startYear" | "endYear" | "scoreText" | "percentage" | "mediumOfInstruction" | "fileId" | "isVerified" | "verifiedByUserId" | "verifiedAt" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class SisPreviousEducationEntity
  extends Model<SisPreviousEducationAttributes, SisPreviousEducationCreationAttributes>
  implements SisPreviousEducationAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare previousEducationId: string
  declare studentId: string
  declare institutionName: string
  declare institutionCity: string | null
  declare countryCode: string | null
  declare boardOrUniversity: string | null
  declare qualification: string
  declare startYear: number | null
  declare endYear: number | null
  declare scoreText: string | null
  declare percentage: string | null
  declare mediumOfInstruction: string | null
  declare fileId: string | null
  declare isVerified: string
  declare verifiedByUserId: string | null
  declare verifiedAt: Date | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initSisPreviousEducationEntity(sequelize: Sequelize): typeof SisPreviousEducationEntity {
  SisPreviousEducationEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('sis_previous_education')"),
      },
      previousEducationId: {
        type: DataTypes.TEXT,
        field: 'previous_education_id',
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
      institutionName: {
        type: DataTypes.TEXT,
        field: 'institution_name',
        allowNull: false,
      },
      institutionCity: {
        type: DataTypes.TEXT,
        field: 'institution_city',
        allowNull: true,
      },
      countryCode: {
        type: DataTypes.CHAR(2),
        field: 'country_code',
        allowNull: true,
      },
      boardOrUniversity: {
        type: DataTypes.TEXT,
        field: 'board_or_university',
        allowNull: true,
      },
      qualification: {
        type: DataTypes.TEXT,
        field: 'qualification',
        allowNull: false,
      },
      startYear: {
        type: DataTypes.SMALLINT,
        field: 'start_year',
        allowNull: true,
      },
      endYear: {
        type: DataTypes.SMALLINT,
        field: 'end_year',
        allowNull: true,
      },
      scoreText: {
        type: DataTypes.STRING(40),
        field: 'score_text',
        allowNull: true,
      },
      percentage: {
        type: DataTypes.TEXT,
        field: 'percentage',
        allowNull: true,
      },
      mediumOfInstruction: {
        type: DataTypes.STRING(40),
        field: 'medium_of_instruction',
        allowNull: true,
      },
      fileId: {
        type: DataTypes.TEXT,
        field: 'file_id',
        allowNull: true,
        references: { model: 'docs_file', key: 'file_id' },
      },
      isVerified: {
        type: DataTypes.TEXT,
        field: 'is_verified',
        allowNull: false,
        defaultValue: false,
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
      tableName: 'sis_previous_education',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['student_id', 'institution_name', 'qualification', 'end_year'] }
      ]
    }
  )
  return SisPreviousEducationEntity
}

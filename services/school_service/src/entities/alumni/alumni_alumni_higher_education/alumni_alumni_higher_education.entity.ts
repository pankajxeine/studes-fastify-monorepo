import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type AlumniAlumniHigherEducationAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  alumniHigherEducationId?: string
  alumnusId: string
  institutionName: string
  degree: string
  fieldOfStudy?: string | null
  studyMode?: string
  startYear: number
  endYear?: number | null
  status?: string
  gradeObtained?: string | null
  city?: string | null
  countryCode?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type AlumniAlumniHigherEducationCreationAttributes = Optional<AlumniAlumniHigherEducationAttributes, "id" | "publicId" | "recordCode" | "alumniHigherEducationId" | "fieldOfStudy" | "studyMode" | "endYear" | "status" | "gradeObtained" | "city" | "countryCode" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class AlumniAlumniHigherEducationEntity
  extends Model<AlumniAlumniHigherEducationAttributes, AlumniAlumniHigherEducationCreationAttributes>
  implements AlumniAlumniHigherEducationAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare alumniHigherEducationId: string
  declare alumnusId: string
  declare institutionName: string
  declare degree: string
  declare fieldOfStudy: string | null
  declare studyMode: string
  declare startYear: number
  declare endYear: number | null
  declare status: string
  declare gradeObtained: string | null
  declare city: string | null
  declare countryCode: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initAlumniAlumniHigherEducationEntity(sequelize: Sequelize): typeof AlumniAlumniHigherEducationEntity {
  AlumniAlumniHigherEducationEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table (\r\n        'alumni_alumni_higher_education'\r\n    )"),
      },
      alumniHigherEducationId: {
        type: DataTypes.TEXT,
        field: 'alumni_higher_education_id',
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
      institutionName: {
        type: DataTypes.TEXT,
        field: 'institution_name',
        allowNull: false,
      },
      degree: {
        type: DataTypes.TEXT,
        field: 'degree',
        allowNull: false,
      },
      fieldOfStudy: {
        type: DataTypes.TEXT,
        field: 'field_of_study',
        allowNull: true,
      },
      studyMode: {
        type: DataTypes.STRING(20),
        field: 'study_mode',
        allowNull: false,
        defaultValue: "full_time",
      },
      startYear: {
        type: DataTypes.SMALLINT,
        field: 'start_year',
        allowNull: false,
      },
      endYear: {
        type: DataTypes.SMALLINT,
        field: 'end_year',
        allowNull: true,
      },
      status: {
        type: DataTypes.STRING(20),
        field: 'status',
        allowNull: false,
        defaultValue: "enrolled",
      },
      gradeObtained: {
        type: DataTypes.TEXT,
        field: 'grade_obtained',
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
      tableName: 'alumni_alumni_higher_education',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['alumnus_id', 'institution_name', 'degree', 'start_year'] }
      ]
    }
  )
  return AlumniAlumniHigherEducationEntity
}

import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type AcadAcademicYearAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  academicYearId?: string
  name: string
  startDate: string
  endDate: string
  span?: string | null
  isCurrent?: string
  closedAt?: Date | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type AcadAcademicYearCreationAttributes = Optional<AcadAcademicYearAttributes, "id" | "publicId" | "recordCode" | "academicYearId" | "span" | "isCurrent" | "closedAt" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class AcadAcademicYearEntity
  extends Model<AcadAcademicYearAttributes, AcadAcademicYearCreationAttributes>
  implements AcadAcademicYearAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare academicYearId: string
  declare name: string
  declare startDate: string
  declare endDate: string
  declare span: string | null
  declare isCurrent: string
  declare closedAt: Date | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initAcadAcademicYearEntity(sequelize: Sequelize): typeof AcadAcademicYearEntity {
  AcadAcademicYearEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('acad_academic_year')"),
      },
      academicYearId: {
        type: DataTypes.TEXT,
        field: 'academic_year_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      name: {
        type: DataTypes.STRING(20),
        field: 'name',
        allowNull: false,
      },
      startDate: {
        type: DataTypes.TEXT,
        field: 'start_date',
        allowNull: false,
      },
      endDate: {
        type: DataTypes.TEXT,
        field: 'end_date',
        allowNull: false,
      },
      span: {
        type: DataTypes.TEXT,
        field: 'span',
        allowNull: true,
        autoIncrement: true,
      },
      isCurrent: {
        type: DataTypes.TEXT,
        field: 'is_current',
        allowNull: false,
        defaultValue: false,
      },
      closedAt: {
        type: DataTypes.DATE,
        field: 'closed_at',
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
      tableName: 'acad_academic_year',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['name'] }
      ]
    }
  )
  return AcadAcademicYearEntity
}

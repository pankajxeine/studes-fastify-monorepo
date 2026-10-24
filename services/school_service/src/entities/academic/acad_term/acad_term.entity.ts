import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type AcadTermAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  termId?: string
  academicYearId: string
  campusId?: string | null
  code: string
  name: string
  kind?: string
  sequenceNo: number
  startDate: string
  endDate: string
  span?: string | null
  registrationOpensOn?: Date | null
  registrationClosesOn?: Date | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type AcadTermCreationAttributes = Optional<AcadTermAttributes, "id" | "publicId" | "recordCode" | "termId" | "campusId" | "kind" | "span" | "registrationOpensOn" | "registrationClosesOn" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class AcadTermEntity
  extends Model<AcadTermAttributes, AcadTermCreationAttributes>
  implements AcadTermAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare termId: string
  declare academicYearId: string
  declare campusId: string | null
  declare code: string
  declare name: string
  declare kind: string
  declare sequenceNo: number
  declare startDate: string
  declare endDate: string
  declare span: string | null
  declare registrationOpensOn: Date | null
  declare registrationClosesOn: Date | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initAcadTermEntity(sequelize: Sequelize): typeof AcadTermEntity {
  AcadTermEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('acad_term')"),
      },
      termId: {
        type: DataTypes.TEXT,
        field: 'term_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      academicYearId: {
        type: DataTypes.TEXT,
        field: 'academic_year_id',
        allowNull: false,
        references: { model: 'acad_academic_year', key: 'academic_year_id' },
      },
      campusId: {
        type: DataTypes.TEXT,
        field: 'campus_id',
        allowNull: true,
        references: { model: 'org_campus', key: 'campus_id' },
      },
      code: {
        type: DataTypes.STRING(20),
        field: 'code',
        allowNull: false,
      },
      name: {
        type: DataTypes.TEXT,
        field: 'name',
        allowNull: false,
      },
      kind: {
        type: DataTypes.TEXT,
        field: 'kind',
        allowNull: false,
        defaultValue: "term",
      },
      sequenceNo: {
        type: DataTypes.SMALLINT,
        field: 'sequence_no',
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
      registrationOpensOn: {
        type: DataTypes.DATEONLY,
        field: 'registration_opens_on',
        allowNull: true,
      },
      registrationClosesOn: {
        type: DataTypes.DATEONLY,
        field: 'registration_closes_on',
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
      tableName: 'acad_term',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['code'] },
      { unique: true, fields: ['term_id', 'academic_year_id'] },
      { unique: true, fields: ['academic_year_id', 'campus_id', 'sequence_no'] }
      ]
    }
  )
  return AcadTermEntity
}

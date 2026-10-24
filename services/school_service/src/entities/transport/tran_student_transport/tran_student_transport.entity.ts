import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type TranStudentTransportAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  studentTransportId?: string
  studentId: string
  routeStopId: string
  academicYearId: string
  serviceType?: string
  startDate: string
  endDate?: Date | null
  validity?: string | null
  status?: string
  pickupPersonNote?: string | null
  notes?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type TranStudentTransportCreationAttributes = Optional<TranStudentTransportAttributes, "id" | "publicId" | "recordCode" | "studentTransportId" | "serviceType" | "endDate" | "validity" | "status" | "pickupPersonNote" | "notes" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class TranStudentTransportEntity
  extends Model<TranStudentTransportAttributes, TranStudentTransportCreationAttributes>
  implements TranStudentTransportAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare studentTransportId: string
  declare studentId: string
  declare routeStopId: string
  declare academicYearId: string
  declare serviceType: string
  declare startDate: string
  declare endDate: Date | null
  declare validity: string | null
  declare status: string
  declare pickupPersonNote: string | null
  declare notes: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initTranStudentTransportEntity(sequelize: Sequelize): typeof TranStudentTransportEntity {
  TranStudentTransportEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('tran_student_transport')"),
      },
      studentTransportId: {
        type: DataTypes.TEXT,
        field: 'student_transport_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      studentId: {
        type: DataTypes.TEXT,
        field: 'student_id',
        allowNull: false,
        references: { model: 'sis_student', key: 'student_id' },
      },
      routeStopId: {
        type: DataTypes.TEXT,
        field: 'route_stop_id',
        allowNull: false,
        references: { model: 'tran_route_stop', key: 'route_stop_id' },
      },
      academicYearId: {
        type: DataTypes.TEXT,
        field: 'academic_year_id',
        allowNull: false,
        references: { model: 'acad_academic_year', key: 'academic_year_id' },
      },
      serviceType: {
        type: DataTypes.STRING(20),
        field: 'service_type',
        allowNull: false,
        defaultValue: "both",
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
      validity: {
        type: DataTypes.TEXT,
        field: 'validity',
        allowNull: true,
        autoIncrement: true,
      },
      status: {
        type: DataTypes.STRING(20),
        field: 'status',
        allowNull: false,
        defaultValue: "active",
      },
      pickupPersonNote: {
        type: DataTypes.TEXT,
        field: 'pickup_person_note',
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
      }
    },
    {
      sequelize,
      tableName: 'tran_student_transport',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return TranStudentTransportEntity
}

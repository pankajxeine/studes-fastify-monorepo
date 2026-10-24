import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type SisStudentStatusHistoryAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  studentStatusHistoryId?: string
  studentId: string
  fromStatus?: string | null
  toStatus: string
  effectiveOn?: string
  reason?: string | null
  changedByUserId?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type SisStudentStatusHistoryCreationAttributes = Optional<SisStudentStatusHistoryAttributes, "id" | "publicId" | "recordCode" | "studentStatusHistoryId" | "fromStatus" | "effectiveOn" | "reason" | "changedByUserId" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class SisStudentStatusHistoryEntity
  extends Model<SisStudentStatusHistoryAttributes, SisStudentStatusHistoryCreationAttributes>
  implements SisStudentStatusHistoryAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare studentStatusHistoryId: string
  declare studentId: string
  declare fromStatus: string | null
  declare toStatus: string
  declare effectiveOn: string
  declare reason: string | null
  declare changedByUserId: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initSisStudentStatusHistoryEntity(sequelize: Sequelize): typeof SisStudentStatusHistoryEntity {
  SisStudentStatusHistoryEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('sis_student_status_history')"),
      },
      studentStatusHistoryId: {
        type: DataTypes.TEXT,
        field: 'student_status_history_id',
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
      fromStatus: {
        type: DataTypes.TEXT,
        field: 'from_status',
        allowNull: true,
      },
      toStatus: {
        type: DataTypes.TEXT,
        field: 'to_status',
        allowNull: false,
      },
      effectiveOn: {
        type: DataTypes.TEXT,
        field: 'effective_on',
        allowNull: false,
        defaultValue: Sequelize.literal("current_date"),
      },
      reason: {
        type: DataTypes.TEXT,
        field: 'reason',
        allowNull: true,
      },
      changedByUserId: {
        type: DataTypes.TEXT,
        field: 'changed_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
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
      tableName: 'sis_student_status_history',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return SisStudentStatusHistoryEntity
}

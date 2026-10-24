import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type TtblBellScheduleAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  bellScheduleId?: string
  campusId: string
  code: string
  name: string
  description?: string | null
  appliesFrom?: Date | null
  appliesTo?: Date | null
  validity?: string | null
  isDefault?: string
  isActive?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type TtblBellScheduleCreationAttributes = Optional<TtblBellScheduleAttributes, "id" | "publicId" | "recordCode" | "bellScheduleId" | "description" | "appliesFrom" | "appliesTo" | "validity" | "isDefault" | "isActive" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class TtblBellScheduleEntity
  extends Model<TtblBellScheduleAttributes, TtblBellScheduleCreationAttributes>
  implements TtblBellScheduleAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare bellScheduleId: string
  declare campusId: string
  declare code: string
  declare name: string
  declare description: string | null
  declare appliesFrom: Date | null
  declare appliesTo: Date | null
  declare validity: string | null
  declare isDefault: string
  declare isActive: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initTtblBellScheduleEntity(sequelize: Sequelize): typeof TtblBellScheduleEntity {
  TtblBellScheduleEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('ttbl_bell_schedule')"),
      },
      bellScheduleId: {
        type: DataTypes.TEXT,
        field: 'bell_schedule_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      campusId: {
        type: DataTypes.TEXT,
        field: 'campus_id',
        allowNull: false,
        references: { model: 'org_campus', key: 'campus_id' },
      },
      code: {
        type: DataTypes.TEXT,
        field: 'code',
        allowNull: false,
      },
      name: {
        type: DataTypes.TEXT,
        field: 'name',
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        field: 'description',
        allowNull: true,
      },
      appliesFrom: {
        type: DataTypes.DATEONLY,
        field: 'applies_from',
        allowNull: true,
      },
      appliesTo: {
        type: DataTypes.DATEONLY,
        field: 'applies_to',
        allowNull: true,
      },
      validity: {
        type: DataTypes.TEXT,
        field: 'validity',
        allowNull: true,
        autoIncrement: true,
      },
      isDefault: {
        type: DataTypes.TEXT,
        field: 'is_default',
        allowNull: false,
        defaultValue: false,
      },
      isActive: {
        type: DataTypes.TEXT,
        field: 'is_active',
        allowNull: false,
        defaultValue: true,
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
      tableName: 'ttbl_bell_schedule',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['campus_id', 'code'] }
      ]
    }
  )
  return TtblBellScheduleEntity
}

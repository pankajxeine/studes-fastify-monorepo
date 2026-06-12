import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type InstituteAuditLogsAttributes = {
  id?: string | number
  institute_id?: number | null
  admin_user_id?: number | null
  action: string
  module: string
  payload?: unknown | null
  ip_address?: string | null
  created_at?: Date
}

export type InstituteAuditLogsCreationAttributes = Optional<InstituteAuditLogsAttributes, "id" | "institute_id" | "admin_user_id" | "payload" | "ip_address" | "created_at">

export class InstituteAuditLogsEntity
  extends Model<InstituteAuditLogsAttributes, InstituteAuditLogsCreationAttributes>
  implements InstituteAuditLogsAttributes
{
  declare id: string | number
  declare institute_id: number | null
  declare admin_user_id: number | null
  declare action: string
  declare module: string
  declare payload: unknown | null
  declare ip_address: string | null
  declare created_at: Date
}

export function initInstituteAuditLogsEntity(sequelize: Sequelize): typeof InstituteAuditLogsEntity {
  InstituteAuditLogsEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: false,
        primaryKey: true ,
        autoIncrement: true,
      },
      institute_id: {
        type: DataTypes.INTEGER,
        field: 'institute_id',
        allowNull: true,
        defaultValue: null,
      },
      admin_user_id: {
        type: DataTypes.INTEGER,
        field: 'admin_user_id',
        allowNull: true,
        defaultValue: null,
      },
      action: {
        type: DataTypes.STRING(100),
        field: 'action',
        allowNull: false,
      },
      module: {
        type: DataTypes.STRING(50),
        field: 'module',
        allowNull: false,
      },
      payload: {
        type: DataTypes.JSON,
        field: 'payload',
        allowNull: true,
        defaultValue: null,
      },
      ip_address: {
        type: DataTypes.STRING(45),
        field: 'ip_address',
        allowNull: true,
        defaultValue: null,
      },
      created_at: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      }
    },
    {
      sequelize,
      tableName: 'institute_audit_logs',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true
    }
  )
  return InstituteAuditLogsEntity
}

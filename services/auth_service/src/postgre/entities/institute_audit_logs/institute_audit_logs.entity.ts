import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type InstituteAuditLogsAttributes = {
  id?: string | null
  institute_id?: string | null
  admin_user_id?: string | null
  action?: string | null
  module?: string | null
  payload?: string | null
  ip_address?: string | null
  created_at?: string | null
}

export type InstituteAuditLogsCreationAttributes = Optional<InstituteAuditLogsAttributes, "id" | "institute_id" | "admin_user_id" | "action" | "module" | "payload" | "ip_address" | "created_at">

export class InstituteAuditLogsEntity
  extends Model<InstituteAuditLogsAttributes, InstituteAuditLogsCreationAttributes>
  implements InstituteAuditLogsAttributes
{
  declare id: string | null
  declare institute_id: string | null
  declare admin_user_id: string | null
  declare action: string | null
  declare module: string | null
  declare payload: string | null
  declare ip_address: string | null
  declare created_at: string | null
}

export function initInstituteAuditLogsEntity(sequelize: Sequelize): typeof InstituteAuditLogsEntity {
  InstituteAuditLogsEntity.init(
    {
      id: {
        type: DataTypes.CHAR,
        field: 'id',
        allowNull: true,
        defaultValue: null,
      },
      institute_id: {
        type: DataTypes.CHAR,
        field: 'institute_id',
        allowNull: true,
        defaultValue: null,
      },
      admin_user_id: {
        type: DataTypes.CHAR,
        field: 'admin_user_id',
        allowNull: true,
        defaultValue: null,
      },
      action: {
        type: DataTypes.CHAR,
        field: 'action',
        allowNull: true,
        defaultValue: null,
      },
      module: {
        type: DataTypes.CHAR,
        field: 'module',
        allowNull: true,
        defaultValue: null,
      },
      payload: {
        type: DataTypes.CHAR,
        field: 'payload',
        allowNull: true,
        defaultValue: null,
      },
      ip_address: {
        type: DataTypes.CHAR,
        field: 'ip_address',
        allowNull: true,
        defaultValue: null,
      },
      created_at: {
        type: DataTypes.CHAR,
        field: 'created_at',
        allowNull: true,
        defaultValue: null,
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

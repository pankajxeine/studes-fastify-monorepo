import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type InstituteAuditLogsAttributes = {
  id?: number | null
  instituteId?: number | null
  adminUserId?: number | null
  action?: string | null
  module?: string | null
  payload?: unknown | null
  ipAddress?: string | null
  createdAt?: Date | null
}

export type InstituteAuditLogsCreationAttributes = Optional<InstituteAuditLogsAttributes, "id" | "instituteId" | "adminUserId" | "action" | "module" | "payload" | "ipAddress" | "createdAt">

export class InstituteAuditLogsEntity
  extends Model<InstituteAuditLogsAttributes, InstituteAuditLogsCreationAttributes>
  implements InstituteAuditLogsAttributes
{
  declare id: number | null
  declare instituteId: number | null
  declare adminUserId: number | null
  declare action: string | null
  declare module: string | null
  declare payload: unknown | null
  declare ipAddress: string | null
  declare createdAt: Date | null
}

export function initInstituteAuditLogsEntity(sequelize: Sequelize): typeof InstituteAuditLogsEntity {
  InstituteAuditLogsEntity.init(
    {
      id: {
        type: DataTypes.TEXT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
      },
      instituteId: {
        type: DataTypes.TEXT,
        field: 'institute_id',
        allowNull: true,
      },
      adminUserId: {
        type: DataTypes.TEXT,
        field: 'admin_user_id',
        allowNull: true,
        references: { model: 'admin_users', key: 'id' },
        onDelete: 'SET NULL',
      },
      action: {
        type: DataTypes.STRING(50),
        field: 'action',
        allowNull: true,
      },
      module: {
        type: DataTypes.STRING(50),
        field: 'module',
        allowNull: true,
      },
      payload: {
        type: DataTypes.JSONB,
        field: 'payload',
        allowNull: true,
      },
      ipAddress: {
        type: DataTypes.STRING(20),
        field: 'ip_address',
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'institute_audit_logs',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return InstituteAuditLogsEntity
}

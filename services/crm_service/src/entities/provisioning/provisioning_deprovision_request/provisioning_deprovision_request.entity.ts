import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type ProvisioningDeprovisionRequestAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  deprovisionRequestId?: string
  tenantId: string
  reason: string
  exportRequested?: string
  exportRef?: string | null
  retentionUntil?: Date | null
  status?: string
  requestedByUserId: string
  approvedByUserId?: string | null
  approvedAt?: Date | null
  completedAt?: Date | null
  createdAt?: Date
  updatedAt?: Date
}

export type ProvisioningDeprovisionRequestCreationAttributes = Optional<ProvisioningDeprovisionRequestAttributes, "id" | "publicId" | "recordCode" | "deprovisionRequestId" | "exportRequested" | "exportRef" | "retentionUntil" | "status" | "approvedByUserId" | "approvedAt" | "completedAt" | "createdAt" | "updatedAt">

export class ProvisioningDeprovisionRequestEntity
  extends Model<ProvisioningDeprovisionRequestAttributes, ProvisioningDeprovisionRequestCreationAttributes>
  implements ProvisioningDeprovisionRequestAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare deprovisionRequestId: string
  declare tenantId: string
  declare reason: string
  declare exportRequested: string
  declare exportRef: string | null
  declare retentionUntil: Date | null
  declare status: string
  declare requestedByUserId: string
  declare approvedByUserId: string | null
  declare approvedAt: Date | null
  declare completedAt: Date | null
  declare createdAt: Date
  declare updatedAt: Date
}

export function initProvisioningDeprovisionRequestEntity(sequelize: Sequelize): typeof ProvisioningDeprovisionRequestEntity {
  ProvisioningDeprovisionRequestEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table (\r\n        'provisioning_deprovision_request'\r\n    )"),
      },
      deprovisionRequestId: {
        type: DataTypes.TEXT,
        field: 'deprovision_request_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      tenantId: {
        type: DataTypes.TEXT,
        field: 'tenant_id',
        allowNull: false,
        references: { model: 'tenancy_tenant', key: 'tenant_id' },
      },
      reason: {
        type: DataTypes.TEXT,
        field: 'reason',
        allowNull: false,
      },
      exportRequested: {
        type: DataTypes.TEXT,
        field: 'export_requested',
        allowNull: false,
        defaultValue: true,
      },
      exportRef: {
        type: DataTypes.TEXT,
        field: 'export_ref',
        allowNull: true,
      },
      retentionUntil: {
        type: DataTypes.DATEONLY,
        field: 'retention_until',
        allowNull: true,
      },
      status: {
        type: DataTypes.STRING(10),
        field: 'status',
        allowNull: false,
        defaultValue: "requested",
      },
      requestedByUserId: {
        type: DataTypes.TEXT,
        field: 'requested_by_user_id',
        allowNull: false,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      approvedByUserId: {
        type: DataTypes.TEXT,
        field: 'approved_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      approvedAt: {
        type: DataTypes.DATE,
        field: 'approved_at',
        allowNull: true,
      },
      completedAt: {
        type: DataTypes.DATE,
        field: 'completed_at',
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      }
    },
    {
      sequelize,
      tableName: 'provisioning_deprovision_request',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return ProvisioningDeprovisionRequestEntity
}

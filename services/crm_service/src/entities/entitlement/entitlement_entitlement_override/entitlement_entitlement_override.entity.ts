import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type EntitlementEntitlementOverrideAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  overrideId?: string
  tenantApplicationId: string
  moduleId: string
  featureId?: string | null
  value: unknown
  reason: string
  ticketRef?: string | null
  status?: string
  requestedByUserId: string
  approvedByUserId?: string | null
  approvedAt?: Date | null
  validFrom?: Date
  validTo: Date
  revokedAt?: Date | null
  createdAt?: Date
  updatedAt?: Date
}

export type EntitlementEntitlementOverrideCreationAttributes = Optional<EntitlementEntitlementOverrideAttributes, "id" | "publicId" | "recordCode" | "overrideId" | "featureId" | "ticketRef" | "status" | "approvedByUserId" | "approvedAt" | "validFrom" | "revokedAt" | "createdAt" | "updatedAt">

export class EntitlementEntitlementOverrideEntity
  extends Model<EntitlementEntitlementOverrideAttributes, EntitlementEntitlementOverrideCreationAttributes>
  implements EntitlementEntitlementOverrideAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare overrideId: string
  declare tenantApplicationId: string
  declare moduleId: string
  declare featureId: string | null
  declare value: unknown
  declare reason: string
  declare ticketRef: string | null
  declare status: string
  declare requestedByUserId: string
  declare approvedByUserId: string | null
  declare approvedAt: Date | null
  declare validFrom: Date
  declare validTo: Date
  declare revokedAt: Date | null
  declare createdAt: Date
  declare updatedAt: Date
}

export function initEntitlementEntitlementOverrideEntity(sequelize: Sequelize): typeof EntitlementEntitlementOverrideEntity {
  EntitlementEntitlementOverrideEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table (\r\n        'entitlement_entitlement_override'\r\n    )"),
      },
      overrideId: {
        type: DataTypes.TEXT,
        field: 'override_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      tenantApplicationId: {
        type: DataTypes.TEXT,
        field: 'tenant_application_id',
        allowNull: false,
        references: { model: 'tenancy_tenant_application', key: 'tenant_application_id' },
      },
      moduleId: {
        type: DataTypes.TEXT,
        field: 'module_id',
        allowNull: false,
        references: { model: 'catalog_feature', key: 'module_id' },
      },
      featureId: {
        type: DataTypes.UUID,
        field: 'feature_id',
        allowNull: true,
      },
      value: {
        type: DataTypes.JSONB,
        field: 'value',
        allowNull: false,
      },
      reason: {
        type: DataTypes.TEXT,
        field: 'reason',
        allowNull: false,
      },
      ticketRef: {
        type: DataTypes.STRING(40),
        field: 'ticket_ref',
        allowNull: true,
      },
      status: {
        type: DataTypes.STRING(10),
        field: 'status',
        allowNull: false,
        defaultValue: "pending",
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
      validFrom: {
        type: DataTypes.DATE,
        field: 'valid_from',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      validTo: {
        type: DataTypes.DATE,
        field: 'valid_to',
        allowNull: false,
      },
      revokedAt: {
        type: DataTypes.DATE,
        field: 'revoked_at',
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
      tableName: 'entitlement_entitlement_override',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return EntitlementEntitlementOverrideEntity
}

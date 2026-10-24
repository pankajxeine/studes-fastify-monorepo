import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type SubscriptionSubscriptionChangeAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  subscriptionChangeId?: string
  subscriptionId: string
  changeType: string
  fromPlanVersionId?: string | null
  toPlanVersionId?: string | null
  fromQuantity?: number | null
  toQuantity?: number | null
  fromStatus?: string | null
  toStatus?: string | null
  effectiveAt?: Date
  prorationAmount?: string | null
  reason?: string | null
  requestedByUserId?: string | null
  createdAt?: Date
}

export type SubscriptionSubscriptionChangeCreationAttributes = Optional<SubscriptionSubscriptionChangeAttributes, "id" | "publicId" | "recordCode" | "subscriptionChangeId" | "fromPlanVersionId" | "toPlanVersionId" | "fromQuantity" | "toQuantity" | "fromStatus" | "toStatus" | "effectiveAt" | "prorationAmount" | "reason" | "requestedByUserId" | "createdAt">

export class SubscriptionSubscriptionChangeEntity
  extends Model<SubscriptionSubscriptionChangeAttributes, SubscriptionSubscriptionChangeCreationAttributes>
  implements SubscriptionSubscriptionChangeAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare subscriptionChangeId: string
  declare subscriptionId: string
  declare changeType: string
  declare fromPlanVersionId: string | null
  declare toPlanVersionId: string | null
  declare fromQuantity: number | null
  declare toQuantity: number | null
  declare fromStatus: string | null
  declare toStatus: string | null
  declare effectiveAt: Date
  declare prorationAmount: string | null
  declare reason: string | null
  declare requestedByUserId: string | null
  declare createdAt: Date
}

export function initSubscriptionSubscriptionChangeEntity(sequelize: Sequelize): typeof SubscriptionSubscriptionChangeEntity {
  SubscriptionSubscriptionChangeEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('subscription_subscription_change')"),
      },
      subscriptionChangeId: {
        type: DataTypes.TEXT,
        field: 'subscription_change_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      subscriptionId: {
        type: DataTypes.TEXT,
        field: 'subscription_id',
        allowNull: false,
        references: { model: 'subscription_subscription', key: 'subscription_id' },
      },
      changeType: {
        type: DataTypes.STRING(16),
        field: 'change_type',
        allowNull: false,
      },
      fromPlanVersionId: {
        type: DataTypes.TEXT,
        field: 'from_plan_version_id',
        allowNull: true,
        references: { model: 'commerce_plan_version', key: 'plan_version_id' },
      },
      toPlanVersionId: {
        type: DataTypes.TEXT,
        field: 'to_plan_version_id',
        allowNull: true,
        references: { model: 'commerce_plan_version', key: 'plan_version_id' },
      },
      fromQuantity: {
        type: DataTypes.INTEGER,
        field: 'from_quantity',
        allowNull: true,
      },
      toQuantity: {
        type: DataTypes.INTEGER,
        field: 'to_quantity',
        allowNull: true,
      },
      fromStatus: {
        type: DataTypes.STRING(20),
        field: 'from_status',
        allowNull: true,
      },
      toStatus: {
        type: DataTypes.STRING(20),
        field: 'to_status',
        allowNull: true,
      },
      effectiveAt: {
        type: DataTypes.DATE,
        field: 'effective_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      prorationAmount: {
        type: DataTypes.TEXT,
        field: 'proration_amount',
        allowNull: true,
      },
      reason: {
        type: DataTypes.TEXT,
        field: 'reason',
        allowNull: true,
      },
      requestedByUserId: {
        type: DataTypes.TEXT,
        field: 'requested_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      }
    },
    {
      sequelize,
      tableName: 'subscription_subscription_change',
      timestamps: false,
      underscored: true,
      freezeTableName: true
    }
  )
  return SubscriptionSubscriptionChangeEntity
}

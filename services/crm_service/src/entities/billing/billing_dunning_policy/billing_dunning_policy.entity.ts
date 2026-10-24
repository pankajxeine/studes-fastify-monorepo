import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type BillingDunningPolicyAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  dunningPolicyId?: string
  policyCode: string
  name: string
  isDefault?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type BillingDunningPolicyCreationAttributes = Optional<BillingDunningPolicyAttributes, "id" | "publicId" | "recordCode" | "dunningPolicyId" | "isDefault" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class BillingDunningPolicyEntity
  extends Model<BillingDunningPolicyAttributes, BillingDunningPolicyCreationAttributes>
  implements BillingDunningPolicyAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare dunningPolicyId: string
  declare policyCode: string
  declare name: string
  declare isDefault: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initBillingDunningPolicyEntity(sequelize: Sequelize): typeof BillingDunningPolicyEntity {
  BillingDunningPolicyEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('billing_dunning_policy')"),
      },
      dunningPolicyId: {
        type: DataTypes.TEXT,
        field: 'dunning_policy_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      policyCode: {
        type: DataTypes.TEXT,
        field: 'policy_code',
        allowNull: false,
      },
      name: {
        type: DataTypes.TEXT,
        field: 'name',
        allowNull: false,
      },
      isDefault: {
        type: DataTypes.TEXT,
        field: 'is_default',
        allowNull: false,
        defaultValue: false,
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
      tableName: 'billing_dunning_policy',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['policy_code'] }
      ]
    }
  )
  return BillingDunningPolicyEntity
}

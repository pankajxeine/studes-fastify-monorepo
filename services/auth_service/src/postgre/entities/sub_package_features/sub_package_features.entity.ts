import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type SubPackageFeaturesAttributes = {
  id?: number | null
  sub_package_id?: number | null
  feature_id?: number | null
  feature_type?: string | null
  primary_store_price?: number | null
  additional_store_price?: number | null
  trial_period_days?: number | null
  billing_date?: string | null
  expiry_date?: string | null
  purchased_date?: string | null
  purchased_terms?: string | null
  cancel_date?: string | null
  cancel_terms?: string | null
  status?: string | null
  source_of_purchase?: string | null
  source_of_cancellation?: string | null
  created_at?: string | null
  updated_at?: string | null
}

export type SubPackageFeaturesCreationAttributes = Optional<SubPackageFeaturesAttributes, "id" | "sub_package_id" | "feature_id" | "feature_type" | "primary_store_price" | "additional_store_price" | "trial_period_days" | "billing_date" | "expiry_date" | "purchased_date" | "purchased_terms" | "cancel_date" | "cancel_terms" | "status" | "source_of_purchase" | "source_of_cancellation" | "created_at" | "updated_at">

export class SubPackageFeaturesEntity
  extends Model<SubPackageFeaturesAttributes, SubPackageFeaturesCreationAttributes>
  implements SubPackageFeaturesAttributes
{
  declare id: number | null
  declare sub_package_id: number | null
  declare feature_id: number | null
  declare feature_type: string | null
  declare primary_store_price: number | null
  declare additional_store_price: number | null
  declare trial_period_days: number | null
  declare billing_date: string | null
  declare expiry_date: string | null
  declare purchased_date: string | null
  declare purchased_terms: string | null
  declare cancel_date: string | null
  declare cancel_terms: string | null
  declare status: string | null
  declare source_of_purchase: string | null
  declare source_of_cancellation: string | null
  declare created_at: string | null
  declare updated_at: string | null
}

export function initSubPackageFeaturesEntity(sequelize: Sequelize): typeof SubPackageFeaturesEntity {
  SubPackageFeaturesEntity.init(
    {
      id: {
        type: DataTypes.TEXT,
        field: 'id',
        allowNull: true,
      },
      sub_package_id: {
        type: DataTypes.TEXT,
        field: 'sub_package_id',
        allowNull: true,
      },
      feature_id: {
        type: DataTypes.TEXT,
        field: 'feature_id',
        allowNull: true,
      },
      feature_type: {
        type: DataTypes.CHAR,
        field: 'feature_type',
        allowNull: true,
        defaultValue: null,
      },
      primary_store_price: {
        type: DataTypes.DECIMAL(2, 1),
        field: 'primary_store_price',
        allowNull: true,
        defaultValue: null,
      },
      additional_store_price: {
        type: DataTypes.DECIMAL(2, 1),
        field: 'additional_store_price',
        allowNull: true,
        defaultValue: null,
      },
      trial_period_days: {
        type: DataTypes.TEXT,
        field: 'trial_period_days',
        allowNull: true,
      },
      billing_date: {
        type: DataTypes.CHAR,
        field: 'billing_date',
        allowNull: true,
        defaultValue: null,
      },
      expiry_date: {
        type: DataTypes.CHAR,
        field: 'expiry_date',
        allowNull: true,
        defaultValue: null,
      },
      purchased_date: {
        type: DataTypes.CHAR,
        field: 'purchased_date',
        allowNull: true,
        defaultValue: null,
      },
      purchased_terms: {
        type: DataTypes.CHAR,
        field: 'purchased_terms',
        allowNull: true,
        defaultValue: null,
      },
      cancel_date: {
        type: DataTypes.CHAR,
        field: 'cancel_date',
        allowNull: true,
        defaultValue: null,
      },
      cancel_terms: {
        type: DataTypes.CHAR,
        field: 'cancel_terms',
        allowNull: true,
        defaultValue: null,
      },
      status: {
        type: DataTypes.CHAR,
        field: 'status',
        allowNull: true,
        defaultValue: null,
      },
      source_of_purchase: {
        type: DataTypes.CHAR,
        field: 'source_of_purchase',
        allowNull: true,
        defaultValue: null,
      },
      source_of_cancellation: {
        type: DataTypes.CHAR,
        field: 'source_of_cancellation',
        allowNull: true,
        defaultValue: null,
      },
      created_at: {
        type: DataTypes.CHAR,
        field: 'created_at',
        allowNull: true,
        defaultValue: null,
      },
      updated_at: {
        type: DataTypes.CHAR,
        field: 'updated_at',
        allowNull: true,
        defaultValue: null,
      }
    },
    {
      sequelize,
      tableName: 'sub_package_features',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true
    }
  )
  return SubPackageFeaturesEntity
}

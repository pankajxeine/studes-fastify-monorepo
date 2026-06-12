import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type SubPackageFeaturesAttributes = {
  id?: number
  sub_package_id: number
  feature_id: number
  feature_type?: string
  primary_store_price?: number
  additional_store_price?: number
  trial_period_days?: number
  billing_date?: Date | null
  expiry_date?: Date | null
  purchased_date?: Date | null
  purchased_terms?: unknown | null
  cancel_date?: Date | null
  cancel_terms?: unknown | null
  status?: string | null
  source_of_purchase?: string | null
  source_of_cancellation?: string | null
  created_at: Date
  updated_at: Date
}

export type SubPackageFeaturesCreationAttributes = Optional<SubPackageFeaturesAttributes, "id" | "feature_type" | "primary_store_price" | "additional_store_price" | "trial_period_days" | "billing_date" | "expiry_date" | "purchased_date" | "purchased_terms" | "cancel_date" | "cancel_terms" | "status" | "source_of_purchase" | "source_of_cancellation">

export class SubPackageFeaturesEntity
  extends Model<SubPackageFeaturesAttributes, SubPackageFeaturesCreationAttributes>
  implements SubPackageFeaturesAttributes
{
  declare id: number
  declare sub_package_id: number
  declare feature_id: number
  declare feature_type: string
  declare primary_store_price: number
  declare additional_store_price: number
  declare trial_period_days: number
  declare billing_date: Date | null
  declare expiry_date: Date | null
  declare purchased_date: Date | null
  declare purchased_terms: unknown | null
  declare cancel_date: Date | null
  declare cancel_terms: unknown | null
  declare status: string | null
  declare source_of_purchase: string | null
  declare source_of_cancellation: string | null
  declare created_at: Date
  declare updated_at: Date
}

export function initSubPackageFeaturesEntity(sequelize: Sequelize): typeof SubPackageFeaturesEntity {
  SubPackageFeaturesEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true ,
        autoIncrement: true,
      },
      sub_package_id: {
        type: DataTypes.INTEGER,
        field: 'sub_package_id',
        allowNull: false,
        unique: true,
      },
      feature_id: {
        type: DataTypes.INTEGER,
        field: 'feature_id',
        allowNull: false,
        unique: true,
      },
      feature_type: {
        type: DataTypes.ENUM('none','base','a la carte'),
        field: 'feature_type',
        allowNull: false,
        defaultValue: "None",
      },
      primary_store_price: {
        type: DataTypes.DOUBLE(15,3),
        field: 'primary_store_price',
        allowNull: false,
        defaultValue: "0.000",
      },
      additional_store_price: {
        type: DataTypes.DOUBLE(15,3),
        field: 'additional_store_price',
        allowNull: false,
        defaultValue: "0.000",
      },
      trial_period_days: {
        type: DataTypes.INTEGER,
        field: 'trial_period_days',
        allowNull: false,
        defaultValue: "0",
      },
      billing_date: {
        type: DataTypes.DATE,
        field: 'billing_date',
        allowNull: true,
        defaultValue: null,
      },
      expiry_date: {
        type: DataTypes.DATE,
        field: 'expiry_date',
        allowNull: true,
        defaultValue: null,
      },
      purchased_date: {
        type: DataTypes.DATE,
        field: 'purchased_date',
        allowNull: true,
        defaultValue: null,
      },
      purchased_terms: {
        type: DataTypes.JSON,
        field: 'purchased_terms',
        allowNull: true,
        defaultValue: null,
      },
      cancel_date: {
        type: DataTypes.DATE,
        field: 'cancel_date',
        allowNull: true,
        defaultValue: null,
      },
      cancel_terms: {
        type: DataTypes.JSON,
        field: 'cancel_terms',
        allowNull: true,
        defaultValue: null,
      },
      status: {
        type: DataTypes.ENUM('active','inactive'),
        field: 'status',
        allowNull: true,
        defaultValue: "Active",
      },
      source_of_purchase: {
        type: DataTypes.ENUM('crm','cpanel','pos'),
        field: 'source_of_purchase',
        allowNull: true,
        defaultValue: null,
      },
      source_of_cancellation: {
        type: DataTypes.ENUM('crm','pos'),
        field: 'source_of_cancellation',
        allowNull: true,
        defaultValue: null,
      },
      created_at: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
      },
      updated_at: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
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

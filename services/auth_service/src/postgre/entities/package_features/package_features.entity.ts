import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PackageFeaturesAttributes = {
  id?: number | null
  package_id?: number | null
  feature_id?: number | null
  feature_type?: string | null
  short_description?: string | null
  tags?: string | null
  additional_store_price?: number | null
  additional_store_cost_price?: number | null
  primary_store_price?: number | null
  primary_store_cost_price?: number | null
  trial_period_days?: number | null
  video_description?: string | null
  full_description?: string | null
  images?: string | null
  videos?: string | null
  created_at?: string | null
  updated_at?: string | null
  created_by?: number | null
  updated_by?: number | null
}

export type PackageFeaturesCreationAttributes = Optional<PackageFeaturesAttributes, "id" | "package_id" | "feature_id" | "feature_type" | "short_description" | "tags" | "additional_store_price" | "additional_store_cost_price" | "primary_store_price" | "primary_store_cost_price" | "trial_period_days" | "video_description" | "full_description" | "images" | "videos" | "created_at" | "updated_at" | "created_by" | "updated_by">

export class PackageFeaturesEntity
  extends Model<PackageFeaturesAttributes, PackageFeaturesCreationAttributes>
  implements PackageFeaturesAttributes
{
  declare id: number | null
  declare package_id: number | null
  declare feature_id: number | null
  declare feature_type: string | null
  declare short_description: string | null
  declare tags: string | null
  declare additional_store_price: number | null
  declare additional_store_cost_price: number | null
  declare primary_store_price: number | null
  declare primary_store_cost_price: number | null
  declare trial_period_days: number | null
  declare video_description: string | null
  declare full_description: string | null
  declare images: string | null
  declare videos: string | null
  declare created_at: string | null
  declare updated_at: string | null
  declare created_by: number | null
  declare updated_by: number | null
}

export function initPackageFeaturesEntity(sequelize: Sequelize): typeof PackageFeaturesEntity {
  PackageFeaturesEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: true,
      },
      package_id: {
        type: DataTypes.TEXT,
        field: 'package_id',
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
      short_description: {
        type: DataTypes.CHAR,
        field: 'short_description',
        allowNull: true,
        defaultValue: null,
      },
      tags: {
        type: DataTypes.CHAR,
        field: 'tags',
        allowNull: true,
        defaultValue: null,
      },
      additional_store_price: {
        type: DataTypes.DECIMAL(2, 1),
        field: 'additional_store_price',
        allowNull: true,
        defaultValue: null,
      },
      additional_store_cost_price: {
        type: DataTypes.DECIMAL(2, 1),
        field: 'additional_store_cost_price',
        allowNull: true,
        defaultValue: null,
      },
      primary_store_price: {
        type: DataTypes.DECIMAL(2, 1),
        field: 'primary_store_price',
        allowNull: true,
        defaultValue: null,
      },
      primary_store_cost_price: {
        type: DataTypes.DECIMAL(2, 1),
        field: 'primary_store_cost_price',
        allowNull: true,
        defaultValue: null,
      },
      trial_period_days: {
        type: DataTypes.TEXT,
        field: 'trial_period_days',
        allowNull: true,
      },
      video_description: {
        type: DataTypes.CHAR,
        field: 'video_description',
        allowNull: true,
        defaultValue: null,
      },
      full_description: {
        type: DataTypes.CHAR,
        field: 'full_description',
        allowNull: true,
        defaultValue: null,
      },
      images: {
        type: DataTypes.CHAR,
        field: 'images',
        allowNull: true,
        defaultValue: null,
      },
      videos: {
        type: DataTypes.CHAR,
        field: 'videos',
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
      },
      created_by: {
        type: DataTypes.TEXT,
        field: 'created_by',
        allowNull: true,
      },
      updated_by: {
        type: DataTypes.TEXT,
        field: 'updated_by',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'package_features',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true
    }
  )
  return PackageFeaturesEntity
}

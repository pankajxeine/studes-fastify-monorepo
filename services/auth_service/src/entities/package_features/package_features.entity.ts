import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PackageFeaturesAttributes = {
  id?: number
  package_id: number
  feature_id: number
  feature_type?: string
  short_description: string
  tags: string
  additional_store_price?: number
  additional_store_cost_price?: number | null
  primary_store_price?: number
  primary_store_cost_price?: number | null
  trial_period_days?: number
  video_description: string
  full_description: string
  images?: string | null
  videos?: string | null
  created_at: Date
  updated_at: Date
  created_by?: number
  updated_by?: number
}

export type PackageFeaturesCreationAttributes = Optional<PackageFeaturesAttributes, "id" | "feature_type" | "additional_store_price" | "additional_store_cost_price" | "primary_store_price" | "primary_store_cost_price" | "trial_period_days" | "images" | "videos" | "created_by" | "updated_by">

export class PackageFeaturesEntity
  extends Model<PackageFeaturesAttributes, PackageFeaturesCreationAttributes>
  implements PackageFeaturesAttributes
{
  declare id: number
  declare package_id: number
  declare feature_id: number
  declare feature_type: string
  declare short_description: string
  declare tags: string
  declare additional_store_price: number
  declare additional_store_cost_price: number | null
  declare primary_store_price: number
  declare primary_store_cost_price: number | null
  declare trial_period_days: number
  declare video_description: string
  declare full_description: string
  declare images: string | null
  declare videos: string | null
  declare created_at: Date
  declare updated_at: Date
  declare created_by: number
  declare updated_by: number
}

export function initPackageFeaturesEntity(sequelize: Sequelize): typeof PackageFeaturesEntity {
  PackageFeaturesEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true ,
        autoIncrement: true,
      },
      package_id: {
        type: DataTypes.INTEGER,
        field: 'package_id',
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
      short_description: {
        type: DataTypes.TEXT,
        field: 'short_description',
        allowNull: false,
      },
      tags: {
        type: DataTypes.TEXT,
        field: 'tags',
        allowNull: false,
      },
      additional_store_price: {
        type: DataTypes.DOUBLE(15,3),
        field: 'additional_store_price',
        allowNull: false,
        defaultValue: "0.000",
      },
      additional_store_cost_price: {
        type: DataTypes.DOUBLE(15,3),
        field: 'additional_store_cost_price',
        allowNull: true,
        defaultValue: "0.000",
      },
      primary_store_price: {
        type: DataTypes.DOUBLE(15,3),
        field: 'primary_store_price',
        allowNull: false,
        defaultValue: "0.000",
      },
      primary_store_cost_price: {
        type: DataTypes.DOUBLE(15,3),
        field: 'primary_store_cost_price',
        allowNull: true,
        defaultValue: "0.000",
      },
      trial_period_days: {
        type: DataTypes.INTEGER,
        field: 'trial_period_days',
        allowNull: false,
        defaultValue: "0",
      },
      video_description: {
        type: DataTypes.TEXT,
        field: 'video_description',
        allowNull: false,
      },
      full_description: {
        type: DataTypes.TEXT,
        field: 'full_description',
        allowNull: false,
      },
      images: {
        type: DataTypes.TEXT,
        field: 'images',
        allowNull: true,
      },
      videos: {
        type: DataTypes.TEXT,
        field: 'videos',
        allowNull: true,
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
      },
      created_by: {
        type: DataTypes.INTEGER,
        field: 'created_by',
        allowNull: false,
        defaultValue: "0",
      },
      updated_by: {
        type: DataTypes.INTEGER,
        field: 'updated_by',
        allowNull: false,
        defaultValue: "0",
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

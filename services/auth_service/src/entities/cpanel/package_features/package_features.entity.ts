import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PackageFeaturesAttributes = {
  id?: number | null
  packageId?: number | null
  featureId?: number | null
  featureType?: string | null
  shortDescription?: string | null
  tags?: string | null
  additionalPrice?: number | null
  additionalCostPrice?: number | null
  primaryPrice?: number | null
  primaryCostPrice?: number | null
  trialPeriodDays?: number | null
  videoDescription?: string | null
  fullDescription?: string | null
  images?: string | null
  videos?: string | null
  createdBy?: number | null
  updatedBy?: number | null
  createdAt?: Date | null
  updatedAt?: Date | null
}

export type PackageFeaturesCreationAttributes = Optional<PackageFeaturesAttributes, "id" | "packageId" | "featureId" | "featureType" | "shortDescription" | "tags" | "additionalPrice" | "additionalCostPrice" | "primaryPrice" | "primaryCostPrice" | "trialPeriodDays" | "videoDescription" | "fullDescription" | "images" | "videos" | "createdBy" | "updatedBy" | "createdAt" | "updatedAt">

export class PackageFeaturesEntity
  extends Model<PackageFeaturesAttributes, PackageFeaturesCreationAttributes>
  implements PackageFeaturesAttributes
{
  declare id: number | null
  declare packageId: number | null
  declare featureId: number | null
  declare featureType: string | null
  declare shortDescription: string | null
  declare tags: string | null
  declare additionalPrice: number | null
  declare additionalCostPrice: number | null
  declare primaryPrice: number | null
  declare primaryCostPrice: number | null
  declare trialPeriodDays: number | null
  declare videoDescription: string | null
  declare fullDescription: string | null
  declare images: string | null
  declare videos: string | null
  declare createdBy: number | null
  declare updatedBy: number | null
  declare createdAt: Date | null
  declare updatedAt: Date | null
}

export function initPackageFeaturesEntity(sequelize: Sequelize): typeof PackageFeaturesEntity {
  PackageFeaturesEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: true,
        primaryKey: true,
      },
      packageId: {
        type: DataTypes.TEXT,
        field: 'package_id',
        allowNull: true,
      },
      featureId: {
        type: DataTypes.TEXT,
        field: 'feature_id',
        allowNull: true,
      },
      featureType: {
        type: DataTypes.TEXT,
        field: 'feature_type',
        allowNull: true,
        defaultValue: "None",
      },
      shortDescription: {
        type: DataTypes.CHAR(300),
        field: 'short_description',
        allowNull: true,
      },
      tags: {
        type: DataTypes.CHAR(20),
        field: 'tags',
        allowNull: true,
      },
      additionalPrice: {
        type: DataTypes.DECIMAL(15, 2),
        field: 'additional_price',
        allowNull: true,
      },
      additionalCostPrice: {
        type: DataTypes.DECIMAL(15, 2),
        field: 'additional_cost_price',
        allowNull: true,
      },
      primaryPrice: {
        type: DataTypes.DECIMAL(15, 2),
        field: 'primary_price',
        allowNull: true,
      },
      primaryCostPrice: {
        type: DataTypes.DECIMAL(15, 2),
        field: 'primary_cost_price',
        allowNull: true,
      },
      trialPeriodDays: {
        type: DataTypes.TEXT,
        field: 'trial_period_days',
        allowNull: true,
      },
      videoDescription: {
        type: DataTypes.CHAR(1),
        field: 'video_description',
        allowNull: true,
      },
      fullDescription: {
        type: DataTypes.TEXT,
        field: 'full_description',
        allowNull: true,
      },
      images: {
        type: DataTypes.CHAR(2),
        field: 'images',
        allowNull: true,
      },
      videos: {
        type: DataTypes.CHAR(2),
        field: 'videos',
        allowNull: true,
      },
      createdBy: {
        type: DataTypes.TEXT,
        field: 'created_by',
        allowNull: true,
      },
      updatedBy: {
        type: DataTypes.TEXT,
        field: 'updated_by',
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: true,
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'package_features',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true,
      indexes: [
      { unique: true, fields: ['id'] },
      { unique: true, fields: ['package_id', 'feature_id'] }
      ]
    }
  )
  return PackageFeaturesEntity
}

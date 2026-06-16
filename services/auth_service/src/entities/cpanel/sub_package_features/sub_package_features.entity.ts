import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type SubPackageFeaturesAttributes = {
  id?: number | null
  subPackageId?: number | null
  featureId?: number | null
  featureType?: string
  primaryPrice?: number | null
  additionalPrice?: number | null
  trialPeriodDays?: number | null
  billingDate?: Date | null
  expiryDate?: Date | null
  purchasedDate?: Date | null
  purchasedTerms?: unknown | null
  cancelDate?: Date | null
  cancelTerms?: unknown | null
  status?: string
  sourceOfPurchase?: string | null
  sourceOfCancellation?: string | null
  createdAt?: Date | null
  updatedAt?: Date | null
  deletedAt?: Date | null
}

export type SubPackageFeaturesCreationAttributes = Optional<SubPackageFeaturesAttributes, "id" | "subPackageId" | "featureId" | "featureType" | "primaryPrice" | "additionalPrice" | "trialPeriodDays" | "billingDate" | "expiryDate" | "purchasedDate" | "purchasedTerms" | "cancelDate" | "cancelTerms" | "status" | "sourceOfPurchase" | "sourceOfCancellation" | "createdAt" | "updatedAt" | "deletedAt">

export class SubPackageFeaturesEntity
  extends Model<SubPackageFeaturesAttributes, SubPackageFeaturesCreationAttributes>
  implements SubPackageFeaturesAttributes
{
  declare id: number | null
  declare subPackageId: number | null
  declare featureId: number | null
  declare featureType: string
  declare primaryPrice: number | null
  declare additionalPrice: number | null
  declare trialPeriodDays: number | null
  declare billingDate: Date | null
  declare expiryDate: Date | null
  declare purchasedDate: Date | null
  declare purchasedTerms: unknown | null
  declare cancelDate: Date | null
  declare cancelTerms: unknown | null
  declare status: string
  declare sourceOfPurchase: string | null
  declare sourceOfCancellation: string | null
  declare createdAt: Date | null
  declare updatedAt: Date | null
  declare deletedAt: Date | null
}

export function initSubPackageFeaturesEntity(sequelize: Sequelize): typeof SubPackageFeaturesEntity {
  SubPackageFeaturesEntity.init(
    {
      id: {
        type: DataTypes.TEXT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
      },
      subPackageId: {
        type: DataTypes.TEXT,
        field: 'sub_package_id',
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
        allowNull: false,
        defaultValue: "None",
      },
      primaryPrice: {
        type: DataTypes.DECIMAL(10, 2),
        field: 'primary_price',
        allowNull: true,
      },
      additionalPrice: {
        type: DataTypes.DECIMAL(10, 2),
        field: 'additional_price',
        allowNull: true,
      },
      trialPeriodDays: {
        type: DataTypes.TEXT,
        field: 'trial_period_days',
        allowNull: true,
        defaultValue: 0,
      },
      billingDate: {
        type: DataTypes.DATE,
        field: 'billing_date',
        allowNull: true,
      },
      expiryDate: {
        type: DataTypes.DATE,
        field: 'expiry_date',
        allowNull: true,
      },
      purchasedDate: {
        type: DataTypes.DATE,
        field: 'purchased_date',
        allowNull: true,
      },
      purchasedTerms: {
        type: DataTypes.JSONB,
        field: 'purchased_terms',
        allowNull: true,
      },
      cancelDate: {
        type: DataTypes.DATE,
        field: 'cancel_date',
        allowNull: true,
      },
      cancelTerms: {
        type: DataTypes.JSONB,
        field: 'cancel_terms',
        allowNull: true,
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "Active",
      },
      sourceOfPurchase: {
        type: DataTypes.TEXT,
        field: 'source_of_purchase',
        allowNull: true,
      },
      sourceOfCancellation: {
        type: DataTypes.TEXT,
        field: 'source_of_cancellation',
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
      },
      deletedAt: {
        type: DataTypes.DATE,
        field: 'deleted_at',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'sub_package_features',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] },
      { unique: true, fields: ['sub_package_id', 'feature_id'] }
      ]
    }
  )
  return SubPackageFeaturesEntity
}

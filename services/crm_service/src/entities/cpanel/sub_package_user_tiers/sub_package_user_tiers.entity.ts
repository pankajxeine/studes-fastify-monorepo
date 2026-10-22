import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type SubPackageUserTiersAttributes = {
  id?: string | number | null
  subPackageId?: number | null
  userTierId?: number | null
  additionalUsers?: number | null
  additionalUserPrice?: number | null
  purchasedTerms?: unknown | null
  cancelDate?: Date | null
  cancelTerms?: unknown | null
  createdAt?: Date
  updatedAt?: Date
}

export type SubPackageUserTiersCreationAttributes = Optional<SubPackageUserTiersAttributes, "id" | "subPackageId" | "userTierId" | "additionalUsers" | "additionalUserPrice" | "purchasedTerms" | "cancelDate" | "cancelTerms" | "createdAt" | "updatedAt">

export class SubPackageUserTiersEntity
  extends Model<SubPackageUserTiersAttributes, SubPackageUserTiersCreationAttributes>
  implements SubPackageUserTiersAttributes
{
  declare id: string | number | null
  declare subPackageId: number | null
  declare userTierId: number | null
  declare additionalUsers: number | null
  declare additionalUserPrice: number | null
  declare purchasedTerms: unknown | null
  declare cancelDate: Date | null
  declare cancelTerms: unknown | null
  declare createdAt: Date
  declare updatedAt: Date
}

export function initSubPackageUserTiersEntity(sequelize: Sequelize): typeof SubPackageUserTiersEntity {
  SubPackageUserTiersEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      subPackageId: {
        type: DataTypes.TEXT,
        field: 'sub_package_id',
        allowNull: true,
        references: { model: 'sub_packages', key: 'id' },
      },
      userTierId: {
        type: DataTypes.TEXT,
        field: 'user_tier_id',
        allowNull: true,
        references: { model: 'user_tiers', key: 'id' },
      },
      additionalUsers: {
        type: DataTypes.TEXT,
        field: 'additional_users',
        allowNull: true,
      },
      additionalUserPrice: {
        type: DataTypes.DECIMAL(10, 2),
        field: 'additional_user_price',
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
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
        defaultValue: "DataTypes.NOW",
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
        defaultValue: "DataTypes.NOW",
      }
    },
    {
      sequelize,
      tableName: 'sub_package_user_tiers',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return SubPackageUserTiersEntity
}

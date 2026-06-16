import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type SkeletonDetailsAttributes = {
  id?: number | null
  databaseName: string
  environment?: string | null
  industry: string
  configuration?: unknown | null
  createdAt: Date
  updatedAt: Date
}

export type SkeletonDetailsCreationAttributes = Optional<SkeletonDetailsAttributes, "id" | "environment" | "configuration">

export class SkeletonDetailsEntity
  extends Model<SkeletonDetailsAttributes, SkeletonDetailsCreationAttributes>
  implements SkeletonDetailsAttributes
{
  declare id: number | null
  declare databaseName: string
  declare environment: string | null
  declare industry: string
  declare configuration: unknown | null
  declare createdAt: Date
  declare updatedAt: Date
}

export function initSkeletonDetailsEntity(sequelize: Sequelize): typeof SkeletonDetailsEntity {
  SkeletonDetailsEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
      },
      databaseName: {
        type: DataTypes.STRING(50),
        field: 'database_name',
        allowNull: false,
      },
      environment: {
        type: DataTypes.STRING(50),
        field: 'environment',
        allowNull: true,
      },
      industry: {
        type: DataTypes.STRING(50),
        field: 'industry',
        allowNull: false,
      },
      configuration: {
        type: DataTypes.JSONB,
        field: 'configuration',
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
      }
    },
    {
      sequelize,
      tableName: 'skeleton_details',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false
    }
  )
  return SkeletonDetailsEntity
}

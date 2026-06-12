import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type SkeletonConfigurationsAttributes = {
  id?: number
  skeleton_database_name: string
  institute_type: string
  environment: string
  database_connections?: unknown | null
  configuration_details?: unknown | null
  description?: string | null
  status?: string
  created_at?: Date
  updated_at?: Date
}

export type SkeletonConfigurationsCreationAttributes = Optional<SkeletonConfigurationsAttributes, "id" | "database_connections" | "configuration_details" | "description" | "status" | "created_at" | "updated_at">

export class SkeletonConfigurationsEntity
  extends Model<SkeletonConfigurationsAttributes, SkeletonConfigurationsCreationAttributes>
  implements SkeletonConfigurationsAttributes
{
  declare id: number
  declare skeleton_database_name: string
  declare institute_type: string
  declare environment: string
  declare database_connections: unknown | null
  declare configuration_details: unknown | null
  declare description: string | null
  declare status: string
  declare created_at: Date
  declare updated_at: Date
}

export function initSkeletonConfigurationsEntity(sequelize: Sequelize): typeof SkeletonConfigurationsEntity {
  SkeletonConfigurationsEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true ,
        autoIncrement: true,
      },
      skeleton_database_name: {
        type: DataTypes.STRING(100),
        field: 'skeleton_database_name',
        allowNull: false,
        unique: true,
      },
      institute_type: {
        type: DataTypes.ENUM('school','college','university','coaching center'),
        field: 'institute_type',
        allowNull: false,
        unique: true,
      },
      environment: {
        type: DataTypes.STRING(50),
        field: 'environment',
        allowNull: false,
      },
      database_connections: {
        type: DataTypes.JSON,
        field: 'database_connections',
        allowNull: true,
        defaultValue: null,
      },
      configuration_details: {
        type: DataTypes.JSON,
        field: 'configuration_details',
        allowNull: true,
        defaultValue: null,
      },
      description: {
        type: DataTypes.TEXT,
        field: 'description',
        allowNull: true,
      },
      status: {
        type: DataTypes.ENUM('active','inactive'),
        field: 'status',
        allowNull: false,
        defaultValue: "Active",
      },
      created_at: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updated_at: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      }
    },
    {
      sequelize,
      tableName: 'skeleton_configurations',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true
    }
  )
  return SkeletonConfigurationsEntity
}

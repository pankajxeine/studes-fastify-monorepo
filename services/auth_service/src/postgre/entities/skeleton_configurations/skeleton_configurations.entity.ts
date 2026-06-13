import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type SkeletonConfigurationsAttributes = {
  id?: number | null
  skeleton_database_name?: string | null
  institute_type?: string | null
  environment?: string | null
  database_connections?: string | null
  configuration_details?: string | null
  description?: string | null
  status?: string | null
  created_at?: string | null
  updated_at?: string | null
}

export type SkeletonConfigurationsCreationAttributes = Optional<SkeletonConfigurationsAttributes, "id" | "skeleton_database_name" | "institute_type" | "environment" | "database_connections" | "configuration_details" | "description" | "status" | "created_at" | "updated_at">

export class SkeletonConfigurationsEntity
  extends Model<SkeletonConfigurationsAttributes, SkeletonConfigurationsCreationAttributes>
  implements SkeletonConfigurationsAttributes
{
  declare id: number | null
  declare skeleton_database_name: string | null
  declare institute_type: string | null
  declare environment: string | null
  declare database_connections: string | null
  declare configuration_details: string | null
  declare description: string | null
  declare status: string | null
  declare created_at: string | null
  declare updated_at: string | null
}

export function initSkeletonConfigurationsEntity(sequelize: Sequelize): typeof SkeletonConfigurationsEntity {
  SkeletonConfigurationsEntity.init(
    {
      id: {
        type: DataTypes.TEXT,
        field: 'id',
        allowNull: true,
      },
      skeleton_database_name: {
        type: DataTypes.CHAR,
        field: 'skeleton_database_name',
        allowNull: true,
        defaultValue: null,
      },
      institute_type: {
        type: DataTypes.CHAR,
        field: 'institute_type',
        allowNull: true,
        defaultValue: null,
      },
      environment: {
        type: DataTypes.CHAR,
        field: 'environment',
        allowNull: true,
        defaultValue: null,
      },
      database_connections: {
        type: DataTypes.CHAR,
        field: 'database_connections',
        allowNull: true,
        defaultValue: null,
      },
      configuration_details: {
        type: DataTypes.CHAR,
        field: 'configuration_details',
        allowNull: true,
        defaultValue: null,
      },
      description: {
        type: DataTypes.CHAR,
        field: 'description',
        allowNull: true,
        defaultValue: null,
      },
      status: {
        type: DataTypes.CHAR,
        field: 'status',
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
      tableName: 'skeleton_configurations',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true
    }
  )
  return SkeletonConfigurationsEntity
}

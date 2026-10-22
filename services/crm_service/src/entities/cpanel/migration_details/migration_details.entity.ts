import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type MigrationDetailsAttributes = {
  id?: string | number | null
  folder: string
  yearFolder?: string | null
  fileName: string
  industry: string
  executionTime: Date
  createdAt?: Date
  updatedAt?: Date
}

export type MigrationDetailsCreationAttributes = Optional<MigrationDetailsAttributes, "id" | "yearFolder" | "createdAt" | "updatedAt">

export class MigrationDetailsEntity
  extends Model<MigrationDetailsAttributes, MigrationDetailsCreationAttributes>
  implements MigrationDetailsAttributes
{
  declare id: string | number | null
  declare folder: string
  declare yearFolder: string | null
  declare fileName: string
  declare industry: string
  declare executionTime: Date
  declare createdAt: Date
  declare updatedAt: Date
}

export function initMigrationDetailsEntity(sequelize: Sequelize): typeof MigrationDetailsEntity {
  MigrationDetailsEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      folder: {
        type: DataTypes.STRING(50),
        field: 'folder',
        allowNull: false,
      },
      yearFolder: {
        type: DataTypes.STRING(50),
        field: 'year_folder',
        allowNull: true,
      },
      fileName: {
        type: DataTypes.STRING(255),
        field: 'file_name',
        allowNull: false,
      },
      industry: {
        type: DataTypes.STRING(50),
        field: 'industry',
        allowNull: false,
      },
      executionTime: {
        type: DataTypes.DATE,
        field: 'execution_time',
        allowNull: false,
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
      tableName: 'migration_details',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return MigrationDetailsEntity
}

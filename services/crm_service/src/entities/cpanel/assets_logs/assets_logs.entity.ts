import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type AssetsLogsAttributes = {
  id?: string | number | null
  path: string
  fileName: string
  createdAt?: Date
  updatedAt?: Date
}

export type AssetsLogsCreationAttributes = Optional<AssetsLogsAttributes, "id" | "createdAt" | "updatedAt">

export class AssetsLogsEntity
  extends Model<AssetsLogsAttributes, AssetsLogsCreationAttributes>
  implements AssetsLogsAttributes
{
  declare id: string | number | null
  declare path: string
  declare fileName: string
  declare createdAt: Date
  declare updatedAt: Date
}

export function initAssetsLogsEntity(sequelize: Sequelize): typeof AssetsLogsEntity {
  AssetsLogsEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      path: {
        type: DataTypes.STRING(50),
        field: 'path',
        allowNull: false,
      },
      fileName: {
        type: DataTypes.STRING(150),
        field: 'file_name',
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
      tableName: 'assets_logs',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] },
      { unique: true, fields: ['file_name'] }
      ]
    }
  )
  return AssetsLogsEntity
}

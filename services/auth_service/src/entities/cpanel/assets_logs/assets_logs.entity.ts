import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type AssetsLogsAttributes = {
  id: number
  path: string
  fileName: string
  createdAt: Date
  updatedAt: Date
}

export type AssetsLogsCreationAttributes = Optional<AssetsLogsAttributes, never>

export class AssetsLogsEntity
  extends Model<AssetsLogsAttributes, AssetsLogsCreationAttributes>
  implements AssetsLogsAttributes
{
  declare id: number
  declare path: string
  declare fileName: string
  declare createdAt: Date
  declare updatedAt: Date
}

export function initAssetsLogsEntity(sequelize: Sequelize): typeof AssetsLogsEntity {
  AssetsLogsEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true,
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
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
      }
    },
    {
      sequelize,
      tableName: 'assets_logs',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] },
      { unique: true, fields: ['uq_assets_logs_file_name', 'file_name'] }
      ]
    }
  )
  return AssetsLogsEntity
}

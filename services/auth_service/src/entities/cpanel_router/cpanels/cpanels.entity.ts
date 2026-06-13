import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CpanelsAttributes = {
  id?: number | null
  domain: string
  apiEndpoint: string
  settings?: unknown | null
  createdAt: Date
  updatedAt: Date
}

export type CpanelsCreationAttributes = Optional<CpanelsAttributes, "id" | "settings">

export class CpanelsEntity
  extends Model<CpanelsAttributes, CpanelsCreationAttributes>
  implements CpanelsAttributes
{
  declare id: number | null
  declare domain: string
  declare apiEndpoint: string
  declare settings: unknown | null
  declare createdAt: Date
  declare updatedAt: Date
}

export function initCpanelsEntity(sequelize: Sequelize): typeof CpanelsEntity {
  CpanelsEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
      },
      domain: {
        type: DataTypes.STRING(100),
        field: 'domain',
        allowNull: false,
      },
      apiEndpoint: {
        type: DataTypes.STRING(100),
        field: 'api_endpoint',
        allowNull: false,
      },
      settings: {
        type: DataTypes.JSONB,
        field: 'settings',
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
      tableName: 'cpanels',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true,
      indexes: [
      { unique: true, fields: ['domain'] }
      ]
    }
  )
  return CpanelsEntity
}

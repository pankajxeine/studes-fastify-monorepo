import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type VerifoneLogsAttributes = {
  id: number
  apiName?: string | null
  request?: string | null
  response?: string | null
  endpointUrl?: string | null
  finished?: string
  createdAt: Date
  updatedAt: Date
}

export type VerifoneLogsCreationAttributes = Optional<VerifoneLogsAttributes, "apiName" | "request" | "response" | "endpointUrl" | "finished">

export class VerifoneLogsEntity
  extends Model<VerifoneLogsAttributes, VerifoneLogsCreationAttributes>
  implements VerifoneLogsAttributes
{
  declare id: number
  declare apiName: string | null
  declare request: string | null
  declare response: string | null
  declare endpointUrl: string | null
  declare finished: string
  declare createdAt: Date
  declare updatedAt: Date
}

export function initVerifoneLogsEntity(sequelize: Sequelize): typeof VerifoneLogsEntity {
  VerifoneLogsEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true,
      },
      apiName: {
        type: DataTypes.STRING(255),
        field: 'api_name',
        allowNull: true,
      },
      request: {
        type: DataTypes.TEXT,
        field: 'request',
        allowNull: true,
      },
      response: {
        type: DataTypes.TEXT,
        field: 'response',
        allowNull: true,
      },
      endpointUrl: {
        type: DataTypes.STRING(500),
        field: 'endpoint_url',
        allowNull: true,
      },
      finished: {
        type: DataTypes.TEXT,
        field: 'finished',
        allowNull: false,
        defaultValue: "N' CHECK (\"finished\" IN ('E",
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
      tableName: 'verifone_logs',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return VerifoneLogsEntity
}

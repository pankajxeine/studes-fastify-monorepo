import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type VerifoneEndpointsAttributes = {
  id: number
  apiName?: string | null
  endPoint?: string | null
  clientId?: string | null
  clientSecret?: string | null
  authToken?: string | null
  expiresIn?: string | null
  customerUid?: string | null
  webhookUid?: string | null
  webhookHeaders?: string | null
  webhookUrl?: string | null
  active?: string | null
  createdAt: Date
  updatedAt: Date
}

export type VerifoneEndpointsCreationAttributes = Optional<VerifoneEndpointsAttributes, "apiName" | "endPoint" | "clientId" | "clientSecret" | "authToken" | "expiresIn" | "customerUid" | "webhookUid" | "webhookHeaders" | "webhookUrl" | "active">

export class VerifoneEndpointsEntity
  extends Model<VerifoneEndpointsAttributes, VerifoneEndpointsCreationAttributes>
  implements VerifoneEndpointsAttributes
{
  declare id: number
  declare apiName: string | null
  declare endPoint: string | null
  declare clientId: string | null
  declare clientSecret: string | null
  declare authToken: string | null
  declare expiresIn: string | null
  declare customerUid: string | null
  declare webhookUid: string | null
  declare webhookHeaders: string | null
  declare webhookUrl: string | null
  declare active: string | null
  declare createdAt: Date
  declare updatedAt: Date
}

export function initVerifoneEndpointsEntity(sequelize: Sequelize): typeof VerifoneEndpointsEntity {
  VerifoneEndpointsEntity.init(
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
      endPoint: {
        type: DataTypes.TEXT,
        field: 'end_point',
        allowNull: true,
      },
      clientId: {
        type: DataTypes.STRING(255),
        field: 'client_id',
        allowNull: true,
      },
      clientSecret: {
        type: DataTypes.STRING(255),
        field: 'client_secret',
        allowNull: true,
      },
      authToken: {
        type: DataTypes.TEXT,
        field: 'auth_token',
        allowNull: true,
      },
      expiresIn: {
        type: DataTypes.STRING(20),
        field: 'expires_in',
        allowNull: true,
      },
      customerUid: {
        type: DataTypes.STRING(100),
        field: 'customer_uid',
        allowNull: true,
      },
      webhookUid: {
        type: DataTypes.STRING(100),
        field: 'webhook_uid',
        allowNull: true,
      },
      webhookHeaders: {
        type: DataTypes.STRING(500),
        field: 'webhook_headers',
        allowNull: true,
      },
      webhookUrl: {
        type: DataTypes.STRING(100),
        field: 'webhook_url',
        allowNull: true,
      },
      active: {
        type: DataTypes.TEXT,
        field: 'active',
        allowNull: true,
        defaultValue: "N' CHECK (\"active\" IN ('N",
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
      tableName: 'verifone_endpoints',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return VerifoneEndpointsEntity
}

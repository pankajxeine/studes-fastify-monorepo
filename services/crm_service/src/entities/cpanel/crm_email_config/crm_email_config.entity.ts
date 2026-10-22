import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CrmEmailConfigAttributes = {
  id?: string | number | null
  host: string
  port: number
  user: string
  pass: string
  from: string
  active?: string
  createdAt?: Date
  updatedAt?: Date
}

export type CrmEmailConfigCreationAttributes = Optional<CrmEmailConfigAttributes, "id" | "active" | "createdAt" | "updatedAt">

export class CrmEmailConfigEntity
  extends Model<CrmEmailConfigAttributes, CrmEmailConfigCreationAttributes>
  implements CrmEmailConfigAttributes
{
  declare id: string | number | null
  declare host: string
  declare port: number
  declare user: string
  declare pass: string
  declare from: string
  declare active: string
  declare createdAt: Date
  declare updatedAt: Date
}

export function initCrmEmailConfigEntity(sequelize: Sequelize): typeof CrmEmailConfigEntity {
  CrmEmailConfigEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      host: {
        type: DataTypes.STRING(100),
        field: 'host',
        allowNull: false,
      },
      port: {
        type: DataTypes.INTEGER,
        field: 'port',
        allowNull: false,
      },
      user: {
        type: DataTypes.STRING(100),
        field: 'user',
        allowNull: false,
      },
      pass: {
        type: DataTypes.STRING(100),
        field: 'pass',
        allowNull: false,
      },
      from: {
        type: DataTypes.STRING(100),
        field: 'from',
        allowNull: false,
      },
      active: {
        type: DataTypes.TEXT,
        field: 'active',
        allowNull: false,
        defaultValue: "FALSE",
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
      tableName: 'crm_email_config',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return CrmEmailConfigEntity
}

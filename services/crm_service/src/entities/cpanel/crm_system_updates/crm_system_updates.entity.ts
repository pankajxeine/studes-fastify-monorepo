import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CrmSystemUpdatesAttributes = {
  id?: string | number | null
  publishDate: Date
  subject: string
  description?: string | null
  status?: string
  createdBy: number
  updatedBy: number
  createdAt?: Date
  updatedAt?: Date
}

export type CrmSystemUpdatesCreationAttributes = Optional<CrmSystemUpdatesAttributes, "id" | "description" | "status" | "createdAt" | "updatedAt">

export class CrmSystemUpdatesEntity
  extends Model<CrmSystemUpdatesAttributes, CrmSystemUpdatesCreationAttributes>
  implements CrmSystemUpdatesAttributes
{
  declare id: string | number | null
  declare publishDate: Date
  declare subject: string
  declare description: string | null
  declare status: string
  declare createdBy: number
  declare updatedBy: number
  declare createdAt: Date
  declare updatedAt: Date
}

export function initCrmSystemUpdatesEntity(sequelize: Sequelize): typeof CrmSystemUpdatesEntity {
  CrmSystemUpdatesEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      publishDate: {
        type: DataTypes.DATE,
        field: 'publish_date',
        allowNull: false,
      },
      subject: {
        type: DataTypes.STRING(50),
        field: 'subject',
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING(100),
        field: 'description',
        allowNull: true,
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "Active",
      },
      createdBy: {
        type: DataTypes.INTEGER,
        field: 'created_by',
        allowNull: false,
      },
      updatedBy: {
        type: DataTypes.INTEGER,
        field: 'updated_by',
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
      tableName: 'crm_system_updates',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return CrmSystemUpdatesEntity
}

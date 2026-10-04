import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CrmSystemUpdatesAttributes = {
  id: number
  publishDate: Date
  subject: string
  description?: string | null
  status?: string
  createdBy: number
  updatedBy: number
  createdAt: Date
  updatedAt: Date
  deletedAt?: Date | null
}

export type CrmSystemUpdatesCreationAttributes = Optional<CrmSystemUpdatesAttributes, "description" | "status" | "deletedAt">

export class CrmSystemUpdatesEntity
  extends Model<CrmSystemUpdatesAttributes, CrmSystemUpdatesCreationAttributes>
  implements CrmSystemUpdatesAttributes
{
  declare id: number
  declare publishDate: Date
  declare subject: string
  declare description: string | null
  declare status: string
  declare createdBy: number
  declare updatedBy: number
  declare createdAt: Date
  declare updatedAt: Date
  declare deletedAt: Date | null
}

export function initCrmSystemUpdatesEntity(sequelize: Sequelize): typeof CrmSystemUpdatesEntity {
  CrmSystemUpdatesEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true,
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
        defaultValue: "'Active' CHECK (\n        \"status\" IN ('Active'",
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
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
      },
      deletedAt: {
        type: DataTypes.DATE,
        field: 'deleted_at',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'crm_system_updates',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return CrmSystemUpdatesEntity
}

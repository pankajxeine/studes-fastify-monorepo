import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PrimaryServiceRequestsAttributes = {
  id: number
  name: string
  createdBy?: number
  updatedBy?: number
  status?: string
  createdAt: Date
  updatedAt: Date
  deletedAt?: Date | null
}

export type PrimaryServiceRequestsCreationAttributes = Optional<PrimaryServiceRequestsAttributes, "createdBy" | "updatedBy" | "status" | "deletedAt">

export class PrimaryServiceRequestsEntity
  extends Model<PrimaryServiceRequestsAttributes, PrimaryServiceRequestsCreationAttributes>
  implements PrimaryServiceRequestsAttributes
{
  declare id: number
  declare name: string
  declare createdBy: number
  declare updatedBy: number
  declare status: string
  declare createdAt: Date
  declare updatedAt: Date
  declare deletedAt: Date | null
}

export function initPrimaryServiceRequestsEntity(sequelize: Sequelize): typeof PrimaryServiceRequestsEntity {
  PrimaryServiceRequestsEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(50),
        field: 'name',
        allowNull: false,
      },
      createdBy: {
        type: DataTypes.INTEGER,
        field: 'created_by',
        allowNull: false,
        defaultValue: "0",
      },
      updatedBy: {
        type: DataTypes.INTEGER,
        field: 'updated_by',
        allowNull: false,
        defaultValue: "0",
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "'Active' CHECK (\n        \"status\" IN ('Active'",
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
      tableName: 'primary_service_requests',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] },
      { unique: true, fields: ['uq_primary_service_requests_name', 'name'] }
      ]
    }
  )
  return PrimaryServiceRequestsEntity
}

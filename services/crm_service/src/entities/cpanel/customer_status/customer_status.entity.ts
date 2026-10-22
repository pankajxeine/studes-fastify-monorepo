import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CustomerStatusAttributes = {
  id?: string | number | null
  name?: string | null
  status?: string | null
  createdBy?: number | null
  hours?: number | null
  sequence?: number | null
  updatedBy?: number | null
  createdAt?: Date
  updatedAt?: Date
}

export type CustomerStatusCreationAttributes = Optional<CustomerStatusAttributes, "id" | "name" | "status" | "createdBy" | "hours" | "sequence" | "updatedBy" | "createdAt" | "updatedAt">

export class CustomerStatusEntity
  extends Model<CustomerStatusAttributes, CustomerStatusCreationAttributes>
  implements CustomerStatusAttributes
{
  declare id: string | number | null
  declare name: string | null
  declare status: string | null
  declare createdBy: number | null
  declare hours: number | null
  declare sequence: number | null
  declare updatedBy: number | null
  declare createdAt: Date
  declare updatedAt: Date
}

export function initCustomerStatusEntity(sequelize: Sequelize): typeof CustomerStatusEntity {
  CustomerStatusEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      name: {
        type: DataTypes.STRING(50),
        field: 'name',
        allowNull: true,
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: true,
        defaultValue: "Active",
      },
      createdBy: {
        type: DataTypes.TEXT,
        field: 'created_by',
        allowNull: true,
      },
      hours: {
        type: DataTypes.TEXT,
        field: 'hours',
        allowNull: true,
      },
      sequence: {
        type: DataTypes.TEXT,
        field: 'sequence',
        allowNull: true,
      },
      updatedBy: {
        type: DataTypes.TEXT,
        field: 'updated_by',
        allowNull: true,
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
      tableName: 'customer_status',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return CustomerStatusEntity
}

import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CustomerStatusAttributes = {
  id?: number
  name: string
  status?: string
  created_by: string
  hours: number
  sequence: number
  updated_by: string
  created_at: Date
  updated_at: Date
  deleted_at?: Date | null
}

export type CustomerStatusCreationAttributes = Optional<CustomerStatusAttributes, "id" | "status" | "deleted_at">

export class CustomerStatusEntity
  extends Model<CustomerStatusAttributes, CustomerStatusCreationAttributes>
  implements CustomerStatusAttributes
{
  declare id: number
  declare name: string
  declare status: string
  declare created_by: string
  declare hours: number
  declare sequence: number
  declare updated_by: string
  declare created_at: Date
  declare updated_at: Date
  declare deleted_at: Date | null
}

export function initCustomerStatusEntity(sequelize: Sequelize): typeof CustomerStatusEntity {
  CustomerStatusEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true ,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(50),
        field: 'name',
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM('active','inactive'),
        field: 'status',
        allowNull: false,
        defaultValue: "Active",
      },
      created_by: {
        type: DataTypes.STRING(50),
        field: 'created_by',
        allowNull: false,
      },
      hours: {
        type: DataTypes.INTEGER,
        field: 'hours',
        allowNull: false,
      },
      sequence: {
        type: DataTypes.INTEGER,
        field: 'sequence',
        allowNull: false,
      },
      updated_by: {
        type: DataTypes.STRING(50),
        field: 'updated_by',
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
      },
      updated_at: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
      },
      deleted_at: {
        type: DataTypes.DATE,
        field: 'deleted_at',
        allowNull: true,
        defaultValue: null,
      }
    },
    {
      sequelize,
      tableName: 'customer_status',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true
    }
  )
  return CustomerStatusEntity
}

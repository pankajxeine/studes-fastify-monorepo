import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CustomerStatusAttributes = {
  id?: number | null
  name?: string | null
  status?: string | null
  created_by?: number | null
  hours?: number | null
  sequence?: number | null
  updated_by?: string | null
  created_at?: string | null
  updated_at?: string | null
  deleted_at?: string | null
}

export type CustomerStatusCreationAttributes = Optional<CustomerStatusAttributes, "id" | "name" | "status" | "created_by" | "hours" | "sequence" | "updated_by" | "created_at" | "updated_at" | "deleted_at">

export class CustomerStatusEntity
  extends Model<CustomerStatusAttributes, CustomerStatusCreationAttributes>
  implements CustomerStatusAttributes
{
  declare id: number | null
  declare name: string | null
  declare status: string | null
  declare created_by: number | null
  declare hours: number | null
  declare sequence: number | null
  declare updated_by: string | null
  declare created_at: string | null
  declare updated_at: string | null
  declare deleted_at: string | null
}

export function initCustomerStatusEntity(sequelize: Sequelize): typeof CustomerStatusEntity {
  CustomerStatusEntity.init(
    {
      id: {
        type: DataTypes.TEXT,
        field: 'id',
        allowNull: true,
      },
      name: {
        type: DataTypes.CHAR,
        field: 'name',
        allowNull: true,
        defaultValue: null,
      },
      status: {
        type: DataTypes.CHAR,
        field: 'status',
        allowNull: true,
        defaultValue: null,
      },
      created_by: {
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
      updated_by: {
        type: DataTypes.CHAR,
        field: 'updated_by',
        allowNull: true,
        defaultValue: null,
      },
      created_at: {
        type: DataTypes.CHAR,
        field: 'created_at',
        allowNull: true,
        defaultValue: null,
      },
      updated_at: {
        type: DataTypes.CHAR,
        field: 'updated_at',
        allowNull: true,
        defaultValue: null,
      },
      deleted_at: {
        type: DataTypes.CHAR,
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

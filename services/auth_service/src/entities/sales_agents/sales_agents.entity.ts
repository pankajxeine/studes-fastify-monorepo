import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type SalesAgentsAttributes = {
  id?: number
  name: string
  address1: string
  address2: string
  notes: string
  city: string
  state_id: number
  country_id: number
  postal_code: string
  status?: string
  created_by: number
  updated_by: number
  created_at: Date
  updated_at: Date
  deleted_at?: Date | null
}

export type SalesAgentsCreationAttributes = Optional<SalesAgentsAttributes, "id" | "status" | "deleted_at">

export class SalesAgentsEntity
  extends Model<SalesAgentsAttributes, SalesAgentsCreationAttributes>
  implements SalesAgentsAttributes
{
  declare id: number
  declare name: string
  declare address1: string
  declare address2: string
  declare notes: string
  declare city: string
  declare state_id: number
  declare country_id: number
  declare postal_code: string
  declare status: string
  declare created_by: number
  declare updated_by: number
  declare created_at: Date
  declare updated_at: Date
  declare deleted_at: Date | null
}

export function initSalesAgentsEntity(sequelize: Sequelize): typeof SalesAgentsEntity {
  SalesAgentsEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true ,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(250),
        field: 'name',
        allowNull: false,
        unique: true,
      },
      address1: {
        type: DataTypes.STRING(50),
        field: 'address1',
        allowNull: false,
      },
      address2: {
        type: DataTypes.STRING(50),
        field: 'address2',
        allowNull: false,
      },
      notes: {
        type: DataTypes.STRING(250),
        field: 'notes',
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING(30),
        field: 'city',
        allowNull: false,
      },
      state_id: {
        type: DataTypes.INTEGER,
        field: 'state_id',
        allowNull: false,
      },
      country_id: {
        type: DataTypes.INTEGER,
        field: 'country_id',
        allowNull: false,
      },
      postal_code: {
        type: DataTypes.STRING(10),
        field: 'postal_code',
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM('active','inactive'),
        field: 'status',
        allowNull: false,
        defaultValue: "Active",
      },
      created_by: {
        type: DataTypes.INTEGER,
        field: 'created_by',
        allowNull: false,
      },
      updated_by: {
        type: DataTypes.INTEGER,
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
        unique: true,
        defaultValue: null,
      }
    },
    {
      sequelize,
      tableName: 'sales_agents',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true
    }
  )
  return SalesAgentsEntity
}

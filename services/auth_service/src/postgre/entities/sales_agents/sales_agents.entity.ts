import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type SalesAgentsAttributes = {
  id?: string | null
  name?: string | null
  address1?: string | null
  address2?: string | null
  notes?: string | null
  city?: string | null
  state_id?: string | null
  country_id?: string | null
  postal_code?: string | null
  status?: string | null
  created_by?: string | null
  updated_by?: string | null
  created_at?: string | null
  updated_at?: string | null
  deleted_at?: string | null
}

export type SalesAgentsCreationAttributes = Optional<SalesAgentsAttributes, "id" | "name" | "address1" | "address2" | "notes" | "city" | "state_id" | "country_id" | "postal_code" | "status" | "created_by" | "updated_by" | "created_at" | "updated_at" | "deleted_at">

export class SalesAgentsEntity
  extends Model<SalesAgentsAttributes, SalesAgentsCreationAttributes>
  implements SalesAgentsAttributes
{
  declare id: string | null
  declare name: string | null
  declare address1: string | null
  declare address2: string | null
  declare notes: string | null
  declare city: string | null
  declare state_id: string | null
  declare country_id: string | null
  declare postal_code: string | null
  declare status: string | null
  declare created_by: string | null
  declare updated_by: string | null
  declare created_at: string | null
  declare updated_at: string | null
  declare deleted_at: string | null
}

export function initSalesAgentsEntity(sequelize: Sequelize): typeof SalesAgentsEntity {
  SalesAgentsEntity.init(
    {
      id: {
        type: DataTypes.CHAR,
        field: 'id',
        allowNull: true,
        defaultValue: null,
      },
      name: {
        type: DataTypes.CHAR,
        field: 'name',
        allowNull: true,
        defaultValue: null,
      },
      address1: {
        type: DataTypes.CHAR,
        field: 'address1',
        allowNull: true,
        defaultValue: null,
      },
      address2: {
        type: DataTypes.CHAR,
        field: 'address2',
        allowNull: true,
        defaultValue: null,
      },
      notes: {
        type: DataTypes.CHAR,
        field: 'notes',
        allowNull: true,
        defaultValue: null,
      },
      city: {
        type: DataTypes.CHAR,
        field: 'city',
        allowNull: true,
        defaultValue: null,
      },
      state_id: {
        type: DataTypes.CHAR,
        field: 'state_id',
        allowNull: true,
        defaultValue: null,
      },
      country_id: {
        type: DataTypes.CHAR,
        field: 'country_id',
        allowNull: true,
        defaultValue: null,
      },
      postal_code: {
        type: DataTypes.CHAR,
        field: 'postal_code',
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
        type: DataTypes.CHAR,
        field: 'created_by',
        allowNull: true,
        defaultValue: null,
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
      tableName: 'sales_agents',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true
    }
  )
  return SalesAgentsEntity
}

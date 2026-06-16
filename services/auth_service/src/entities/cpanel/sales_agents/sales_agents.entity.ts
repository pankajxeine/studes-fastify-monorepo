import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type SalesAgentsAttributes = {
  id?: number | null
  name?: string | null
  address1?: string | null
  address2?: string | null
  notes?: string | null
  city?: string | null
  stateId?: number | null
  countryId?: number | null
  postalCode?: string | null
  status?: string
  createdBy?: number | null
  updatedBy?: number | null
  createdAt?: Date | null
  updatedAt?: Date | null
}

export type SalesAgentsCreationAttributes = Optional<SalesAgentsAttributes, "id" | "name" | "address1" | "address2" | "notes" | "city" | "stateId" | "countryId" | "postalCode" | "status" | "createdBy" | "updatedBy" | "createdAt" | "updatedAt">

export class SalesAgentsEntity
  extends Model<SalesAgentsAttributes, SalesAgentsCreationAttributes>
  implements SalesAgentsAttributes
{
  declare id: number | null
  declare name: string | null
  declare address1: string | null
  declare address2: string | null
  declare notes: string | null
  declare city: string | null
  declare stateId: number | null
  declare countryId: number | null
  declare postalCode: string | null
  declare status: string
  declare createdBy: number | null
  declare updatedBy: number | null
  declare createdAt: Date | null
  declare updatedAt: Date | null
}

export function initSalesAgentsEntity(sequelize: Sequelize): typeof SalesAgentsEntity {
  SalesAgentsEntity.init(
    {
      id: {
        type: DataTypes.TEXT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(100),
        field: 'name',
        allowNull: true,
      },
      address1: {
        type: DataTypes.STRING(100),
        field: 'address1',
        allowNull: true,
      },
      address2: {
        type: DataTypes.STRING(100),
        field: 'address2',
        allowNull: true,
      },
      notes: {
        type: DataTypes.STRING(200),
        field: 'notes',
        allowNull: true,
      },
      city: {
        type: DataTypes.STRING(30),
        field: 'city',
        allowNull: true,
      },
      stateId: {
        type: DataTypes.TEXT,
        field: 'state_id',
        allowNull: true,
      },
      countryId: {
        type: DataTypes.TEXT,
        field: 'country_id',
        allowNull: true,
      },
      postalCode: {
        type: DataTypes.STRING(10),
        field: 'postal_code',
        allowNull: true,
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "Active",
      },
      createdBy: {
        type: DataTypes.TEXT,
        field: 'created_by',
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
        allowNull: true,
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'sales_agents',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return SalesAgentsEntity
}

import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type BranchesAttributes = {
  id?: string | number | null
  name: string
  address1: string
  address2: string
  notes: string
  city: string
  stateId: string | number
  countryId: string | number
  postalCode: string
  status?: string
  createdBy: number
  updatedBy: number
  createdAt?: Date
  updatedAt?: Date
}

export type BranchesCreationAttributes = Optional<BranchesAttributes, "id" | "status" | "createdAt" | "updatedAt">

export class BranchesEntity
  extends Model<BranchesAttributes, BranchesCreationAttributes>
  implements BranchesAttributes
{
  declare id: string | number | null
  declare name: string
  declare address1: string
  declare address2: string
  declare notes: string
  declare city: string
  declare stateId: string | number
  declare countryId: string | number
  declare postalCode: string
  declare status: string
  declare createdBy: number
  declare updatedBy: number
  declare createdAt: Date
  declare updatedAt: Date
}

export function initBranchesEntity(sequelize: Sequelize): typeof BranchesEntity {
  BranchesEntity.init(
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
        type: DataTypes.STRING(250),
        field: 'name',
        allowNull: false,
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
      stateId: {
        type: DataTypes.BIGINT,
        field: 'state_id',
        allowNull: false,
        references: { model: 'states', key: 'id' },
      },
      countryId: {
        type: DataTypes.BIGINT,
        field: 'country_id',
        allowNull: false,
        references: { model: 'countries', key: 'id' },
      },
      postalCode: {
        type: DataTypes.STRING(10),
        field: 'postal_code',
        allowNull: false,
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
      tableName: 'branches',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] },
      { unique: true, fields: ['name'] }
      ]
    }
  )
  return BranchesEntity
}

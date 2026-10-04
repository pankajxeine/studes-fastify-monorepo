import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type BranchesAttributes = {
  id: number
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
  createdAt: Date
  updatedAt: Date
  deletedAt?: Date | null
}

export type BranchesCreationAttributes = Optional<BranchesAttributes, "status" | "deletedAt">

export class BranchesEntity
  extends Model<BranchesAttributes, BranchesCreationAttributes>
  implements BranchesAttributes
{
  declare id: number
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
  declare deletedAt: Date | null
}

export function initBranchesEntity(sequelize: Sequelize): typeof BranchesEntity {
  BranchesEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true,
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
      },
      countryId: {
        type: DataTypes.BIGINT,
        field: 'country_id',
        allowNull: false,
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
      tableName: 'branches',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] },
      { unique: true, fields: ['uq_branches_name_deleted_at', 'name', 'deleted_at'] }
      ]
    }
  )
  return BranchesEntity
}

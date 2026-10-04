import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type SubCompaniesAttributes = {
  id?: number
  subId: number
  customerId: number
  name: string
  email: string
  timezoneId?: number | null
  address1?: string | null
  address2?: string | null
  countryId?: number | null
  stateId?: number | null
  city: string
  postalCode: string
  phone: string
  website?: string | null
  createdAt: Date
  updatedAt?: Date | null
  createdBy: number
}

export type SubCompaniesCreationAttributes = Optional<SubCompaniesAttributes, "id" | "timezoneId" | "address1" | "address2" | "countryId" | "stateId" | "website" | "updatedAt">

export class SubCompaniesEntity
  extends Model<SubCompaniesAttributes, SubCompaniesCreationAttributes>
  implements SubCompaniesAttributes
{
  declare id: number
  declare subId: number
  declare customerId: number
  declare name: string
  declare email: string
  declare timezoneId: number | null
  declare address1: string | null
  declare address2: string | null
  declare countryId: number | null
  declare stateId: number | null
  declare city: string
  declare postalCode: string
  declare phone: string
  declare website: string | null
  declare createdAt: Date
  declare updatedAt: Date | null
  declare createdBy: number
}

export function initSubCompaniesEntity(sequelize: Sequelize): typeof SubCompaniesEntity {
  SubCompaniesEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      subId: {
        type: DataTypes.INTEGER,
        field: 'sub_id',
        allowNull: false,
      },
      customerId: {
        type: DataTypes.INTEGER,
        field: 'customer_id',
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(100),
        field: 'name',
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(256),
        field: 'email',
        allowNull: false,
      },
      timezoneId: {
        type: DataTypes.INTEGER,
        field: 'timezone_id',
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
      countryId: {
        type: DataTypes.INTEGER,
        field: 'country_id',
        allowNull: true,
      },
      stateId: {
        type: DataTypes.INTEGER,
        field: 'state_id',
        allowNull: true,
      },
      city: {
        type: DataTypes.STRING(50),
        field: 'city',
        allowNull: false,
      },
      postalCode: {
        type: DataTypes.STRING(10),
        field: 'postal_code',
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING(20),
        field: 'phone',
        allowNull: false,
      },
      website: {
        type: DataTypes.STRING(50),
        field: 'website',
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: true,
      },
      createdBy: {
        type: DataTypes.INTEGER,
        field: 'created_by',
        allowNull: false,
      }
    },
    {
      sequelize,
      tableName: 'sub_companies',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return SubCompaniesEntity
}

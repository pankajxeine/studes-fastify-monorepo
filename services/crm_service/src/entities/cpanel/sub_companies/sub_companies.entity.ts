import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type SubCompaniesAttributes = {
  id?: string | number | null
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
  createdAt?: Date
  updatedAt?: Date
  createdBy: number
}

export type SubCompaniesCreationAttributes = Optional<SubCompaniesAttributes, "id" | "timezoneId" | "address1" | "address2" | "countryId" | "stateId" | "website" | "createdAt" | "updatedAt">

export class SubCompaniesEntity
  extends Model<SubCompaniesAttributes, SubCompaniesCreationAttributes>
  implements SubCompaniesAttributes
{
  declare id: string | number | null
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
  declare updatedAt: Date
  declare createdBy: number
}

export function initSubCompaniesEntity(sequelize: Sequelize): typeof SubCompaniesEntity {
  SubCompaniesEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      subId: {
        type: DataTypes.INTEGER,
        field: 'sub_id',
        allowNull: false,
        references: { model: 'subs', key: 'id' },
      },
      customerId: {
        type: DataTypes.INTEGER,
        field: 'customer_id',
        allowNull: false,
        references: { model: 'customers', key: 'id' },
      },
      name: {
        type: DataTypes.STRING(100),
        field: 'name',
        allowNull: false,
      },
      email: {
        type: DataTypes.TEXT,
        field: 'email',
        allowNull: false,
      },
      timezoneId: {
        type: DataTypes.INTEGER,
        field: 'timezone_id',
        allowNull: true,
        references: { model: 'timezones', key: 'id' },
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
        references: { model: 'states', key: 'id' },
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
        type: DataTypes.TEXT,
        field: 'phone',
        allowNull: false,
      },
      website: {
        type: DataTypes.TEXT,
        field: 'website',
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
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return SubCompaniesEntity
}

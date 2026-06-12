import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CustomersAttributes = {
  id?: number
  name: string
  contact_title?: string | null
  customer_type?: string | null
  contact_name: string
  customer_status_id: number
  created_by: number
  updated_by: number
  customer_number: string
  type?: string
  customer_email: string
  client_email?: string | null
  dba: string
  contract_start_date?: Date | null
  contract_expire_date?: Date | null
  cost_center: string
  city: string
  state_id: number
  country_id: number
  postal_code: string
  phone_number: string
  street_address: string
  chain_number: string
  sic_code?: string | null
  branch_id: number
  status?: string
  hours_elapsed?: number
  minutes_elapsed?: number
  is_new_client?: string
  allow_package_upgrade?: string | null
  created_at: Date
  updated_at: Date
  deleted_at?: Date | null
}

export type CustomersCreationAttributes = Optional<CustomersAttributes, "id" | "contact_title" | "customer_type" | "type" | "client_email" | "contract_start_date" | "contract_expire_date" | "sic_code" | "status" | "hours_elapsed" | "minutes_elapsed" | "is_new_client" | "allow_package_upgrade" | "deleted_at">

export class CustomersEntity
  extends Model<CustomersAttributes, CustomersCreationAttributes>
  implements CustomersAttributes
{
  declare id: number
  declare name: string
  declare contact_title: string | null
  declare customer_type: string | null
  declare contact_name: string
  declare customer_status_id: number
  declare created_by: number
  declare updated_by: number
  declare customer_number: string
  declare type: string
  declare customer_email: string
  declare client_email: string | null
  declare dba: string
  declare contract_start_date: Date | null
  declare contract_expire_date: Date | null
  declare cost_center: string
  declare city: string
  declare state_id: number
  declare country_id: number
  declare postal_code: string
  declare phone_number: string
  declare street_address: string
  declare chain_number: string
  declare sic_code: string | null
  declare branch_id: number
  declare status: string
  declare hours_elapsed: number
  declare minutes_elapsed: number
  declare is_new_client: string
  declare allow_package_upgrade: string | null
  declare created_at: Date
  declare updated_at: Date
  declare deleted_at: Date | null
}

export function initCustomersEntity(sequelize: Sequelize): typeof CustomersEntity {
  CustomersEntity.init(
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
      contact_title: {
        type: DataTypes.ENUM('business','owner','personal'),
        field: 'contact_title',
        allowNull: true,
        defaultValue: null,
      },
      customer_type: {
        type: DataTypes.ENUM('smallmerchant'),
        field: 'customer_type',
        allowNull: true,
        defaultValue: null,
      },
      contact_name: {
        type: DataTypes.STRING(100),
        field: 'contact_name',
        allowNull: false,
      },
      customer_status_id: {
        type: DataTypes.INTEGER,
        field: 'customer_status_id',
        allowNull: false,
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
      customer_number: {
        type: DataTypes.STRING(15),
        field: 'customer_number',
        allowNull: false,
      },
      type: {
        type: DataTypes.ENUM('commercial','retail'),
        field: 'type',
        allowNull: false,
        defaultValue: "Commercial",
      },
      customer_email: {
        type: DataTypes.STRING(256),
        field: 'customer_email',
        allowNull: false,
      },
      client_email: {
        type: DataTypes.STRING(256),
        field: 'client_email',
        allowNull: true,
        defaultValue: "",
      },
      dba: {
        type: DataTypes.STRING(50),
        field: 'dba',
        allowNull: false,
      },
      contract_start_date: {
        type: DataTypes.DATEONLY,
        field: 'contract_start_date',
        allowNull: true,
        defaultValue: null,
      },
      contract_expire_date: {
        type: DataTypes.DATEONLY,
        field: 'contract_expire_date',
        allowNull: true,
        defaultValue: null,
      },
      cost_center: {
        type: DataTypes.STRING(50),
        field: 'cost_center',
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING(50),
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
      phone_number: {
        type: DataTypes.STRING(10),
        field: 'phone_number',
        allowNull: false,
      },
      street_address: {
        type: DataTypes.STRING(50),
        field: 'street_address',
        allowNull: false,
      },
      chain_number: {
        type: DataTypes.STRING(15),
        field: 'chain_number',
        allowNull: false,
      },
      sic_code: {
        type: DataTypes.STRING(4),
        field: 'sic_code',
        allowNull: true,
        defaultValue: null,
      },
      branch_id: {
        type: DataTypes.INTEGER,
        field: 'branch_id',
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM('active','inactive'),
        field: 'status',
        allowNull: false,
        defaultValue: "Active",
      },
      hours_elapsed: {
        type: DataTypes.INTEGER,
        field: 'hours_elapsed',
        allowNull: false,
        defaultValue: "0",
      },
      minutes_elapsed: {
        type: DataTypes.INTEGER,
        field: 'minutes_elapsed',
        allowNull: false,
        defaultValue: "0",
      },
      is_new_client: {
        type: DataTypes.ENUM('yes','no'),
        field: 'is_new_client',
        allowNull: false,
        defaultValue: "No",
      },
      allow_package_upgrade: {
        type: DataTypes.ENUM('no','yes'),
        field: 'allow_package_upgrade',
        allowNull: true,
        defaultValue: "No",
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
      tableName: 'customers',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true
    }
  )
  return CustomersEntity
}

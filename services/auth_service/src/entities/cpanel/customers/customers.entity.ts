import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CustomersAttributes = {
  id?: number | null
  name?: string | null
  contactTitle?: string | null
  customerType?: string | null
  contactName?: string | null
  customerStatusId?: number | null
  createdBy?: number | null
  updatedBy?: number | null
  customerNumber?: string | null
  type?: string | null
  customerEmail?: string | null
  clientEmail?: string | null
  dba?: string | null
  contractStartDate?: string | null
  contractExpireDate?: string | null
  costCenter?: string | null
  city?: string | null
  stateId?: number | null
  countryId?: number | null
  postalCode?: number | null
  phoneNumber?: string | number | null
  streetAddress?: string | null
  chainNumber?: string | null
  sicCode?: number | null
  branchId?: number | null
  status?: string | null
  hoursElapsed?: number | null
  minutesElapsed?: number | null
  isNewClient?: string | null
  allowPackageUpgrade?: string | null
  createdAt?: Date | null
  updatedAt?: Date | null
  deletedAt?: Date | null
}

export type CustomersCreationAttributes = Optional<CustomersAttributes, "id" | "name" | "contactTitle" | "customerType" | "contactName" | "customerStatusId" | "createdBy" | "updatedBy" | "customerNumber" | "type" | "customerEmail" | "clientEmail" | "dba" | "contractStartDate" | "contractExpireDate" | "costCenter" | "city" | "stateId" | "countryId" | "postalCode" | "phoneNumber" | "streetAddress" | "chainNumber" | "sicCode" | "branchId" | "status" | "hoursElapsed" | "minutesElapsed" | "isNewClient" | "allowPackageUpgrade" | "createdAt" | "updatedAt" | "deletedAt">

export class CustomersEntity
  extends Model<CustomersAttributes, CustomersCreationAttributes>
  implements CustomersAttributes
{
  declare id: number | null
  declare name: string | null
  declare contactTitle: string | null
  declare customerType: string | null
  declare contactName: string | null
  declare customerStatusId: number | null
  declare createdBy: number | null
  declare updatedBy: number | null
  declare customerNumber: string | null
  declare type: string | null
  declare customerEmail: string | null
  declare clientEmail: string | null
  declare dba: string | null
  declare contractStartDate: string | null
  declare contractExpireDate: string | null
  declare costCenter: string | null
  declare city: string | null
  declare stateId: number | null
  declare countryId: number | null
  declare postalCode: number | null
  declare phoneNumber: string | number | null
  declare streetAddress: string | null
  declare chainNumber: string | null
  declare sicCode: number | null
  declare branchId: number | null
  declare status: string | null
  declare hoursElapsed: number | null
  declare minutesElapsed: number | null
  declare isNewClient: string | null
  declare allowPackageUpgrade: string | null
  declare createdAt: Date | null
  declare updatedAt: Date | null
  declare deletedAt: Date | null
}

export function initCustomersEntity(sequelize: Sequelize): typeof CustomersEntity {
  CustomersEntity.init(
    {
      id: {
        type: DataTypes.TEXT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.CHAR(50),
        field: 'name',
        allowNull: true,
      },
      contactTitle: {
        type: DataTypes.CHAR(20),
        field: 'contact_title',
        allowNull: true,
      },
      customerType: {
        type: DataTypes.CHAR(10),
        field: 'customer_type',
        allowNull: true,
      },
      contactName: {
        type: DataTypes.CHAR(50),
        field: 'contact_name',
        allowNull: true,
      },
      customerStatusId: {
        type: DataTypes.TEXT,
        field: 'customer_status_id',
        allowNull: true,
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
      customerNumber: {
        type: DataTypes.CHAR(10),
        field: 'customer_number',
        allowNull: true,
      },
      type: {
        type: DataTypes.CHAR(10),
        field: 'type',
        allowNull: true,
      },
      customerEmail: {
        type: DataTypes.CHAR(150),
        field: 'customer_email',
        allowNull: true,
      },
      clientEmail: {
        type: DataTypes.CHAR(150),
        field: 'client_email',
        allowNull: true,
      },
      dba: {
        type: DataTypes.CHAR(50),
        field: 'dba',
        allowNull: true,
      },
      contractStartDate: {
        type: DataTypes.TEXT,
        field: 'contract_start_date',
        allowNull: true,
      },
      contractExpireDate: {
        type: DataTypes.TEXT,
        field: 'contract_expire_date',
        allowNull: true,
      },
      costCenter: {
        type: DataTypes.CHAR(30),
        field: 'cost_center',
        allowNull: true,
      },
      city: {
        type: DataTypes.CHAR(30),
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
        type: DataTypes.INTEGER,
        field: 'postal_code',
        allowNull: true,
      },
      phoneNumber: {
        type: DataTypes.BIGINT,
        field: 'phone_number',
        allowNull: true,
      },
      streetAddress: {
        type: DataTypes.CHAR(22),
        field: 'street_address',
        allowNull: true,
      },
      chainNumber: {
        type: DataTypes.CHAR(20),
        field: 'chain_number',
        allowNull: true,
      },
      sicCode: {
        type: DataTypes.TEXT,
        field: 'sic_code',
        allowNull: true,
      },
      branchId: {
        type: DataTypes.TEXT,
        field: 'branch_id',
        allowNull: true,
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: true,
        defaultValue: "Active",
      },
      hoursElapsed: {
        type: DataTypes.TEXT,
        field: 'hours_elapsed',
        allowNull: true,
        defaultValue: 0,
      },
      minutesElapsed: {
        type: DataTypes.TEXT,
        field: 'minutes_elapsed',
        allowNull: true,
        defaultValue: 0,
      },
      isNewClient: {
        type: DataTypes.TEXT,
        field: 'is_new_client',
        allowNull: true,
        defaultValue: "No",
      },
      allowPackageUpgrade: {
        type: DataTypes.TEXT,
        field: 'allow_package_upgrade',
        allowNull: true,
        defaultValue: "No",
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
      },
      deletedAt: {
        type: DataTypes.DATE,
        field: 'deleted_at',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'customers',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return CustomersEntity
}

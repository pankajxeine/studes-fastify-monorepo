import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type InstitutesAttributes = {
  id?: number | null
  name?: string | null
  schema_name?: string | null
  institute_type?: string | null
  registration_number?: string | null
  principal_name?: string | null
  email?: string | null
  phone?: string | null
  address?: string | null
  city?: string | null
  state?: string | null
  postal_code?: number | null
  country?: string | null
  description?: string | null
  settings?: string | null
  status?: string | null
  activation_date?: string | null
  created_at?: string | null
  updated_at?: string | null
}

export type InstitutesCreationAttributes = Optional<InstitutesAttributes, "id" | "name" | "schema_name" | "institute_type" | "registration_number" | "principal_name" | "email" | "phone" | "address" | "city" | "state" | "postal_code" | "country" | "description" | "settings" | "status" | "activation_date" | "created_at" | "updated_at">

export class InstitutesEntity
  extends Model<InstitutesAttributes, InstitutesCreationAttributes>
  implements InstitutesAttributes
{
  declare id: number | null
  declare name: string | null
  declare schema_name: string | null
  declare institute_type: string | null
  declare registration_number: string | null
  declare principal_name: string | null
  declare email: string | null
  declare phone: string | null
  declare address: string | null
  declare city: string | null
  declare state: string | null
  declare postal_code: number | null
  declare country: string | null
  declare description: string | null
  declare settings: string | null
  declare status: string | null
  declare activation_date: string | null
  declare created_at: string | null
  declare updated_at: string | null
}

export function initInstitutesEntity(sequelize: Sequelize): typeof InstitutesEntity {
  InstitutesEntity.init(
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
      schema_name: {
        type: DataTypes.CHAR,
        field: 'schema_name',
        allowNull: true,
        defaultValue: null,
      },
      institute_type: {
        type: DataTypes.CHAR,
        field: 'institute_type',
        allowNull: true,
        defaultValue: null,
      },
      registration_number: {
        type: DataTypes.CHAR,
        field: 'registration_number',
        allowNull: true,
        defaultValue: null,
      },
      principal_name: {
        type: DataTypes.CHAR,
        field: 'principal_name',
        allowNull: true,
        defaultValue: null,
      },
      email: {
        type: DataTypes.CHAR,
        field: 'email',
        allowNull: true,
        defaultValue: null,
      },
      phone: {
        type: DataTypes.CHAR,
        field: 'phone',
        allowNull: true,
        defaultValue: null,
      },
      address: {
        type: DataTypes.CHAR,
        field: 'address',
        allowNull: true,
        defaultValue: null,
      },
      city: {
        type: DataTypes.CHAR,
        field: 'city',
        allowNull: true,
        defaultValue: null,
      },
      state: {
        type: DataTypes.CHAR,
        field: 'state',
        allowNull: true,
        defaultValue: null,
      },
      postal_code: {
        type: DataTypes.INTEGER,
        field: 'postal_code',
        allowNull: true,
      },
      country: {
        type: DataTypes.CHAR,
        field: 'country',
        allowNull: true,
        defaultValue: null,
      },
      description: {
        type: DataTypes.CHAR,
        field: 'description',
        allowNull: true,
        defaultValue: null,
      },
      settings: {
        type: DataTypes.CHAR,
        field: 'settings',
        allowNull: true,
        defaultValue: null,
      },
      status: {
        type: DataTypes.CHAR,
        field: 'status',
        allowNull: true,
        defaultValue: null,
      },
      activation_date: {
        type: DataTypes.CHAR,
        field: 'activation_date',
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
      }
    },
    {
      sequelize,
      tableName: 'institutes',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true
    }
  )
  return InstitutesEntity
}

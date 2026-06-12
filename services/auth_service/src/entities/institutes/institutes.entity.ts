import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type InstitutesAttributes = {
  id?: number
  name: string
  schema_name: string
  institute_type: string
  registration_number?: string | null
  principal_name?: string | null
  email: string
  phone: string
  address?: string | null
  city?: string | null
  state?: string | null
  postal_code?: string | null
  country?: string | null
  description?: string | null
  settings?: unknown | null
  status?: string
  activation_date?: Date | null
  created_at?: Date
  updated_at?: Date
}

export type InstitutesCreationAttributes = Optional<InstitutesAttributes, "id" | "registration_number" | "principal_name" | "address" | "city" | "state" | "postal_code" | "country" | "description" | "settings" | "status" | "activation_date" | "created_at" | "updated_at">

export class InstitutesEntity
  extends Model<InstitutesAttributes, InstitutesCreationAttributes>
  implements InstitutesAttributes
{
  declare id: number
  declare name: string
  declare schema_name: string
  declare institute_type: string
  declare registration_number: string | null
  declare principal_name: string | null
  declare email: string
  declare phone: string
  declare address: string | null
  declare city: string | null
  declare state: string | null
  declare postal_code: string | null
  declare country: string | null
  declare description: string | null
  declare settings: unknown | null
  declare status: string
  declare activation_date: Date | null
  declare created_at: Date
  declare updated_at: Date
}

export function initInstitutesEntity(sequelize: Sequelize): typeof InstitutesEntity {
  InstitutesEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true ,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(200),
        field: 'name',
        allowNull: false,
      },
      schema_name: {
        type: DataTypes.STRING(150),
        field: 'schema_name',
        allowNull: false,
        unique: true,
      },
      institute_type: {
        type: DataTypes.ENUM('school','college','university','coaching center'),
        field: 'institute_type',
        allowNull: false,
      },
      registration_number: {
        type: DataTypes.STRING(100),
        field: 'registration_number',
        allowNull: true,
        defaultValue: null,
      },
      principal_name: {
        type: DataTypes.STRING(150),
        field: 'principal_name',
        allowNull: true,
        defaultValue: null,
      },
      email: {
        type: DataTypes.STRING(100),
        field: 'email',
        allowNull: false,
        unique: true,
      },
      phone: {
        type: DataTypes.STRING(20),
        field: 'phone',
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING(500),
        field: 'address',
        allowNull: true,
        defaultValue: null,
      },
      city: {
        type: DataTypes.STRING(100),
        field: 'city',
        allowNull: true,
        defaultValue: null,
      },
      state: {
        type: DataTypes.STRING(100),
        field: 'state',
        allowNull: true,
        defaultValue: null,
      },
      postal_code: {
        type: DataTypes.STRING(20),
        field: 'postal_code',
        allowNull: true,
        defaultValue: null,
      },
      country: {
        type: DataTypes.STRING(100),
        field: 'country',
        allowNull: true,
        defaultValue: null,
      },
      description: {
        type: DataTypes.TEXT,
        field: 'description',
        allowNull: true,
      },
      settings: {
        type: DataTypes.JSON,
        field: 'settings',
        allowNull: true,
        defaultValue: null,
      },
      status: {
        type: DataTypes.ENUM('active','inactive','pending','suspended'),
        field: 'status',
        allowNull: false,
        defaultValue: "Pending",
      },
      activation_date: {
        type: DataTypes.DATE,
        field: 'activation_date',
        allowNull: true,
        defaultValue: null,
      },
      created_at: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updated_at: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
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

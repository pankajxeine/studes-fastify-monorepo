import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type InstitutesAttributes = {
  id?: number | null
  name?: string | null
  schemaName?: string | null
  instituteType?: string | null
  registrationNumber?: string | null
  principalName?: string | null
  email?: string | null
  phone?: string | null
  address?: string | null
  city?: string | null
  state?: string | null
  postalCode?: number | null
  country?: string | null
  description?: string | null
  settings?: unknown | null
  status?: string | null
  activationDate?: Date | null
  createdAt?: Date | null
  updatedAt?: Date | null
}

export type InstitutesCreationAttributes = Optional<InstitutesAttributes, "id" | "name" | "schemaName" | "instituteType" | "registrationNumber" | "principalName" | "email" | "phone" | "address" | "city" | "state" | "postalCode" | "country" | "description" | "settings" | "status" | "activationDate" | "createdAt" | "updatedAt">

export class InstitutesEntity
  extends Model<InstitutesAttributes, InstitutesCreationAttributes>
  implements InstitutesAttributes
{
  declare id: number | null
  declare name: string | null
  declare schemaName: string | null
  declare instituteType: string | null
  declare registrationNumber: string | null
  declare principalName: string | null
  declare email: string | null
  declare phone: string | null
  declare address: string | null
  declare city: string | null
  declare state: string | null
  declare postalCode: number | null
  declare country: string | null
  declare description: string | null
  declare settings: unknown | null
  declare status: string | null
  declare activationDate: Date | null
  declare createdAt: Date | null
  declare updatedAt: Date | null
}

export function initInstitutesEntity(sequelize: Sequelize): typeof InstitutesEntity {
  InstitutesEntity.init(
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
      schemaName: {
        type: DataTypes.CHAR(23),
        field: 'schema_name',
        allowNull: true,
      },
      instituteType: {
        type: DataTypes.CHAR(15),
        field: 'institute_type',
        allowNull: true,
      },
      registrationNumber: {
        type: DataTypes.CHAR(12),
        field: 'registration_number',
        allowNull: true,
      },
      principalName: {
        type: DataTypes.CHAR(18),
        field: 'principal_name',
        allowNull: true,
      },
      email: {
        type: DataTypes.CHAR(50),
        field: 'email',
        allowNull: true,
      },
      phone: {
        type: DataTypes.CHAR(15),
        field: 'phone',
        allowNull: true,
      },
      address: {
        type: DataTypes.CHAR(50),
        field: 'address',
        allowNull: true,
      },
      city: {
        type: DataTypes.CHAR(50),
        field: 'city',
        allowNull: true,
      },
      state: {
        type: DataTypes.CHAR(50),
        field: 'state',
        allowNull: true,
      },
      postalCode: {
        type: DataTypes.INTEGER,
        field: 'postal_code',
        allowNull: true,
      },
      country: {
        type: DataTypes.CHAR(50),
        field: 'country',
        allowNull: true,
      },
      description: {
        type: DataTypes.CHAR(200),
        field: 'description',
        allowNull: true,
      },
      settings: {
        type: DataTypes.JSONB,
        field: 'settings',
        allowNull: true,
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: true,
        defaultValue: "Active",
      },
      activationDate: {
        type: DataTypes.DATEONLY,
        field: 'activation_date',
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
      tableName: 'institutes',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return InstitutesEntity
}

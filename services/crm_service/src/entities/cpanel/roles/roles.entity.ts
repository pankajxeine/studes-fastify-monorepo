import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type RolesAttributes = {
  id?: string | number | null
  name?: string | null
  description?: string | null
  status?: string
  isAdmin?: string
  createdAt?: Date
  updatedAt?: Date
}

export type RolesCreationAttributes = Optional<RolesAttributes, "id" | "name" | "description" | "status" | "isAdmin" | "createdAt" | "updatedAt">

export class RolesEntity
  extends Model<RolesAttributes, RolesCreationAttributes>
  implements RolesAttributes
{
  declare id: string | number | null
  declare name: string | null
  declare description: string | null
  declare status: string
  declare isAdmin: string
  declare createdAt: Date
  declare updatedAt: Date
}

export function initRolesEntity(sequelize: Sequelize): typeof RolesEntity {
  RolesEntity.init(
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
        type: DataTypes.STRING(50),
        field: 'name',
        allowNull: true,
      },
      description: {
        type: DataTypes.STRING(300),
        field: 'description',
        allowNull: true,
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "Active",
      },
      isAdmin: {
        type: DataTypes.TEXT,
        field: 'is_admin',
        allowNull: false,
        defaultValue: "FALSE",
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
      tableName: 'roles',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return RolesEntity
}

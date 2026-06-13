import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type RolesAttributes = {
  id?: number | null
  name?: string | null
  description?: string | null
  status?: string | null
  is_admin?: number | null
  created_at?: string | null
  updated_at?: string | null
}

export type RolesCreationAttributes = Optional<RolesAttributes, "id" | "name" | "description" | "status" | "is_admin" | "created_at" | "updated_at">

export class RolesEntity
  extends Model<RolesAttributes, RolesCreationAttributes>
  implements RolesAttributes
{
  declare id: number | null
  declare name: string | null
  declare description: string | null
  declare status: string | null
  declare is_admin: number | null
  declare created_at: string | null
  declare updated_at: string | null
}

export function initRolesEntity(sequelize: Sequelize): typeof RolesEntity {
  RolesEntity.init(
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
      description: {
        type: DataTypes.CHAR,
        field: 'description',
        allowNull: true,
        defaultValue: null,
      },
      status: {
        type: DataTypes.CHAR,
        field: 'status',
        allowNull: true,
        defaultValue: null,
      },
      is_admin: {
        type: DataTypes.TEXT,
        field: 'is_admin',
        allowNull: true,
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
      tableName: 'roles',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true
    }
  )
  return RolesEntity
}

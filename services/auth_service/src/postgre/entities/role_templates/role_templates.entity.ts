import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type RoleTemplatesAttributes = {
  id?: number | null
  name?: string | null
  description?: string | null
  status?: string | null
  created_at?: string | null
  updated_at?: string | null
}

export type RoleTemplatesCreationAttributes = Optional<RoleTemplatesAttributes, "id" | "name" | "description" | "status" | "created_at" | "updated_at">

export class RoleTemplatesEntity
  extends Model<RoleTemplatesAttributes, RoleTemplatesCreationAttributes>
  implements RoleTemplatesAttributes
{
  declare id: number | null
  declare name: string | null
  declare description: string | null
  declare status: string | null
  declare created_at: string | null
  declare updated_at: string | null
}

export function initRoleTemplatesEntity(sequelize: Sequelize): typeof RoleTemplatesEntity {
  RoleTemplatesEntity.init(
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
      tableName: 'role_templates',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true
    }
  )
  return RoleTemplatesEntity
}

import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type RoleTemplatesAttributes = {
  id?: number | null
  name?: string | null
  description?: string | null
  status?: string
  createdAt?: Date | null
  updatedAt?: Date | null
}

export type RoleTemplatesCreationAttributes = Optional<RoleTemplatesAttributes, "id" | "name" | "description" | "status" | "createdAt" | "updatedAt">

export class RoleTemplatesEntity
  extends Model<RoleTemplatesAttributes, RoleTemplatesCreationAttributes>
  implements RoleTemplatesAttributes
{
  declare id: number | null
  declare name: string | null
  declare description: string | null
  declare status: string
  declare createdAt: Date | null
  declare updatedAt: Date | null
}

export function initRoleTemplatesEntity(sequelize: Sequelize): typeof RoleTemplatesEntity {
  RoleTemplatesEntity.init(
    {
      id: {
        type: DataTypes.TEXT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(50),
        field: 'name',
        allowNull: true,
      },
      description: {
        type: DataTypes.STRING(200),
        field: 'description',
        allowNull: true,
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "Active",
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
      tableName: 'role_templates',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] },
      { unique: true, fields: ['name'] }
      ]
    }
  )
  return RoleTemplatesEntity
}

import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type RoleTemplatesAttributes = {
  id?: string | number | null
  name?: string | null
  description?: string | null
  status?: string
  createdAt?: Date
  updatedAt?: Date
}

export type RoleTemplatesCreationAttributes = Optional<RoleTemplatesAttributes, "id" | "name" | "description" | "status" | "createdAt" | "updatedAt">

export class RoleTemplatesEntity
  extends Model<RoleTemplatesAttributes, RoleTemplatesCreationAttributes>
  implements RoleTemplatesAttributes
{
  declare id: string | number | null
  declare name: string | null
  declare description: string | null
  declare status: string
  declare createdAt: Date
  declare updatedAt: Date
}

export function initRoleTemplatesEntity(sequelize: Sequelize): typeof RoleTemplatesEntity {
  RoleTemplatesEntity.init(
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
      tableName: 'role_templates',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] },
      { unique: true, fields: ['name'] }
      ]
    }
  )
  return RoleTemplatesEntity
}

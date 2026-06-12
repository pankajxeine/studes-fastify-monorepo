import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type RoleTemplatesAttributes = {
  id?: number
  name: string
  description?: string | null
  status?: string
  created_at: Date
  updated_at: Date
}

export type RoleTemplatesCreationAttributes = Optional<RoleTemplatesAttributes, "id" | "description" | "status">

export class RoleTemplatesEntity
  extends Model<RoleTemplatesAttributes, RoleTemplatesCreationAttributes>
  implements RoleTemplatesAttributes
{
  declare id: number
  declare name: string
  declare description: string | null
  declare status: string
  declare created_at: Date
  declare updated_at: Date
}

export function initRoleTemplatesEntity(sequelize: Sequelize): typeof RoleTemplatesEntity {
  RoleTemplatesEntity.init(
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
        unique: true,
      },
      description: {
        type: DataTypes.STRING(200),
        field: 'description',
        allowNull: true,
        defaultValue: null,
      },
      status: {
        type: DataTypes.ENUM('active','inactive'),
        field: 'status',
        allowNull: false,
        defaultValue: "Active",
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
      }
    },
    {
      sequelize,
      tableName: 'role_templates',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true,
      comment: 'role templates'
    }
  )
  return RoleTemplatesEntity
}

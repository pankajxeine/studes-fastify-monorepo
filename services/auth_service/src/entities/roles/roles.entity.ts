import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type RolesAttributes = {
  id?: number
  name: string
  description: string
  status?: string
  is_admin?: string
  created_at: Date
  updated_at: Date
}

export type RolesCreationAttributes = Optional<RolesAttributes, "id" | "status" | "is_admin">

export class RolesEntity
  extends Model<RolesAttributes, RolesCreationAttributes>
  implements RolesAttributes
{
  declare id: number
  declare name: string
  declare description: string
  declare status: string
  declare is_admin: string
  declare created_at: Date
  declare updated_at: Date
}

export function initRolesEntity(sequelize: Sequelize): typeof RolesEntity {
  RolesEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true ,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(30),
        field: 'name',
        allowNull: false,
        unique: true,
      },
      description: {
        type: DataTypes.STRING(100),
        field: 'description',
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM('active','inactive'),
        field: 'status',
        allowNull: false,
        defaultValue: "Active",
      },
      is_admin: {
        type: DataTypes.ENUM('0','1'),
        field: 'is_admin',
        allowNull: false,
        defaultValue: "0",
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
      tableName: 'roles',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true
    }
  )
  return RolesEntity
}

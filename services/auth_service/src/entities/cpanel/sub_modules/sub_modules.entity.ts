import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type SubModulesAttributes = {
  id?: number | null
  subId?: number | null
  moduleId?: number | null
  createdAt?: Date | null
  updatedAt?: Date | null
  deletedAt?: Date | null
}

export type SubModulesCreationAttributes = Optional<SubModulesAttributes, "id" | "subId" | "moduleId" | "createdAt" | "updatedAt" | "deletedAt">

export class SubModulesEntity
  extends Model<SubModulesAttributes, SubModulesCreationAttributes>
  implements SubModulesAttributes
{
  declare id: number | null
  declare subId: number | null
  declare moduleId: number | null
  declare createdAt: Date | null
  declare updatedAt: Date | null
  declare deletedAt: Date | null
}

export function initSubModulesEntity(sequelize: Sequelize): typeof SubModulesEntity {
  SubModulesEntity.init(
    {
      id: {
        type: DataTypes.TEXT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
      },
      subId: {
        type: DataTypes.TEXT,
        field: 'sub_id',
        allowNull: true,
      },
      moduleId: {
        type: DataTypes.TEXT,
        field: 'module_id',
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
      },
      deletedAt: {
        type: DataTypes.DATE,
        field: 'deleted_at',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'sub_modules',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return SubModulesEntity
}

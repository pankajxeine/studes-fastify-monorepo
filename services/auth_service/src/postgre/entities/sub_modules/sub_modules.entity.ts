import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type SubModulesAttributes = {
  id?: string | null
  sub_id?: string | null
  module_id?: string | null
  created_at?: string | null
  updated_at?: string | null
}

export type SubModulesCreationAttributes = Optional<SubModulesAttributes, "id" | "sub_id" | "module_id" | "created_at" | "updated_at">

export class SubModulesEntity
  extends Model<SubModulesAttributes, SubModulesCreationAttributes>
  implements SubModulesAttributes
{
  declare id: string | null
  declare sub_id: string | null
  declare module_id: string | null
  declare created_at: string | null
  declare updated_at: string | null
}

export function initSubModulesEntity(sequelize: Sequelize): typeof SubModulesEntity {
  SubModulesEntity.init(
    {
      id: {
        type: DataTypes.CHAR,
        field: 'id',
        allowNull: true,
        defaultValue: null,
      },
      sub_id: {
        type: DataTypes.CHAR,
        field: 'sub_id',
        allowNull: true,
        defaultValue: null,
      },
      module_id: {
        type: DataTypes.CHAR,
        field: 'module_id',
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
      tableName: 'sub_modules',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true
    }
  )
  return SubModulesEntity
}

import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type SubModulesAttributes = {
  id?: number
  sub_id: number
  module_id: number
  created_at: Date
  updated_at: Date
}

export type SubModulesCreationAttributes = Optional<SubModulesAttributes, "id">

export class SubModulesEntity
  extends Model<SubModulesAttributes, SubModulesCreationAttributes>
  implements SubModulesAttributes
{
  declare id: number
  declare sub_id: number
  declare module_id: number
  declare created_at: Date
  declare updated_at: Date
}

export function initSubModulesEntity(sequelize: Sequelize): typeof SubModulesEntity {
  SubModulesEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true ,
        autoIncrement: true,
      },
      sub_id: {
        type: DataTypes.INTEGER,
        field: 'sub_id',
        allowNull: false,
      },
      module_id: {
        type: DataTypes.INTEGER,
        field: 'module_id',
        allowNull: false,
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
      tableName: 'sub_modules',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true,
      comment: 'Sub wise modules'
    }
  )
  return SubModulesEntity
}

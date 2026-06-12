import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type IndustryModulesAttributes = {
  id?: number
  industry_id: number
  module_id: number
  created_at: Date
  updated_at: Date
}

export type IndustryModulesCreationAttributes = Optional<IndustryModulesAttributes, "id">

export class IndustryModulesEntity
  extends Model<IndustryModulesAttributes, IndustryModulesCreationAttributes>
  implements IndustryModulesAttributes
{
  declare id: number
  declare industry_id: number
  declare module_id: number
  declare created_at: Date
  declare updated_at: Date
}

export function initIndustryModulesEntity(sequelize: Sequelize): typeof IndustryModulesEntity {
  IndustryModulesEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true ,
        autoIncrement: true,
      },
      industry_id: {
        type: DataTypes.INTEGER,
        field: 'industry_id',
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
      tableName: 'industry_modules',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true,
      comment: 'Industry wise modules templates'
    }
  )
  return IndustryModulesEntity
}

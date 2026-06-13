import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type IndustryModulesAttributes = {
  id?: number | null
  industry_id?: number | null
  module_id?: number | null
  created_at?: string | null
  updated_at?: string | null
}

export type IndustryModulesCreationAttributes = Optional<IndustryModulesAttributes, "id" | "industry_id" | "module_id" | "created_at" | "updated_at">

export class IndustryModulesEntity
  extends Model<IndustryModulesAttributes, IndustryModulesCreationAttributes>
  implements IndustryModulesAttributes
{
  declare id: number | null
  declare industry_id: number | null
  declare module_id: number | null
  declare created_at: string | null
  declare updated_at: string | null
}

export function initIndustryModulesEntity(sequelize: Sequelize): typeof IndustryModulesEntity {
  IndustryModulesEntity.init(
    {
      id: {
        type: DataTypes.TEXT,
        field: 'id',
        allowNull: true,
      },
      industry_id: {
        type: DataTypes.TEXT,
        field: 'industry_id',
        allowNull: true,
      },
      module_id: {
        type: DataTypes.TEXT,
        field: 'module_id',
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
      tableName: 'industry_modules',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true
    }
  )
  return IndustryModulesEntity
}

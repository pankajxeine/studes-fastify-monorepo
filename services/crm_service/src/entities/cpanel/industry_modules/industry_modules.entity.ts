import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type IndustryModulesAttributes = {
  id?: string | number | null
  industryId?: number | null
  moduleId?: number | null
}

export type IndustryModulesCreationAttributes = Optional<IndustryModulesAttributes, "id" | "industryId" | "moduleId">

export class IndustryModulesEntity
  extends Model<IndustryModulesAttributes, IndustryModulesCreationAttributes>
  implements IndustryModulesAttributes
{
  declare id: string | number | null
  declare industryId: number | null
  declare moduleId: number | null
}

export function initIndustryModulesEntity(sequelize: Sequelize): typeof IndustryModulesEntity {
  IndustryModulesEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      industryId: {
        type: DataTypes.TEXT,
        field: 'industry_id',
        allowNull: true,
      },
      moduleId: {
        type: DataTypes.TEXT,
        field: 'module_id',
        allowNull: true,
        references: { model: 'modules', key: 'id' },
      }
    },
    {
      sequelize,
      tableName: 'industry_modules',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return IndustryModulesEntity
}

import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type IndustryEnvironmentsAttributes = {
  id?: number | null
  industry_id?: number | null
  environment_id?: number | null
  configuration?: string | null
}

export type IndustryEnvironmentsCreationAttributes = Optional<IndustryEnvironmentsAttributes, "id" | "industry_id" | "environment_id" | "configuration">

export class IndustryEnvironmentsEntity
  extends Model<IndustryEnvironmentsAttributes, IndustryEnvironmentsCreationAttributes>
  implements IndustryEnvironmentsAttributes
{
  declare id: number | null
  declare industry_id: number | null
  declare environment_id: number | null
  declare configuration: string | null
}

export function initIndustryEnvironmentsEntity(sequelize: Sequelize): typeof IndustryEnvironmentsEntity {
  IndustryEnvironmentsEntity.init(
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
      environment_id: {
        type: DataTypes.TEXT,
        field: 'environment_id',
        allowNull: true,
      },
      configuration: {
        type: DataTypes.CHAR,
        field: 'configuration',
        allowNull: true,
        defaultValue: null,
      }
    },
    {
      sequelize,
      tableName: 'industry_environments',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true
    }
  )
  return IndustryEnvironmentsEntity
}

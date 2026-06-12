import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type IndustryEnvironmentsAttributes = {
  id?: number
  industry_id?: number | null
  environment_id?: number | null
  configuration?: unknown | null
}

export type IndustryEnvironmentsCreationAttributes = Optional<IndustryEnvironmentsAttributes, "id" | "industry_id" | "environment_id" | "configuration">

export class IndustryEnvironmentsEntity
  extends Model<IndustryEnvironmentsAttributes, IndustryEnvironmentsCreationAttributes>
  implements IndustryEnvironmentsAttributes
{
  declare id: number
  declare industry_id: number | null
  declare environment_id: number | null
  declare configuration: unknown | null
}

export function initIndustryEnvironmentsEntity(sequelize: Sequelize): typeof IndustryEnvironmentsEntity {
  IndustryEnvironmentsEntity.init(
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
        allowNull: true,
        defaultValue: null,
      },
      environment_id: {
        type: DataTypes.INTEGER,
        field: 'environment_id',
        allowNull: true,
        defaultValue: null,
      },
      configuration: {
        type: DataTypes.JSON,
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

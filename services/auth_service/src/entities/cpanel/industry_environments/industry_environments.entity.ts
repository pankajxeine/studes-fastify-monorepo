import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type IndustryEnvironmentsAttributes = {
  id?: number | null
  industryId?: number | null
  environmentId?: number | null
  configuration?: unknown | null
}

export type IndustryEnvironmentsCreationAttributes = Optional<IndustryEnvironmentsAttributes, "id" | "industryId" | "environmentId" | "configuration">

export class IndustryEnvironmentsEntity
  extends Model<IndustryEnvironmentsAttributes, IndustryEnvironmentsCreationAttributes>
  implements IndustryEnvironmentsAttributes
{
  declare id: number | null
  declare industryId: number | null
  declare environmentId: number | null
  declare configuration: unknown | null
}

export function initIndustryEnvironmentsEntity(sequelize: Sequelize): typeof IndustryEnvironmentsEntity {
  IndustryEnvironmentsEntity.init(
    {
      id: {
        type: DataTypes.TEXT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
      },
      industryId: {
        type: DataTypes.TEXT,
        field: 'industry_id',
        allowNull: true,
      },
      environmentId: {
        type: DataTypes.TEXT,
        field: 'environment_id',
        allowNull: true,
      },
      configuration: {
        type: DataTypes.JSONB,
        field: 'configuration',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'industry_environments',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return IndustryEnvironmentsEntity
}

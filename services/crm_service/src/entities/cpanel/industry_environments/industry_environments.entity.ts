import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type IndustryEnvironmentsAttributes = {
  id?: string | number | null
  industryId?: number | null
  environmentId?: number | null
  configuration?: unknown | null
  createdAt?: Date
  updatedAt?: Date
}

export type IndustryEnvironmentsCreationAttributes = Optional<IndustryEnvironmentsAttributes, "id" | "industryId" | "environmentId" | "configuration" | "createdAt" | "updatedAt">

export class IndustryEnvironmentsEntity
  extends Model<IndustryEnvironmentsAttributes, IndustryEnvironmentsCreationAttributes>
  implements IndustryEnvironmentsAttributes
{
  declare id: string | number | null
  declare industryId: number | null
  declare environmentId: number | null
  declare configuration: unknown | null
  declare createdAt: Date
  declare updatedAt: Date
}

export function initIndustryEnvironmentsEntity(sequelize: Sequelize): typeof IndustryEnvironmentsEntity {
  IndustryEnvironmentsEntity.init(
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
      environmentId: {
        type: DataTypes.TEXT,
        field: 'environment_id',
        allowNull: true,
        references: { model: 'environments', key: 'id' },
      },
      configuration: {
        type: DataTypes.JSONB,
        field: 'configuration',
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
        defaultValue: "DataTypes.NOW",
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
        defaultValue: "DataTypes.NOW",
      }
    },
    {
      sequelize,
      tableName: 'industry_environments',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return IndustryEnvironmentsEntity
}

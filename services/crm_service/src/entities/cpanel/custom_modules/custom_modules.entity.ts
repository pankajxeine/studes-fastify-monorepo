import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CustomModulesAttributes = {
  id?: string | number | null
  name: string
  moduleKey: string
  relevantModules?: unknown | null
  createdAt?: Date
  updatedAt?: Date
}

export type CustomModulesCreationAttributes = Optional<CustomModulesAttributes, "id" | "relevantModules" | "createdAt" | "updatedAt">

export class CustomModulesEntity
  extends Model<CustomModulesAttributes, CustomModulesCreationAttributes>
  implements CustomModulesAttributes
{
  declare id: string | number | null
  declare name: string
  declare moduleKey: string
  declare relevantModules: unknown | null
  declare createdAt: Date
  declare updatedAt: Date
}

export function initCustomModulesEntity(sequelize: Sequelize): typeof CustomModulesEntity {
  CustomModulesEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      name: {
        type: DataTypes.STRING(200),
        field: 'name',
        allowNull: false,
      },
      moduleKey: {
        type: DataTypes.STRING(200),
        field: 'module_key',
        allowNull: false,
      },
      relevantModules: {
        type: DataTypes.JSONB,
        field: 'relevant_modules',
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
      tableName: 'custom_modules',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return CustomModulesEntity
}

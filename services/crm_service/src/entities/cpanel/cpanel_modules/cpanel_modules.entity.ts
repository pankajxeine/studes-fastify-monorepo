import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CpanelModulesAttributes = {
  id?: string | number | null
  moduleName: string
  moduleKey: string
  createdAt?: Date
  updatedAt?: Date
}

export type CpanelModulesCreationAttributes = Optional<CpanelModulesAttributes, "id" | "createdAt" | "updatedAt">

export class CpanelModulesEntity
  extends Model<CpanelModulesAttributes, CpanelModulesCreationAttributes>
  implements CpanelModulesAttributes
{
  declare id: string | number | null
  declare moduleName: string
  declare moduleKey: string
  declare createdAt: Date
  declare updatedAt: Date
}

export function initCpanelModulesEntity(sequelize: Sequelize): typeof CpanelModulesEntity {
  CpanelModulesEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      moduleName: {
        type: DataTypes.STRING(200),
        field: 'module_name',
        allowNull: false,
      },
      moduleKey: {
        type: DataTypes.STRING(200),
        field: 'module_key',
        allowNull: false,
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
      tableName: 'cpanel_modules',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return CpanelModulesEntity
}

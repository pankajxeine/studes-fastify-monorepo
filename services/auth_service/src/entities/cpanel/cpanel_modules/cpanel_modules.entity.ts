import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CpanelModulesAttributes = {
  id?: number
  moduleName: string
  moduleKey: string
  createdAt: Date
  updatedAt: Date
}

export type CpanelModulesCreationAttributes = Optional<CpanelModulesAttributes, "id">

export class CpanelModulesEntity
  extends Model<CpanelModulesAttributes, CpanelModulesCreationAttributes>
  implements CpanelModulesAttributes
{
  declare id: number
  declare moduleName: string
  declare moduleKey: string
  declare createdAt: Date
  declare updatedAt: Date
}

export function initCpanelModulesEntity(sequelize: Sequelize): typeof CpanelModulesEntity {
  CpanelModulesEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
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
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
      }
    },
    {
      sequelize,
      tableName: 'cpanel_modules',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return CpanelModulesEntity
}

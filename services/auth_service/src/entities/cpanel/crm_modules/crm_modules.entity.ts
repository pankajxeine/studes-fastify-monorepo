import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CrmModulesAttributes = {
  id: number
  name: string
  moduleKey: string
  sequence?: number
  createdAt: Date
  updatedAt: Date
}

export type CrmModulesCreationAttributes = Optional<CrmModulesAttributes, "sequence">

export class CrmModulesEntity
  extends Model<CrmModulesAttributes, CrmModulesCreationAttributes>
  implements CrmModulesAttributes
{
  declare id: number
  declare name: string
  declare moduleKey: string
  declare sequence: number
  declare createdAt: Date
  declare updatedAt: Date
}

export function initCrmModulesEntity(sequelize: Sequelize): typeof CrmModulesEntity {
  CrmModulesEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(50),
        field: 'name',
        allowNull: false,
      },
      moduleKey: {
        type: DataTypes.STRING(50),
        field: 'module_key',
        allowNull: false,
      },
      sequence: {
        type: DataTypes.INTEGER,
        field: 'sequence',
        allowNull: false,
        defaultValue: "0",
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
      tableName: 'crm_modules',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] },
      { unique: true, fields: ['uq_crm_modules_module_key', 'module_key'] }
      ]
    }
  )
  return CrmModulesEntity
}

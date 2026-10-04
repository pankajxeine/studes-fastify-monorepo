import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CrmUserModulesAttributes = {
  id: number
  userId: string | number
  moduleId: string | number
  permission?: string
  createdBy?: number
  updatedBy?: number
  createdAt: Date
  updatedAt: Date
}

export type CrmUserModulesCreationAttributes = Optional<CrmUserModulesAttributes, "permission" | "createdBy" | "updatedBy">

export class CrmUserModulesEntity
  extends Model<CrmUserModulesAttributes, CrmUserModulesCreationAttributes>
  implements CrmUserModulesAttributes
{
  declare id: number
  declare userId: string | number
  declare moduleId: string | number
  declare permission: string
  declare createdBy: number
  declare updatedBy: number
  declare createdAt: Date
  declare updatedAt: Date
}

export function initCrmUserModulesEntity(sequelize: Sequelize): typeof CrmUserModulesEntity {
  CrmUserModulesEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.BIGINT,
        field: 'user_id',
        allowNull: false,
      },
      moduleId: {
        type: DataTypes.BIGINT,
        field: 'module_id',
        allowNull: false,
      },
      permission: {
        type: DataTypes.TEXT,
        field: 'permission',
        allowNull: false,
        defaultValue: "'Full' CHECK (\n        \"permission\" IN (\n            'Add & Update Only'",
      },
      createdBy: {
        type: DataTypes.INTEGER,
        field: 'created_by',
        allowNull: false,
        defaultValue: "0",
      },
      updatedBy: {
        type: DataTypes.INTEGER,
        field: 'updated_by',
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
      tableName: 'crm_user_modules',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return CrmUserModulesEntity
}

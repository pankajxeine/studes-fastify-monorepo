import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CrmUserModulesAttributes = {
  id?: string | number | null
  userId: string | number
  moduleId: string | number
  permission?: string
  createdBy?: number
  updatedBy?: number
  createdAt?: Date
  updatedAt?: Date
}

export type CrmUserModulesCreationAttributes = Optional<CrmUserModulesAttributes, "id" | "permission" | "createdBy" | "updatedBy" | "createdAt" | "updatedAt">

export class CrmUserModulesEntity
  extends Model<CrmUserModulesAttributes, CrmUserModulesCreationAttributes>
  implements CrmUserModulesAttributes
{
  declare id: string | number | null
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
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      userId: {
        type: DataTypes.BIGINT,
        field: 'user_id',
        allowNull: false,
        references: { model: 'users', key: 'id' },
      },
      moduleId: {
        type: DataTypes.BIGINT,
        field: 'module_id',
        allowNull: false,
        references: { model: 'modules', key: 'id' },
      },
      permission: {
        type: DataTypes.TEXT,
        field: 'permission',
        allowNull: false,
        defaultValue: "full",
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
      tableName: 'crm_user_modules',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return CrmUserModulesEntity
}

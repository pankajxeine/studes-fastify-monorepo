import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CrmPagesAttributes = {
  id?: number
  name: string
  moduleKey: string
  relevantModules?: unknown | null
  allowCrmLmsContent?: string | null
  createdAt?: Date
  updatedAt?: Date
}

export type CrmPagesCreationAttributes = Optional<CrmPagesAttributes, "id" | "relevantModules" | "allowCrmLmsContent" | "createdAt" | "updatedAt">

export class CrmPagesEntity
  extends Model<CrmPagesAttributes, CrmPagesCreationAttributes>
  implements CrmPagesAttributes
{
  declare id: number
  declare name: string
  declare moduleKey: string
  declare relevantModules: unknown | null
  declare allowCrmLmsContent: string | null
  declare createdAt: Date
  declare updatedAt: Date
}

export function initCrmPagesEntity(sequelize: Sequelize): typeof CrmPagesEntity {
  CrmPagesEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
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
      allowCrmLmsContent: {
        type: DataTypes.TEXT,
        field: 'allow_crm_lms_content',
        allowNull: true,
        defaultValue: "'0' CHECK (\n        \"allow_crm_lms_content\" IN ('0'",
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
      tableName: 'crm_pages',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return CrmPagesEntity
}

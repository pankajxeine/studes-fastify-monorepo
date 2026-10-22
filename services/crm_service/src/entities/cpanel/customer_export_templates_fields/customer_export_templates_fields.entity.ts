import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CustomerExportTemplatesFieldsAttributes = {
  id?: string | number | null
  templateId?: number | null
  label?: string | null
  value?: string | null
  sequence?: number | null
  module?: string | null
  isRequired?: string
  createdAt?: Date
  updatedAt?: Date
}

export type CustomerExportTemplatesFieldsCreationAttributes = Optional<CustomerExportTemplatesFieldsAttributes, "id" | "templateId" | "label" | "value" | "sequence" | "module" | "isRequired" | "createdAt" | "updatedAt">

export class CustomerExportTemplatesFieldsEntity
  extends Model<CustomerExportTemplatesFieldsAttributes, CustomerExportTemplatesFieldsCreationAttributes>
  implements CustomerExportTemplatesFieldsAttributes
{
  declare id: string | number | null
  declare templateId: number | null
  declare label: string | null
  declare value: string | null
  declare sequence: number | null
  declare module: string | null
  declare isRequired: string
  declare createdAt: Date
  declare updatedAt: Date
}

export function initCustomerExportTemplatesFieldsEntity(sequelize: Sequelize): typeof CustomerExportTemplatesFieldsEntity {
  CustomerExportTemplatesFieldsEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      templateId: {
        type: DataTypes.TEXT,
        field: 'template_id',
        allowNull: true,
      },
      label: {
        type: DataTypes.STRING(100),
        field: 'label',
        allowNull: true,
      },
      value: {
        type: DataTypes.STRING(100),
        field: 'value',
        allowNull: true,
      },
      sequence: {
        type: DataTypes.TEXT,
        field: 'sequence',
        allowNull: true,
      },
      module: {
        type: DataTypes.STRING(200),
        field: 'module',
        allowNull: true,
      },
      isRequired: {
        type: DataTypes.TEXT,
        field: 'is_required',
        allowNull: false,
        defaultValue: "TRUE",
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
      tableName: 'customer_export_templates_fields',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] },
      { unique: true, fields: ['template_id'] }
      ]
    }
  )
  return CustomerExportTemplatesFieldsEntity
}

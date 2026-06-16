import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CustomerExportTemplatesFieldsAttributes = {
  id?: number | null
  templateId?: number | null
  label?: string | null
  value?: string | null
  sequence?: number | null
  module?: string | null
  isRequired?: string | null
  createdAt?: Date | null
  updatedAt?: Date | null
}

export type CustomerExportTemplatesFieldsCreationAttributes = Optional<CustomerExportTemplatesFieldsAttributes, "id" | "templateId" | "label" | "value" | "sequence" | "module" | "isRequired" | "createdAt" | "updatedAt">

export class CustomerExportTemplatesFieldsEntity
  extends Model<CustomerExportTemplatesFieldsAttributes, CustomerExportTemplatesFieldsCreationAttributes>
  implements CustomerExportTemplatesFieldsAttributes
{
  declare id: number | null
  declare templateId: number | null
  declare label: string | null
  declare value: string | null
  declare sequence: number | null
  declare module: string | null
  declare isRequired: string | null
  declare createdAt: Date | null
  declare updatedAt: Date | null
}

export function initCustomerExportTemplatesFieldsEntity(sequelize: Sequelize): typeof CustomerExportTemplatesFieldsEntity {
  CustomerExportTemplatesFieldsEntity.init(
    {
      id: {
        type: DataTypes.TEXT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
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
        allowNull: true,
        defaultValue: "yes",
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: true,
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'customer_export_templates_fields',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] },
      { unique: true, fields: ['template_id'] }
      ]
    }
  )
  return CustomerExportTemplatesFieldsEntity
}

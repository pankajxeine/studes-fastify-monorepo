import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CustomerExportTemplatesFieldsAttributes = {
  id?: number | null
  template_id?: number | null
  label?: string | null
  value?: string | null
  sequence?: number | null
  module?: string | null
  is_required?: string | null
  created_at?: string | null
  updated_at?: string | null
}

export type CustomerExportTemplatesFieldsCreationAttributes = Optional<CustomerExportTemplatesFieldsAttributes, "id" | "template_id" | "label" | "value" | "sequence" | "module" | "is_required" | "created_at" | "updated_at">

export class CustomerExportTemplatesFieldsEntity
  extends Model<CustomerExportTemplatesFieldsAttributes, CustomerExportTemplatesFieldsCreationAttributes>
  implements CustomerExportTemplatesFieldsAttributes
{
  declare id: number | null
  declare template_id: number | null
  declare label: string | null
  declare value: string | null
  declare sequence: number | null
  declare module: string | null
  declare is_required: string | null
  declare created_at: string | null
  declare updated_at: string | null
}

export function initCustomerExportTemplatesFieldsEntity(sequelize: Sequelize): typeof CustomerExportTemplatesFieldsEntity {
  CustomerExportTemplatesFieldsEntity.init(
    {
      id: {
        type: DataTypes.TEXT,
        field: 'id',
        allowNull: true,
      },
      template_id: {
        type: DataTypes.TEXT,
        field: 'template_id',
        allowNull: true,
      },
      label: {
        type: DataTypes.CHAR,
        field: 'label',
        allowNull: true,
        defaultValue: null,
      },
      value: {
        type: DataTypes.CHAR,
        field: 'value',
        allowNull: true,
        defaultValue: null,
      },
      sequence: {
        type: DataTypes.TEXT,
        field: 'sequence',
        allowNull: true,
      },
      module: {
        type: DataTypes.CHAR,
        field: 'module',
        allowNull: true,
        defaultValue: null,
      },
      is_required: {
        type: DataTypes.CHAR,
        field: 'is_required',
        allowNull: true,
        defaultValue: null,
      },
      created_at: {
        type: DataTypes.CHAR,
        field: 'created_at',
        allowNull: true,
        defaultValue: null,
      },
      updated_at: {
        type: DataTypes.CHAR,
        field: 'updated_at',
        allowNull: true,
        defaultValue: null,
      }
    },
    {
      sequelize,
      tableName: 'customer_export_templates_fields',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true
    }
  )
  return CustomerExportTemplatesFieldsEntity
}

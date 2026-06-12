import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CustomerExportTemplatesFieldsAttributes = {
  id?: number
  template_id: number
  label?: string | null
  value?: string | null
  sequence: number
  module?: string | null
  is_required?: string
  created_at: Date
  updated_at: Date
}

export type CustomerExportTemplatesFieldsCreationAttributes = Optional<CustomerExportTemplatesFieldsAttributes, "id" | "label" | "value" | "module" | "is_required">

export class CustomerExportTemplatesFieldsEntity
  extends Model<CustomerExportTemplatesFieldsAttributes, CustomerExportTemplatesFieldsCreationAttributes>
  implements CustomerExportTemplatesFieldsAttributes
{
  declare id: number
  declare template_id: number
  declare label: string | null
  declare value: string | null
  declare sequence: number
  declare module: string | null
  declare is_required: string
  declare created_at: Date
  declare updated_at: Date
}

export function initCustomerExportTemplatesFieldsEntity(sequelize: Sequelize): typeof CustomerExportTemplatesFieldsEntity {
  CustomerExportTemplatesFieldsEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true ,
        autoIncrement: true,
      },
      template_id: {
        type: DataTypes.INTEGER,
        field: 'template_id',
        allowNull: false,
        unique: true,
      },
      label: {
        type: DataTypes.STRING(200),
        field: 'label',
        allowNull: true,
        unique: true,
        defaultValue: null,
      },
      value: {
        type: DataTypes.STRING(200),
        field: 'value',
        allowNull: true,
        defaultValue: null,
      },
      sequence: {
        type: DataTypes.INTEGER,
        field: 'sequence',
        allowNull: false,
      },
      module: {
        type: DataTypes.STRING(200),
        field: 'module',
        allowNull: true,
        defaultValue: null,
      },
      is_required: {
        type: DataTypes.ENUM('no','yes'),
        field: 'is_required',
        allowNull: false,
        defaultValue: "Yes",
      },
      created_at: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
      },
      updated_at: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
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

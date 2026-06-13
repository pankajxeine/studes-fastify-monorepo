import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CustomerExportTemplatesAttributes = {
  id?: number | null
  name?: string | null
  is_default?: string | null
  created_at?: string | null
  updated_at?: string | null
}

export type CustomerExportTemplatesCreationAttributes = Optional<CustomerExportTemplatesAttributes, "id" | "name" | "is_default" | "created_at" | "updated_at">

export class CustomerExportTemplatesEntity
  extends Model<CustomerExportTemplatesAttributes, CustomerExportTemplatesCreationAttributes>
  implements CustomerExportTemplatesAttributes
{
  declare id: number | null
  declare name: string | null
  declare is_default: string | null
  declare created_at: string | null
  declare updated_at: string | null
}

export function initCustomerExportTemplatesEntity(sequelize: Sequelize): typeof CustomerExportTemplatesEntity {
  CustomerExportTemplatesEntity.init(
    {
      id: {
        type: DataTypes.TEXT,
        field: 'id',
        allowNull: true,
      },
      name: {
        type: DataTypes.CHAR,
        field: 'name',
        allowNull: true,
        defaultValue: null,
      },
      is_default: {
        type: DataTypes.CHAR,
        field: 'is_default',
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
      tableName: 'customer_export_templates',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true
    }
  )
  return CustomerExportTemplatesEntity
}

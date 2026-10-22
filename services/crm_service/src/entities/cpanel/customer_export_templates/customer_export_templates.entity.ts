import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CustomerExportTemplatesAttributes = {
  id?: string | number | null
  name?: string | null
  isDefault?: string
  createdAt?: Date
  updatedAt?: Date
}

export type CustomerExportTemplatesCreationAttributes = Optional<CustomerExportTemplatesAttributes, "id" | "name" | "isDefault" | "createdAt" | "updatedAt">

export class CustomerExportTemplatesEntity
  extends Model<CustomerExportTemplatesAttributes, CustomerExportTemplatesCreationAttributes>
  implements CustomerExportTemplatesAttributes
{
  declare id: string | number | null
  declare name: string | null
  declare isDefault: string
  declare createdAt: Date
  declare updatedAt: Date
}

export function initCustomerExportTemplatesEntity(sequelize: Sequelize): typeof CustomerExportTemplatesEntity {
  CustomerExportTemplatesEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      name: {
        type: DataTypes.STRING(200),
        field: 'name',
        allowNull: true,
      },
      isDefault: {
        type: DataTypes.TEXT,
        field: 'is_default',
        allowNull: false,
        defaultValue: "FALSE",
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
      tableName: 'customer_export_templates',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return CustomerExportTemplatesEntity
}

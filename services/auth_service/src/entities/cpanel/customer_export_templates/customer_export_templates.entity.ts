import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CustomerExportTemplatesAttributes = {
  id?: number | null
  name?: string | null
  isDefault?: string | null
  createdAt?: Date | null
  updatedAt?: Date | null
}

export type CustomerExportTemplatesCreationAttributes = Optional<CustomerExportTemplatesAttributes, "id" | "name" | "isDefault" | "createdAt" | "updatedAt">

export class CustomerExportTemplatesEntity
  extends Model<CustomerExportTemplatesAttributes, CustomerExportTemplatesCreationAttributes>
  implements CustomerExportTemplatesAttributes
{
  declare id: number | null
  declare name: string | null
  declare isDefault: string | null
  declare createdAt: Date | null
  declare updatedAt: Date | null
}

export function initCustomerExportTemplatesEntity(sequelize: Sequelize): typeof CustomerExportTemplatesEntity {
  CustomerExportTemplatesEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(200),
        field: 'name',
        allowNull: true,
      },
      isDefault: {
        type: DataTypes.TEXT,
        field: 'is_default',
        allowNull: true,
        defaultValue: "no",
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
      tableName: 'customer_export_templates',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return CustomerExportTemplatesEntity
}

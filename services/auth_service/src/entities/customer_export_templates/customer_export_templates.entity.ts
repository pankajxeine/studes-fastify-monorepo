import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CustomerExportTemplatesAttributes = {
  id?: number
  name?: string | null
  is_default?: string
  created_at: Date
  updated_at: Date
}

export type CustomerExportTemplatesCreationAttributes = Optional<CustomerExportTemplatesAttributes, "id" | "name" | "is_default">

export class CustomerExportTemplatesEntity
  extends Model<CustomerExportTemplatesAttributes, CustomerExportTemplatesCreationAttributes>
  implements CustomerExportTemplatesAttributes
{
  declare id: number
  declare name: string | null
  declare is_default: string
  declare created_at: Date
  declare updated_at: Date
}

export function initCustomerExportTemplatesEntity(sequelize: Sequelize): typeof CustomerExportTemplatesEntity {
  CustomerExportTemplatesEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true ,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(200),
        field: 'name',
        allowNull: true,
        defaultValue: null,
      },
      is_default: {
        type: DataTypes.ENUM('no','yes'),
        field: 'is_default',
        allowNull: false,
        defaultValue: "No",
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
      tableName: 'customer_export_templates',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true
    }
  )
  return CustomerExportTemplatesEntity
}

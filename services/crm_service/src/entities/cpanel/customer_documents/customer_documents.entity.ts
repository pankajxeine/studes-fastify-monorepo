import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CustomerDocumentsAttributes = {
  id?: string | number | null
  customerId?: number | null
  documentName?: string | null
  fileName?: string | null
  documentTypeId?: number | null
  createdBy?: number | null
  updatedBy?: number | null
  createdAt?: Date
  updatedAt?: Date
}

export type CustomerDocumentsCreationAttributes = Optional<CustomerDocumentsAttributes, "id" | "customerId" | "documentName" | "fileName" | "documentTypeId" | "createdBy" | "updatedBy" | "createdAt" | "updatedAt">

export class CustomerDocumentsEntity
  extends Model<CustomerDocumentsAttributes, CustomerDocumentsCreationAttributes>
  implements CustomerDocumentsAttributes
{
  declare id: string | number | null
  declare customerId: number | null
  declare documentName: string | null
  declare fileName: string | null
  declare documentTypeId: number | null
  declare createdBy: number | null
  declare updatedBy: number | null
  declare createdAt: Date
  declare updatedAt: Date
}

export function initCustomerDocumentsEntity(sequelize: Sequelize): typeof CustomerDocumentsEntity {
  CustomerDocumentsEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      customerId: {
        type: DataTypes.TEXT,
        field: 'customer_id',
        allowNull: true,
        primaryKey: true,
        references: { model: 'customers', key: 'id' },
      },
      documentName: {
        type: DataTypes.STRING(300),
        field: 'document_name',
        allowNull: true,
      },
      fileName: {
        type: DataTypes.STRING(300),
        field: 'file_name',
        allowNull: true,
      },
      documentTypeId: {
        type: DataTypes.TEXT,
        field: 'document_type_id',
        allowNull: true,
        primaryKey: true,
        references: { model: 'document_types', key: 'id' },
      },
      createdBy: {
        type: DataTypes.TEXT,
        field: 'created_by',
        allowNull: true,
      },
      updatedBy: {
        type: DataTypes.TEXT,
        field: 'updated_by',
        allowNull: true,
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
      tableName: 'customer_documents',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id', 'customer_id', 'document_type_id'] }
      ]
    }
  )
  return CustomerDocumentsEntity
}

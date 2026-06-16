import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CustomerDocumentsAttributes = {
  id?: number | null
  customerId?: number | null
  documentName?: string | null
  fileName?: string | null
  documentTypeId?: number | null
  createdBy?: number | null
  updatedBy?: number | null
  createdAt?: Date | null
  updatedAt?: Date | null
  deletedAt?: Date | null
}

export type CustomerDocumentsCreationAttributes = Optional<CustomerDocumentsAttributes, "id" | "customerId" | "documentName" | "fileName" | "documentTypeId" | "createdBy" | "updatedBy" | "createdAt" | "updatedAt" | "deletedAt">

export class CustomerDocumentsEntity
  extends Model<CustomerDocumentsAttributes, CustomerDocumentsCreationAttributes>
  implements CustomerDocumentsAttributes
{
  declare id: number | null
  declare customerId: number | null
  declare documentName: string | null
  declare fileName: string | null
  declare documentTypeId: number | null
  declare createdBy: number | null
  declare updatedBy: number | null
  declare createdAt: Date | null
  declare updatedAt: Date | null
  declare deletedAt: Date | null
}

export function initCustomerDocumentsEntity(sequelize: Sequelize): typeof CustomerDocumentsEntity {
  CustomerDocumentsEntity.init(
    {
      id: {
        type: DataTypes.TEXT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
      },
      customerId: {
        type: DataTypes.TEXT,
        field: 'customer_id',
        allowNull: true,
        primaryKey: true,
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
        allowNull: true,
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: true,
      },
      deletedAt: {
        type: DataTypes.DATE,
        field: 'deleted_at',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'customer_documents',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id', 'customer_id', 'document_type_id'] }
      ]
    }
  )
  return CustomerDocumentsEntity
}

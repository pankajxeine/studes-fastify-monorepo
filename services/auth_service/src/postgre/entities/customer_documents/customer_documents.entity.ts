import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CustomerDocumentsAttributes = {
  id?: string | null
  customer_id?: string | null
  document_name?: string | null
  file_name?: string | null
  document_type_id?: string | null
  created_by?: string | null
  updated_by?: string | null
  created_at?: string | null
  updated_at?: string | null
  deleted_at?: string | null
}

export type CustomerDocumentsCreationAttributes = Optional<CustomerDocumentsAttributes, "id" | "customer_id" | "document_name" | "file_name" | "document_type_id" | "created_by" | "updated_by" | "created_at" | "updated_at" | "deleted_at">

export class CustomerDocumentsEntity
  extends Model<CustomerDocumentsAttributes, CustomerDocumentsCreationAttributes>
  implements CustomerDocumentsAttributes
{
  declare id: string | null
  declare customer_id: string | null
  declare document_name: string | null
  declare file_name: string | null
  declare document_type_id: string | null
  declare created_by: string | null
  declare updated_by: string | null
  declare created_at: string | null
  declare updated_at: string | null
  declare deleted_at: string | null
}

export function initCustomerDocumentsEntity(sequelize: Sequelize): typeof CustomerDocumentsEntity {
  CustomerDocumentsEntity.init(
    {
      id: {
        type: DataTypes.CHAR,
        field: 'id',
        allowNull: true,
        defaultValue: null,
      },
      customer_id: {
        type: DataTypes.CHAR,
        field: 'customer_id',
        allowNull: true,
        defaultValue: null,
      },
      document_name: {
        type: DataTypes.CHAR,
        field: 'document_name',
        allowNull: true,
        defaultValue: null,
      },
      file_name: {
        type: DataTypes.CHAR,
        field: 'file_name',
        allowNull: true,
        defaultValue: null,
      },
      document_type_id: {
        type: DataTypes.CHAR,
        field: 'document_type_id',
        allowNull: true,
        defaultValue: null,
      },
      created_by: {
        type: DataTypes.CHAR,
        field: 'created_by',
        allowNull: true,
        defaultValue: null,
      },
      updated_by: {
        type: DataTypes.CHAR,
        field: 'updated_by',
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
      },
      deleted_at: {
        type: DataTypes.CHAR,
        field: 'deleted_at',
        allowNull: true,
        defaultValue: null,
      }
    },
    {
      sequelize,
      tableName: 'customer_documents',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true
    }
  )
  return CustomerDocumentsEntity
}

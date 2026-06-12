import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CustomerDocumentsAttributes = {
  id?: number
  customer_id?: number | null
  document_name?: string | null
  file_name?: string | null
  document_type_id?: number | null
  created_by?: number | null
  updated_by?: number | null
  created_at?: Date | null
  updated_at?: Date | null
  deleted_at?: Date | null
}

export type CustomerDocumentsCreationAttributes = Optional<CustomerDocumentsAttributes, "id" | "customer_id" | "document_name" | "file_name" | "document_type_id" | "created_by" | "updated_by" | "created_at" | "updated_at" | "deleted_at">

export class CustomerDocumentsEntity
  extends Model<CustomerDocumentsAttributes, CustomerDocumentsCreationAttributes>
  implements CustomerDocumentsAttributes
{
  declare id: number
  declare customer_id: number | null
  declare document_name: string | null
  declare file_name: string | null
  declare document_type_id: number | null
  declare created_by: number | null
  declare updated_by: number | null
  declare created_at: Date | null
  declare updated_at: Date | null
  declare deleted_at: Date | null
}

export function initCustomerDocumentsEntity(sequelize: Sequelize): typeof CustomerDocumentsEntity {
  CustomerDocumentsEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        autoIncrement: true,
      },
      customer_id: {
        type: DataTypes.INTEGER,
        field: 'customer_id',
        allowNull: true,
        defaultValue: null,
      },
      document_name: {
        type: DataTypes.STRING(100),
        field: 'document_name',
        allowNull: true,
        defaultValue: null,
      },
      file_name: {
        type: DataTypes.STRING(500),
        field: 'file_name',
        allowNull: true,
        defaultValue: null,
      },
      document_type_id: {
        type: DataTypes.INTEGER,
        field: 'document_type_id',
        allowNull: true,
        defaultValue: null,
      },
      created_by: {
        type: DataTypes.INTEGER,
        field: 'created_by',
        allowNull: true,
        defaultValue: null,
      },
      updated_by: {
        type: DataTypes.INTEGER,
        field: 'updated_by',
        allowNull: true,
        defaultValue: null,
      },
      created_at: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: true,
        defaultValue: null,
      },
      updated_at: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: true,
        defaultValue: null,
      },
      deleted_at: {
        type: DataTypes.DATE,
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

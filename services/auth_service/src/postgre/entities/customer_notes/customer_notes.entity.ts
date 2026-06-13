import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CustomerNotesAttributes = {
  id?: string | null
  customer_id?: string | null
  subject?: string | null
  description?: string | null
  assignee_id?: string | null
  created_by?: string | null
  updated_by?: string | null
  created_at?: string | null
  updated_at?: string | null
  deleted_at?: string | null
}

export type CustomerNotesCreationAttributes = Optional<CustomerNotesAttributes, "id" | "customer_id" | "subject" | "description" | "assignee_id" | "created_by" | "updated_by" | "created_at" | "updated_at" | "deleted_at">

export class CustomerNotesEntity
  extends Model<CustomerNotesAttributes, CustomerNotesCreationAttributes>
  implements CustomerNotesAttributes
{
  declare id: string | null
  declare customer_id: string | null
  declare subject: string | null
  declare description: string | null
  declare assignee_id: string | null
  declare created_by: string | null
  declare updated_by: string | null
  declare created_at: string | null
  declare updated_at: string | null
  declare deleted_at: string | null
}

export function initCustomerNotesEntity(sequelize: Sequelize): typeof CustomerNotesEntity {
  CustomerNotesEntity.init(
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
      subject: {
        type: DataTypes.CHAR,
        field: 'subject',
        allowNull: true,
        defaultValue: null,
      },
      description: {
        type: DataTypes.CHAR,
        field: 'description',
        allowNull: true,
        defaultValue: null,
      },
      assignee_id: {
        type: DataTypes.CHAR,
        field: 'assignee_id',
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
      tableName: 'customer_notes',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true
    }
  )
  return CustomerNotesEntity
}

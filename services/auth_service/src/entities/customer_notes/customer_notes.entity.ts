import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CustomerNotesAttributes = {
  id?: number
  customer_id?: number | null
  subject: string
  description?: string | null
  assignee_id?: number | null
  created_by?: number | null
  updated_by?: number | null
  created_at?: Date | null
  updated_at?: Date | null
  deleted_at?: Date | null
}

export type CustomerNotesCreationAttributes = Optional<CustomerNotesAttributes, "id" | "customer_id" | "description" | "assignee_id" | "created_by" | "updated_by" | "created_at" | "updated_at" | "deleted_at">

export class CustomerNotesEntity
  extends Model<CustomerNotesAttributes, CustomerNotesCreationAttributes>
  implements CustomerNotesAttributes
{
  declare id: number
  declare customer_id: number | null
  declare subject: string
  declare description: string | null
  declare assignee_id: number | null
  declare created_by: number | null
  declare updated_by: number | null
  declare created_at: Date | null
  declare updated_at: Date | null
  declare deleted_at: Date | null
}

export function initCustomerNotesEntity(sequelize: Sequelize): typeof CustomerNotesEntity {
  CustomerNotesEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true ,
        autoIncrement: true,
      },
      customer_id: {
        type: DataTypes.INTEGER,
        field: 'customer_id',
        allowNull: true,
        defaultValue: null,
      },
      subject: {
        type: DataTypes.TEXT,
        field: 'subject',
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        field: 'description',
        allowNull: true,
      },
      assignee_id: {
        type: DataTypes.INTEGER,
        field: 'assignee_id',
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
      tableName: 'customer_notes',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true
    }
  )
  return CustomerNotesEntity
}

import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CustomerNotesAttributes = {
  id?: string | number | null
  customerId?: number | null
  subject?: string | null
  description?: string | null
  assigneeId?: number | null
  createdBy?: number | null
  updatedBy?: number | null
  createdAt?: Date
  updatedAt?: Date
}

export type CustomerNotesCreationAttributes = Optional<CustomerNotesAttributes, "id" | "customerId" | "subject" | "description" | "assigneeId" | "createdBy" | "updatedBy" | "createdAt" | "updatedAt">

export class CustomerNotesEntity
  extends Model<CustomerNotesAttributes, CustomerNotesCreationAttributes>
  implements CustomerNotesAttributes
{
  declare id: string | number | null
  declare customerId: number | null
  declare subject: string | null
  declare description: string | null
  declare assigneeId: number | null
  declare createdBy: number | null
  declare updatedBy: number | null
  declare createdAt: Date
  declare updatedAt: Date
}

export function initCustomerNotesEntity(sequelize: Sequelize): typeof CustomerNotesEntity {
  CustomerNotesEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      customerId: {
        type: DataTypes.TEXT,
        field: 'customer_id',
        allowNull: true,
        references: { model: 'customers', key: 'id' },
      },
      subject: {
        type: DataTypes.STRING(50),
        field: 'subject',
        allowNull: true,
      },
      description: {
        type: DataTypes.STRING(500),
        field: 'description',
        allowNull: true,
      },
      assigneeId: {
        type: DataTypes.TEXT,
        field: 'assignee_id',
        allowNull: true,
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
        primaryKey: true,
        defaultValue: "DataTypes.NOW",
      }
    },
    {
      sequelize,
      tableName: 'customer_notes',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return CustomerNotesEntity
}

import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CustomerNotesAttributes = {
  id?: number | null
  customerId?: number | null
  subject?: string | null
  description?: string | null
  assigneeId?: number | null
  createdBy?: number | null
  updatedBy?: number | null
  createdAt?: Date | null
  updatedAt?: Date | null
  deletedAt?: Date | null
}

export type CustomerNotesCreationAttributes = Optional<CustomerNotesAttributes, "id" | "customerId" | "subject" | "description" | "assigneeId" | "createdBy" | "updatedBy" | "createdAt" | "updatedAt" | "deletedAt">

export class CustomerNotesEntity
  extends Model<CustomerNotesAttributes, CustomerNotesCreationAttributes>
  implements CustomerNotesAttributes
{
  declare id: number | null
  declare customerId: number | null
  declare subject: string | null
  declare description: string | null
  declare assigneeId: number | null
  declare createdBy: number | null
  declare updatedBy: number | null
  declare createdAt: Date | null
  declare updatedAt: Date | null
  declare deletedAt: Date | null
}

export function initCustomerNotesEntity(sequelize: Sequelize): typeof CustomerNotesEntity {
  CustomerNotesEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: true,
        primaryKey: true,
      },
      customerId: {
        type: DataTypes.TEXT,
        field: 'customer_id',
        allowNull: true,
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
      tableName: 'customer_notes',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return CustomerNotesEntity
}

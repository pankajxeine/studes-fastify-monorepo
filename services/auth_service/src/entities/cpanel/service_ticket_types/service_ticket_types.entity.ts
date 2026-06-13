import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type ServiceTicketTypesAttributes = {
  id?: number | null
  name?: string | null
  status?: string
  createdBy?: number | null
  hours?: number | null
  sequence?: number | null
  updatedBy?: number | null
  createdAt?: Date | null
  updatedAt?: Date | null
  deletedAt?: Date | null
}

export type ServiceTicketTypesCreationAttributes = Optional<ServiceTicketTypesAttributes, "id" | "name" | "status" | "createdBy" | "hours" | "sequence" | "updatedBy" | "createdAt" | "updatedAt" | "deletedAt">

export class ServiceTicketTypesEntity
  extends Model<ServiceTicketTypesAttributes, ServiceTicketTypesCreationAttributes>
  implements ServiceTicketTypesAttributes
{
  declare id: number | null
  declare name: string | null
  declare status: string
  declare createdBy: number | null
  declare hours: number | null
  declare sequence: number | null
  declare updatedBy: number | null
  declare createdAt: Date | null
  declare updatedAt: Date | null
  declare deletedAt: Date | null
}

export function initServiceTicketTypesEntity(sequelize: Sequelize): typeof ServiceTicketTypesEntity {
  ServiceTicketTypesEntity.init(
    {
      id: {
        type: DataTypes.TEXT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.CHAR(50),
        field: 'name',
        allowNull: true,
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "Active",
      },
      createdBy: {
        type: DataTypes.TEXT,
        field: 'created_by',
        allowNull: true,
      },
      hours: {
        type: DataTypes.TEXT,
        field: 'hours',
        allowNull: true,
        defaultValue: 0,
      },
      sequence: {
        type: DataTypes.TEXT,
        field: 'sequence',
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
      tableName: 'service_ticket_types',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return ServiceTicketTypesEntity
}

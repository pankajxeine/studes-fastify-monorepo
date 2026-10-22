import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type ServiceTicketTypesAttributes = {
  id?: string | number | null
  name?: string | null
  status?: string
  createdBy?: number | null
  hours?: number | null
  sequence?: number | null
  updatedBy?: number | null
  createdAt?: Date
  updatedAt?: Date
}

export type ServiceTicketTypesCreationAttributes = Optional<ServiceTicketTypesAttributes, "id" | "name" | "status" | "createdBy" | "hours" | "sequence" | "updatedBy" | "createdAt" | "updatedAt">

export class ServiceTicketTypesEntity
  extends Model<ServiceTicketTypesAttributes, ServiceTicketTypesCreationAttributes>
  implements ServiceTicketTypesAttributes
{
  declare id: string | number | null
  declare name: string | null
  declare status: string
  declare createdBy: number | null
  declare hours: number | null
  declare sequence: number | null
  declare updatedBy: number | null
  declare createdAt: Date
  declare updatedAt: Date
}

export function initServiceTicketTypesEntity(sequelize: Sequelize): typeof ServiceTicketTypesEntity {
  ServiceTicketTypesEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      name: {
        type: DataTypes.STRING(50),
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
      tableName: 'service_ticket_types',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return ServiceTicketTypesEntity
}

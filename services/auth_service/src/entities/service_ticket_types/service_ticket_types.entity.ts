import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type ServiceTicketTypesAttributes = {
  id?: number
  name: string
  status?: string
  created_by: string
  hours?: number | null
  sequence: number
  updated_by: string
  created_at: Date
  updated_at: Date
  deleted_at?: Date | null
}

export type ServiceTicketTypesCreationAttributes = Optional<ServiceTicketTypesAttributes, "id" | "status" | "hours" | "deleted_at">

export class ServiceTicketTypesEntity
  extends Model<ServiceTicketTypesAttributes, ServiceTicketTypesCreationAttributes>
  implements ServiceTicketTypesAttributes
{
  declare id: number
  declare name: string
  declare status: string
  declare created_by: string
  declare hours: number | null
  declare sequence: number
  declare updated_by: string
  declare created_at: Date
  declare updated_at: Date
  declare deleted_at: Date | null
}

export function initServiceTicketTypesEntity(sequelize: Sequelize): typeof ServiceTicketTypesEntity {
  ServiceTicketTypesEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true ,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(50),
        field: 'name',
        allowNull: false,
        unique: true,
      },
      status: {
        type: DataTypes.ENUM('active','inactive'),
        field: 'status',
        allowNull: false,
        defaultValue: "Active",
      },
      created_by: {
        type: DataTypes.STRING(50),
        field: 'created_by',
        allowNull: false,
      },
      hours: {
        type: DataTypes.INTEGER,
        field: 'hours',
        allowNull: true,
        defaultValue: null,
      },
      sequence: {
        type: DataTypes.INTEGER,
        field: 'sequence',
        allowNull: false,
      },
      updated_by: {
        type: DataTypes.STRING(50),
        field: 'updated_by',
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
      },
      updated_at: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
      },
      deleted_at: {
        type: DataTypes.DATE,
        field: 'deleted_at',
        allowNull: true,
        unique: true,
        defaultValue: null,
      }
    },
    {
      sequelize,
      tableName: 'service_ticket_types',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true
    }
  )
  return ServiceTicketTypesEntity
}

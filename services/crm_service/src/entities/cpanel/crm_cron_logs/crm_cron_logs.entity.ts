import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CrmCronLogsAttributes = {
  id?: string | number | null
  cron: string
  log: string
  startTime: Date
  endTime?: Date | null
  status?: string
  createdAt?: Date
  updatedAt?: Date
}

export type CrmCronLogsCreationAttributes = Optional<CrmCronLogsAttributes, "id" | "endTime" | "status" | "createdAt" | "updatedAt">

export class CrmCronLogsEntity
  extends Model<CrmCronLogsAttributes, CrmCronLogsCreationAttributes>
  implements CrmCronLogsAttributes
{
  declare id: string | number | null
  declare cron: string
  declare log: string
  declare startTime: Date
  declare endTime: Date | null
  declare status: string
  declare createdAt: Date
  declare updatedAt: Date
}

export function initCrmCronLogsEntity(sequelize: Sequelize): typeof CrmCronLogsEntity {
  CrmCronLogsEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      cron: {
        type: DataTypes.STRING(100),
        field: 'cron',
        allowNull: false,
      },
      log: {
        type: DataTypes.TEXT,
        field: 'log',
        allowNull: false,
      },
      startTime: {
        type: DataTypes.DATE,
        field: 'start_time',
        allowNull: false,
      },
      endTime: {
        type: DataTypes.DATE,
        field: 'end_time',
        allowNull: true,
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "Inprogress",
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
      tableName: 'crm_cron_logs',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return CrmCronLogsEntity
}

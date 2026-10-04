import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CrmCronLogsAttributes = {
  id: number
  cron: string
  log: string
  startTime: Date
  endTime?: Date | null
  status?: string
}

export type CrmCronLogsCreationAttributes = Optional<CrmCronLogsAttributes, "endTime" | "status">

export class CrmCronLogsEntity
  extends Model<CrmCronLogsAttributes, CrmCronLogsCreationAttributes>
  implements CrmCronLogsAttributes
{
  declare id: number
  declare cron: string
  declare log: string
  declare startTime: Date
  declare endTime: Date | null
  declare status: string
}

export function initCrmCronLogsEntity(sequelize: Sequelize): typeof CrmCronLogsEntity {
  CrmCronLogsEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true,
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
        defaultValue: "'Inprogress' CHECK (\n        \"status\" IN ('Completed'",
      }
    },
    {
      sequelize,
      tableName: 'crm_cron_logs',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return CrmCronLogsEntity
}

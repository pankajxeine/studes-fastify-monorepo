import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CrmEmailLogsAttributes = {
  id?: string | number | null
  moduleName?: string
  subId?: number | null
  emailTemplateId?: number | null
  type?: string
  dateOfTrigger?: Date
  userId: number
  email?: string | null
  subject?: string | null
  message?: string | null
  finished?: string
  finishDateTime: Date
  response?: string | null
  createdAt?: Date
  updatedAt?: Date
  fromEmail?: string | null
}

export type CrmEmailLogsCreationAttributes = Optional<CrmEmailLogsAttributes, "id" | "moduleName" | "subId" | "emailTemplateId" | "type" | "dateOfTrigger" | "email" | "subject" | "message" | "finished" | "response" | "createdAt" | "updatedAt" | "fromEmail">

export class CrmEmailLogsEntity
  extends Model<CrmEmailLogsAttributes, CrmEmailLogsCreationAttributes>
  implements CrmEmailLogsAttributes
{
  declare id: string | number | null
  declare moduleName: string
  declare subId: number | null
  declare emailTemplateId: number | null
  declare type: string
  declare dateOfTrigger: Date
  declare userId: number
  declare email: string | null
  declare subject: string | null
  declare message: string | null
  declare finished: string
  declare finishDateTime: Date
  declare response: string | null
  declare createdAt: Date
  declare updatedAt: Date
  declare fromEmail: string | null
}

export function initCrmEmailLogsEntity(sequelize: Sequelize): typeof CrmEmailLogsEntity {
  CrmEmailLogsEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      moduleName: {
        type: DataTypes.STRING(100),
        field: 'module_name',
        allowNull: false,
        defaultValue: "",
      },
      subId: {
        type: DataTypes.INTEGER,
        field: 'sub_id',
        allowNull: true,
        defaultValue: "0",
        references: { model: 'subs', key: 'id' },
      },
      emailTemplateId: {
        type: DataTypes.INTEGER,
        field: 'email_template_id',
        allowNull: true,
        defaultValue: "0",
      },
      type: {
        type: DataTypes.TEXT,
        field: 'type',
        allowNull: false,
        defaultValue: "Email",
      },
      dateOfTrigger: {
        type: DataTypes.DATE,
        field: 'date_of_trigger',
        allowNull: false,
        defaultValue: "DataTypes.NOW",
      },
      userId: {
        type: DataTypes.INTEGER,
        field: 'user_id',
        allowNull: false,
        references: { model: 'users', key: 'id' },
      },
      email: {
        type: DataTypes.TEXT,
        field: 'email',
        allowNull: true,
      },
      subject: {
        type: DataTypes.STRING(100),
        field: 'subject',
        allowNull: true,
      },
      message: {
        type: DataTypes.TEXT,
        field: 'message',
        allowNull: true,
      },
      finished: {
        type: DataTypes.TEXT,
        field: 'finished',
        allowNull: false,
        defaultValue: "N",
      },
      finishDateTime: {
        type: DataTypes.DATE,
        field: 'finish_date_time',
        allowNull: false,
      },
      response: {
        type: DataTypes.TEXT,
        field: 'response',
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
      },
      fromEmail: {
        type: DataTypes.TEXT,
        field: 'from_email',
        allowNull: true,
        defaultValue: "",
      }
    },
    {
      sequelize,
      tableName: 'crm_email_logs',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return CrmEmailLogsEntity
}

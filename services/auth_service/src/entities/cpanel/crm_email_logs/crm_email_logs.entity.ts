import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CrmEmailLogsAttributes = {
  id?: number
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
  declare id: number
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
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
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
        defaultValue: "Email' CHECK (\"type\" IN ('Email",
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
      },
      email: {
        type: DataTypes.STRING(50),
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
        defaultValue: "N' CHECK (\"finished\" IN ('E",
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
        type: DataTypes.STRING(50),
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
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return CrmEmailLogsEntity
}

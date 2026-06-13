import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type EmailTemplateFieldsAttributes = {
  id?: number | null
  emailTemplateId?: number | null
  fieldName?: string | null
  fieldShortCode?: string | null
}

export type EmailTemplateFieldsCreationAttributes = Optional<EmailTemplateFieldsAttributes, "id" | "emailTemplateId" | "fieldName" | "fieldShortCode">

export class EmailTemplateFieldsEntity
  extends Model<EmailTemplateFieldsAttributes, EmailTemplateFieldsCreationAttributes>
  implements EmailTemplateFieldsAttributes
{
  declare id: number | null
  declare emailTemplateId: number | null
  declare fieldName: string | null
  declare fieldShortCode: string | null
}

export function initEmailTemplateFieldsEntity(sequelize: Sequelize): typeof EmailTemplateFieldsEntity {
  EmailTemplateFieldsEntity.init(
    {
      id: {
        type: DataTypes.TEXT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
      },
      emailTemplateId: {
        type: DataTypes.TEXT,
        field: 'email_template_id',
        allowNull: true,
      },
      fieldName: {
        type: DataTypes.CHAR(50),
        field: 'field_name',
        allowNull: true,
      },
      fieldShortCode: {
        type: DataTypes.CHAR(50),
        field: 'field_short_code',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'email_template_fields',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return EmailTemplateFieldsEntity
}

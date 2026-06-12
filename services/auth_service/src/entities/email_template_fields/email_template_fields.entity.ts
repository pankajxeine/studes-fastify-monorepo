import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type EmailTemplateFieldsAttributes = {
  id?: number
  email_template_id?: number | null
  field_name?: string | null
  field_short_code?: string | null
}

export type EmailTemplateFieldsCreationAttributes = Optional<EmailTemplateFieldsAttributes, "id" | "email_template_id" | "field_name" | "field_short_code">

export class EmailTemplateFieldsEntity
  extends Model<EmailTemplateFieldsAttributes, EmailTemplateFieldsCreationAttributes>
  implements EmailTemplateFieldsAttributes
{
  declare id: number
  declare email_template_id: number | null
  declare field_name: string | null
  declare field_short_code: string | null
}

export function initEmailTemplateFieldsEntity(sequelize: Sequelize): typeof EmailTemplateFieldsEntity {
  EmailTemplateFieldsEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true ,
        autoIncrement: true,
      },
      email_template_id: {
        type: DataTypes.INTEGER,
        field: 'email_template_id',
        allowNull: true,
        defaultValue: null,
      },
      field_name: {
        type: DataTypes.STRING(50),
        field: 'field_name',
        allowNull: true,
        defaultValue: null,
      },
      field_short_code: {
        type: DataTypes.STRING(50),
        field: 'field_short_code',
        allowNull: true,
        defaultValue: null,
      }
    },
    {
      sequelize,
      tableName: 'email_template_fields',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true
    }
  )
  return EmailTemplateFieldsEntity
}

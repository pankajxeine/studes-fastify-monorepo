import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type EmailTemplateModulesAttributes = {
  id?: string | number | null
  module?: string | null
}

export type EmailTemplateModulesCreationAttributes = Optional<EmailTemplateModulesAttributes, "id" | "module">

export class EmailTemplateModulesEntity
  extends Model<EmailTemplateModulesAttributes, EmailTemplateModulesCreationAttributes>
  implements EmailTemplateModulesAttributes
{
  declare id: string | number | null
  declare module: string | null
}

export function initEmailTemplateModulesEntity(sequelize: Sequelize): typeof EmailTemplateModulesEntity {
  EmailTemplateModulesEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      module: {
        type: DataTypes.STRING(50),
        field: 'module',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'email_template_modules',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return EmailTemplateModulesEntity
}

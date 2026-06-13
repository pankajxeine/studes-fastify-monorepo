import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type EmailTemplateModulesAttributes = {
  id?: number | null
  module?: string | null
}

export type EmailTemplateModulesCreationAttributes = Optional<EmailTemplateModulesAttributes, "id" | "module">

export class EmailTemplateModulesEntity
  extends Model<EmailTemplateModulesAttributes, EmailTemplateModulesCreationAttributes>
  implements EmailTemplateModulesAttributes
{
  declare id: number | null
  declare module: string | null
}

export function initEmailTemplateModulesEntity(sequelize: Sequelize): typeof EmailTemplateModulesEntity {
  EmailTemplateModulesEntity.init(
    {
      id: {
        type: DataTypes.TEXT,
        field: 'id',
        allowNull: true,
      },
      module: {
        type: DataTypes.CHAR,
        field: 'module',
        allowNull: true,
        defaultValue: null,
      }
    },
    {
      sequelize,
      tableName: 'email_template_modules',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true
    }
  )
  return EmailTemplateModulesEntity
}

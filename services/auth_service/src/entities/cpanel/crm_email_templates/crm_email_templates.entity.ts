import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CrmEmailTemplatesAttributes = {
  id?: number
  name?: string | null
  shortCode?: string | null
  description?: string | null
  emailSubject?: string | null
  emailMessage?: string | null
  emailImages?: string | null
  createdBy?: number | null
  updatedBy?: number | null
  createdAt?: Date | null
  updatedAt?: Date | null
}

export type CrmEmailTemplatesCreationAttributes = Optional<CrmEmailTemplatesAttributes, "id" | "name" | "shortCode" | "description" | "emailSubject" | "emailMessage" | "emailImages" | "createdBy" | "updatedBy" | "createdAt" | "updatedAt">

export class CrmEmailTemplatesEntity
  extends Model<CrmEmailTemplatesAttributes, CrmEmailTemplatesCreationAttributes>
  implements CrmEmailTemplatesAttributes
{
  declare id: number
  declare name: string | null
  declare shortCode: string | null
  declare description: string | null
  declare emailSubject: string | null
  declare emailMessage: string | null
  declare emailImages: string | null
  declare createdBy: number | null
  declare updatedBy: number | null
  declare createdAt: Date | null
  declare updatedAt: Date | null
}

export function initCrmEmailTemplatesEntity(sequelize: Sequelize): typeof CrmEmailTemplatesEntity {
  CrmEmailTemplatesEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(100),
        field: 'name',
        allowNull: true,
      },
      shortCode: {
        type: DataTypes.STRING(100),
        field: 'short_code',
        allowNull: true,
      },
      description: {
        type: DataTypes.STRING(500),
        field: 'description',
        allowNull: true,
      },
      emailSubject: {
        type: DataTypes.STRING(255),
        field: 'email_subject',
        allowNull: true,
      },
      emailMessage: {
        type: DataTypes.TEXT,
        field: 'email_message',
        allowNull: true,
      },
      emailImages: {
        type: DataTypes.TEXT,
        field: 'email_images',
        allowNull: true,
      },
      createdBy: {
        type: DataTypes.INTEGER,
        field: 'created_by',
        allowNull: true,
      },
      updatedBy: {
        type: DataTypes.INTEGER,
        field: 'updated_by',
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: true,
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'crm_email_templates',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] },
      { unique: true, fields: ['uq_crm_email_templates_short_code', 'short_code'] }
      ]
    }
  )
  return CrmEmailTemplatesEntity
}

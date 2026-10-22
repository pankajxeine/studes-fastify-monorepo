import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CrmEmailTemplatesAttributes = {
  id?: string | number | null
  name?: string | null
  shortCode?: string | null
  description?: string | null
  emailSubject?: string | null
  emailMessage?: string | null
  emailImages?: string | null
  createdBy?: number | null
  updatedBy?: number | null
  createdAt?: Date
  updatedAt?: Date
}

export type CrmEmailTemplatesCreationAttributes = Optional<CrmEmailTemplatesAttributes, "id" | "name" | "shortCode" | "description" | "emailSubject" | "emailMessage" | "emailImages" | "createdBy" | "updatedBy" | "createdAt" | "updatedAt">

export class CrmEmailTemplatesEntity
  extends Model<CrmEmailTemplatesAttributes, CrmEmailTemplatesCreationAttributes>
  implements CrmEmailTemplatesAttributes
{
  declare id: string | number | null
  declare name: string | null
  declare shortCode: string | null
  declare description: string | null
  declare emailSubject: string | null
  declare emailMessage: string | null
  declare emailImages: string | null
  declare createdBy: number | null
  declare updatedBy: number | null
  declare createdAt: Date
  declare updatedAt: Date
}

export function initCrmEmailTemplatesEntity(sequelize: Sequelize): typeof CrmEmailTemplatesEntity {
  CrmEmailTemplatesEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
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
        type: DataTypes.TEXT,
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
      tableName: 'crm_email_templates',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] },
      { unique: true, fields: ['short_code'] }
      ]
    }
  )
  return CrmEmailTemplatesEntity
}

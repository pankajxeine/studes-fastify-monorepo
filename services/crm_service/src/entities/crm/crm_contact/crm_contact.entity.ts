import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CrmContactAttributes = {
  recordCode?: string
  contactId: string | null
  accountId: string
  firstName: string
  lastName: string
  email: string
  phone?: string | null
  jobTitle?: string | null
  isPrimary?: string
  isBilling?: string
  isTechnical?: string
  marketingConsent?: string
  preferredLocale?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
  deletedAt?: Date | null
}

export type CrmContactCreationAttributes = Optional<CrmContactAttributes, "recordCode" | "phone" | "jobTitle" | "isPrimary" | "isBilling" | "isTechnical" | "marketingConsent" | "preferredLocale" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy" | "deletedAt">

export class CrmContactEntity
  extends Model<CrmContactAttributes, CrmContactCreationAttributes>
  implements CrmContactAttributes
{
  declare recordCode: string
  declare contactId: string | null
  declare accountId: string
  declare firstName: string
  declare lastName: string
  declare email: string
  declare phone: string | null
  declare jobTitle: string | null
  declare isPrimary: string
  declare isBilling: string
  declare isTechnical: string
  declare marketingConsent: string
  declare preferredLocale: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
  declare deletedAt: Date | null
}

export function initCrmContactEntity(sequelize: Sequelize): typeof CrmContactEntity {
  CrmContactEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('crm_contact')"),
      },
      contactId: {
        type: DataTypes.TEXT,
        field: 'contact_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      accountId: {
        type: DataTypes.TEXT,
        field: 'account_id',
        allowNull: false,
        references: { model: 'crm_account', key: 'account_id' },
      },
      firstName: {
        type: DataTypes.TEXT,
        field: 'first_name',
        allowNull: false,
      },
      lastName: {
        type: DataTypes.TEXT,
        field: 'last_name',
        allowNull: false,
      },
      email: {
        type: DataTypes.TEXT,
        field: 'email',
        allowNull: false,
      },
      phone: {
        type: DataTypes.TEXT,
        field: 'phone',
        allowNull: true,
      },
      jobTitle: {
        type: DataTypes.TEXT,
        field: 'job_title',
        allowNull: true,
      },
      isPrimary: {
        type: DataTypes.TEXT,
        field: 'is_primary',
        allowNull: false,
        defaultValue: false,
      },
      isBilling: {
        type: DataTypes.TEXT,
        field: 'is_billing',
        allowNull: false,
        defaultValue: false,
      },
      isTechnical: {
        type: DataTypes.TEXT,
        field: 'is_technical',
        allowNull: false,
        defaultValue: false,
      },
      marketingConsent: {
        type: DataTypes.TEXT,
        field: 'marketing_consent',
        allowNull: false,
        defaultValue: false,
      },
      preferredLocale: {
        type: DataTypes.TEXT,
        field: 'preferred_locale',
        allowNull: false,
        defaultValue: "en-US",
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      createdBy: {
        type: DataTypes.UUID,
        field: 'created_by',
        allowNull: true,
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updatedBy: {
        type: DataTypes.UUID,
        field: 'updated_by',
        allowNull: true,
      },
      deletedAt: {
        type: DataTypes.DATE,
        field: 'deleted_at',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'crm_contact',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true,
      deletedAt: 'deletedAt'
    }
  )
  return CrmContactEntity
}

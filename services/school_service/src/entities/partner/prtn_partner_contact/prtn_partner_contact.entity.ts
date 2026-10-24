import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PrtnPartnerContactAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  partnerContactId?: string
  partnerOrganizationId: string
  personId: string
  jobTitle?: string | null
  department?: string | null
  isPrimary?: string
  canPostDrives?: string
  startOn?: string
  endOn?: Date | null
  isActive?: string
  notes?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type PrtnPartnerContactCreationAttributes = Optional<PrtnPartnerContactAttributes, "id" | "publicId" | "recordCode" | "partnerContactId" | "jobTitle" | "department" | "isPrimary" | "canPostDrives" | "startOn" | "endOn" | "isActive" | "notes" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class PrtnPartnerContactEntity
  extends Model<PrtnPartnerContactAttributes, PrtnPartnerContactCreationAttributes>
  implements PrtnPartnerContactAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare partnerContactId: string
  declare partnerOrganizationId: string
  declare personId: string
  declare jobTitle: string | null
  declare department: string | null
  declare isPrimary: string
  declare canPostDrives: string
  declare startOn: string
  declare endOn: Date | null
  declare isActive: string
  declare notes: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initPrtnPartnerContactEntity(sequelize: Sequelize): typeof PrtnPartnerContactEntity {
  PrtnPartnerContactEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
      },
      publicId: {
        type: DataTypes.TEXT,
        field: 'public_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('prtn_partner_contact')"),
      },
      partnerContactId: {
        type: DataTypes.TEXT,
        field: 'partner_contact_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      partnerOrganizationId: {
        type: DataTypes.TEXT,
        field: 'partner_organization_id',
        allowNull: false,
        references: { model: 'prtn_partner_organization', key: 'partner_organization_id' },
      },
      personId: {
        type: DataTypes.TEXT,
        field: 'person_id',
        allowNull: false,
        references: { model: 'ppl_person', key: 'person_id' },
      },
      jobTitle: {
        type: DataTypes.TEXT,
        field: 'job_title',
        allowNull: true,
      },
      department: {
        type: DataTypes.TEXT,
        field: 'department',
        allowNull: true,
      },
      isPrimary: {
        type: DataTypes.TEXT,
        field: 'is_primary',
        allowNull: false,
        defaultValue: false,
      },
      canPostDrives: {
        type: DataTypes.TEXT,
        field: 'can_post_drives',
        allowNull: false,
        defaultValue: false,
      },
      startOn: {
        type: DataTypes.TEXT,
        field: 'start_on',
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_DATE"),
      },
      endOn: {
        type: DataTypes.DATEONLY,
        field: 'end_on',
        allowNull: true,
      },
      isActive: {
        type: DataTypes.TEXT,
        field: 'is_active',
        allowNull: false,
        defaultValue: true,
      },
      notes: {
        type: DataTypes.TEXT,
        field: 'notes',
        allowNull: true,
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
      }
    },
    {
      sequelize,
      tableName: 'prtn_partner_contact',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['partner_organization_id', 'person_id'] },
      { unique: true, fields: ['partner_contact_id', 'partner_organization_id'] }
      ]
    }
  )
  return PrtnPartnerContactEntity
}

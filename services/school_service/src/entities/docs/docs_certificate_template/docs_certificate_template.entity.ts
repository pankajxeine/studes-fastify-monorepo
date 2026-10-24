import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type DocsCertificateTemplateAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  certificateTemplateId?: string
  campusId?: string | null
  code: string
  name: string
  certificateType: string
  bodyTemplate: string
  templateFileId?: string | null
  numberPrefix: string
  validityDays?: number | null
  requiresApproval?: string
  signatoryTitle?: string
  isActive?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type DocsCertificateTemplateCreationAttributes = Optional<DocsCertificateTemplateAttributes, "id" | "publicId" | "recordCode" | "certificateTemplateId" | "campusId" | "templateFileId" | "validityDays" | "requiresApproval" | "signatoryTitle" | "isActive" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class DocsCertificateTemplateEntity
  extends Model<DocsCertificateTemplateAttributes, DocsCertificateTemplateCreationAttributes>
  implements DocsCertificateTemplateAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare certificateTemplateId: string
  declare campusId: string | null
  declare code: string
  declare name: string
  declare certificateType: string
  declare bodyTemplate: string
  declare templateFileId: string | null
  declare numberPrefix: string
  declare validityDays: number | null
  declare requiresApproval: string
  declare signatoryTitle: string
  declare isActive: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initDocsCertificateTemplateEntity(sequelize: Sequelize): typeof DocsCertificateTemplateEntity {
  DocsCertificateTemplateEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('docs_certificate_template')"),
      },
      certificateTemplateId: {
        type: DataTypes.TEXT,
        field: 'certificate_template_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      campusId: {
        type: DataTypes.TEXT,
        field: 'campus_id',
        allowNull: true,
        references: { model: 'org_campus', key: 'campus_id' },
      },
      code: {
        type: DataTypes.STRING(30),
        field: 'code',
        allowNull: false,
      },
      name: {
        type: DataTypes.TEXT,
        field: 'name',
        allowNull: false,
      },
      certificateType: {
        type: DataTypes.TEXT,
        field: 'certificate_type',
        allowNull: false,
      },
      bodyTemplate: {
        type: DataTypes.TEXT,
        field: 'body_template',
        allowNull: false,
      },
      templateFileId: {
        type: DataTypes.TEXT,
        field: 'template_file_id',
        allowNull: true,
        references: { model: 'docs_file', key: 'file_id' },
      },
      numberPrefix: {
        type: DataTypes.STRING(10),
        field: 'number_prefix',
        allowNull: false,
      },
      validityDays: {
        type: DataTypes.SMALLINT,
        field: 'validity_days',
        allowNull: true,
      },
      requiresApproval: {
        type: DataTypes.TEXT,
        field: 'requires_approval',
        allowNull: false,
        defaultValue: true,
      },
      signatoryTitle: {
        type: DataTypes.TEXT,
        field: 'signatory_title',
        allowNull: false,
        defaultValue: "Principal",
      },
      isActive: {
        type: DataTypes.TEXT,
        field: 'is_active',
        allowNull: false,
        defaultValue: true,
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
      tableName: 'docs_certificate_template',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['campus_id', 'code'] }
      ]
    }
  )
  return DocsCertificateTemplateEntity
}

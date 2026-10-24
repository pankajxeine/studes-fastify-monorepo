import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type DocsDocumentTypeAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  documentTypeCode?: string | null
  name: string
  description?: string | null
  appliesTo?: string
  isIdentity?: string
  requiresVerification?: string
  hasExpiry?: string
  maxSizeMb?: number
  allowedMimeTypes?: string
  sortOrder?: number
  isActive?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type DocsDocumentTypeCreationAttributes = Optional<DocsDocumentTypeAttributes, "id" | "publicId" | "recordCode" | "documentTypeCode" | "description" | "appliesTo" | "isIdentity" | "requiresVerification" | "hasExpiry" | "maxSizeMb" | "allowedMimeTypes" | "sortOrder" | "isActive" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class DocsDocumentTypeEntity
  extends Model<DocsDocumentTypeAttributes, DocsDocumentTypeCreationAttributes>
  implements DocsDocumentTypeAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare documentTypeCode: string | null
  declare name: string
  declare description: string | null
  declare appliesTo: string
  declare isIdentity: string
  declare requiresVerification: string
  declare hasExpiry: string
  declare maxSizeMb: number
  declare allowedMimeTypes: string
  declare sortOrder: number
  declare isActive: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initDocsDocumentTypeEntity(sequelize: Sequelize): typeof DocsDocumentTypeEntity {
  DocsDocumentTypeEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('docs_document_type')"),
      },
      documentTypeCode: {
        type: DataTypes.TEXT,
        field: 'document_type_code',
        allowNull: true,
        unique: true,
      },
      name: {
        type: DataTypes.TEXT,
        field: 'name',
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        field: 'description',
        allowNull: true,
      },
      appliesTo: {
        type: DataTypes.STRING(10),
        field: 'applies_to',
        allowNull: false,
        defaultValue: "any",
      },
      isIdentity: {
        type: DataTypes.TEXT,
        field: 'is_identity',
        allowNull: false,
        defaultValue: false,
      },
      requiresVerification: {
        type: DataTypes.TEXT,
        field: 'requires_verification',
        allowNull: false,
        defaultValue: true,
      },
      hasExpiry: {
        type: DataTypes.TEXT,
        field: 'has_expiry',
        allowNull: false,
        defaultValue: false,
      },
      maxSizeMb: {
        type: DataTypes.SMALLINT,
        field: 'max_size_mb',
        allowNull: false,
        defaultValue: 10,
      },
      allowedMimeTypes: {
        type: DataTypes.TEXT,
        field: 'allowed_mime_types',
        allowNull: false,
        defaultValue: Sequelize.literal("ARRAY[\r\n        'application/pdf'"),
      },
      sortOrder: {
        type: DataTypes.SMALLINT,
        field: 'sort_order',
        allowNull: false,
        defaultValue: 0,
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
      tableName: 'docs_document_type',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return DocsDocumentTypeEntity
}

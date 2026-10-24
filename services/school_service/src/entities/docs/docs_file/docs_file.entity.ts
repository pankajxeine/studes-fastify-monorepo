import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type DocsFileAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  fileId?: string
  fileName: string
  mimeType: string
  sizeBytes: string | number
  storageProvider?: string
  storageKey: string
  checksumSha256?: string | null
  ownerModule: string
  visibility?: string
  scanStatus?: string
  description?: string | null
  uploadedByUserId?: string | null
  uploadedAt?: Date
  retentionUntil?: Date | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type DocsFileCreationAttributes = Optional<DocsFileAttributes, "id" | "publicId" | "recordCode" | "fileId" | "storageProvider" | "checksumSha256" | "visibility" | "scanStatus" | "description" | "uploadedByUserId" | "uploadedAt" | "retentionUntil" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class DocsFileEntity
  extends Model<DocsFileAttributes, DocsFileCreationAttributes>
  implements DocsFileAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare fileId: string
  declare fileName: string
  declare mimeType: string
  declare sizeBytes: string | number
  declare storageProvider: string
  declare storageKey: string
  declare checksumSha256: string | null
  declare ownerModule: string
  declare visibility: string
  declare scanStatus: string
  declare description: string | null
  declare uploadedByUserId: string | null
  declare uploadedAt: Date
  declare retentionUntil: Date | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initDocsFileEntity(sequelize: Sequelize): typeof DocsFileEntity {
  DocsFileEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('docs_file')"),
      },
      fileId: {
        type: DataTypes.TEXT,
        field: 'file_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      fileName: {
        type: DataTypes.TEXT,
        field: 'file_name',
        allowNull: false,
      },
      mimeType: {
        type: DataTypes.STRING(100),
        field: 'mime_type',
        allowNull: false,
      },
      sizeBytes: {
        type: DataTypes.BIGINT,
        field: 'size_bytes',
        allowNull: false,
      },
      storageProvider: {
        type: DataTypes.STRING(20),
        field: 'storage_provider',
        allowNull: false,
        defaultValue: "s3",
      },
      storageKey: {
        type: DataTypes.TEXT,
        field: 'storage_key',
        allowNull: false,
      },
      checksumSha256: {
        type: DataTypes.CHAR(64),
        field: 'checksum_sha256',
        allowNull: true,
      },
      ownerModule: {
        type: DataTypes.STRING(30),
        field: 'owner_module',
        allowNull: false,
      },
      visibility: {
        type: DataTypes.STRING(10),
        field: 'visibility',
        allowNull: false,
        defaultValue: "private",
      },
      scanStatus: {
        type: DataTypes.STRING(10),
        field: 'scan_status',
        allowNull: false,
        defaultValue: "pending",
      },
      description: {
        type: DataTypes.TEXT,
        field: 'description',
        allowNull: true,
      },
      uploadedByUserId: {
        type: DataTypes.TEXT,
        field: 'uploaded_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      uploadedAt: {
        type: DataTypes.DATE,
        field: 'uploaded_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      retentionUntil: {
        type: DataTypes.DATEONLY,
        field: 'retention_until',
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
      tableName: 'docs_file',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['storage_provider', 'storage_key'] }
      ]
    }
  )
  return DocsFileEntity
}

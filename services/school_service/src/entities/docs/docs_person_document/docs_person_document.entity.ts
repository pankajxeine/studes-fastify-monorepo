import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type DocsPersonDocumentAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  personDocumentId?: string
  personId: string
  documentTypeCode: string
  fileId: string
  documentNo?: string | null
  issuingAuthority?: string | null
  issuedOn?: Date | null
  expiresOn?: Date | null
  verificationStatus?: string
  submittedAt?: Date
  verifiedByUserId?: string | null
  verifiedAt?: Date | null
  rejectionReason?: string | null
  notes?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type DocsPersonDocumentCreationAttributes = Optional<DocsPersonDocumentAttributes, "id" | "publicId" | "recordCode" | "personDocumentId" | "documentNo" | "issuingAuthority" | "issuedOn" | "expiresOn" | "verificationStatus" | "submittedAt" | "verifiedByUserId" | "verifiedAt" | "rejectionReason" | "notes" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class DocsPersonDocumentEntity
  extends Model<DocsPersonDocumentAttributes, DocsPersonDocumentCreationAttributes>
  implements DocsPersonDocumentAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare personDocumentId: string
  declare personId: string
  declare documentTypeCode: string
  declare fileId: string
  declare documentNo: string | null
  declare issuingAuthority: string | null
  declare issuedOn: Date | null
  declare expiresOn: Date | null
  declare verificationStatus: string
  declare submittedAt: Date
  declare verifiedByUserId: string | null
  declare verifiedAt: Date | null
  declare rejectionReason: string | null
  declare notes: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initDocsPersonDocumentEntity(sequelize: Sequelize): typeof DocsPersonDocumentEntity {
  DocsPersonDocumentEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('docs_person_document')"),
      },
      personDocumentId: {
        type: DataTypes.TEXT,
        field: 'person_document_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      personId: {
        type: DataTypes.TEXT,
        field: 'person_id',
        allowNull: false,
        references: { model: 'ppl_person', key: 'person_id' },
      },
      documentTypeCode: {
        type: DataTypes.TEXT,
        field: 'document_type_code',
        allowNull: false,
        references: { model: 'docs_document_type', key: 'document_type_code' },
        onUpdate: 'CASCADE',
      },
      fileId: {
        type: DataTypes.TEXT,
        field: 'file_id',
        allowNull: false,
        references: { model: 'docs_file', key: 'file_id' },
      },
      documentNo: {
        type: DataTypes.STRING(60),
        field: 'document_no',
        allowNull: true,
      },
      issuingAuthority: {
        type: DataTypes.TEXT,
        field: 'issuing_authority',
        allowNull: true,
      },
      issuedOn: {
        type: DataTypes.DATEONLY,
        field: 'issued_on',
        allowNull: true,
      },
      expiresOn: {
        type: DataTypes.DATEONLY,
        field: 'expires_on',
        allowNull: true,
      },
      verificationStatus: {
        type: DataTypes.TEXT,
        field: 'verification_status',
        allowNull: false,
        defaultValue: "pending",
      },
      submittedAt: {
        type: DataTypes.DATE,
        field: 'submitted_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      verifiedByUserId: {
        type: DataTypes.TEXT,
        field: 'verified_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      verifiedAt: {
        type: DataTypes.DATE,
        field: 'verified_at',
        allowNull: true,
      },
      rejectionReason: {
        type: DataTypes.TEXT,
        field: 'rejection_reason',
        allowNull: true,
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
      tableName: 'docs_person_document',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return DocsPersonDocumentEntity
}

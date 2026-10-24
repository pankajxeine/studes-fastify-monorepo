import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type AdmisApplicationDocumentAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  applicationDocumentId?: string
  applicationId: string
  documentTypeCode: string
  fileId?: string | null
  isRequired?: string
  status?: string
  receivedAt?: Date | null
  verifiedAt?: Date | null
  verifiedByUserId?: string | null
  rejectionReason?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type AdmisApplicationDocumentCreationAttributes = Optional<AdmisApplicationDocumentAttributes, "id" | "publicId" | "recordCode" | "applicationDocumentId" | "fileId" | "isRequired" | "status" | "receivedAt" | "verifiedAt" | "verifiedByUserId" | "rejectionReason" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class AdmisApplicationDocumentEntity
  extends Model<AdmisApplicationDocumentAttributes, AdmisApplicationDocumentCreationAttributes>
  implements AdmisApplicationDocumentAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare applicationDocumentId: string
  declare applicationId: string
  declare documentTypeCode: string
  declare fileId: string | null
  declare isRequired: string
  declare status: string
  declare receivedAt: Date | null
  declare verifiedAt: Date | null
  declare verifiedByUserId: string | null
  declare rejectionReason: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initAdmisApplicationDocumentEntity(sequelize: Sequelize): typeof AdmisApplicationDocumentEntity {
  AdmisApplicationDocumentEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('admis_application_document')"),
      },
      applicationDocumentId: {
        type: DataTypes.TEXT,
        field: 'application_document_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      applicationId: {
        type: DataTypes.TEXT,
        field: 'application_id',
        allowNull: false,
        references: { model: 'admis_application', key: 'application_id' },
        onDelete: 'CASCADE',
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
        allowNull: true,
        references: { model: 'docs_file', key: 'file_id' },
      },
      isRequired: {
        type: DataTypes.TEXT,
        field: 'is_required',
        allowNull: false,
        defaultValue: true,
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "pending",
      },
      receivedAt: {
        type: DataTypes.DATE,
        field: 'received_at',
        allowNull: true,
      },
      verifiedAt: {
        type: DataTypes.DATE,
        field: 'verified_at',
        allowNull: true,
      },
      verifiedByUserId: {
        type: DataTypes.TEXT,
        field: 'verified_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      rejectionReason: {
        type: DataTypes.TEXT,
        field: 'rejection_reason',
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
      tableName: 'admis_application_document',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['application_id', 'document_type_code'] }
      ]
    }
  )
  return AdmisApplicationDocumentEntity
}

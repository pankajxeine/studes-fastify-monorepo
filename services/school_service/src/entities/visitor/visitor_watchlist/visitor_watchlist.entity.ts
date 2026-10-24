import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type VisitorWatchlistAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  watchlistId?: string
  personId?: string | null
  fullName: string
  dateOfBirth?: Date | null
  idDocumentType?: string | null
  idDocumentNo?: string | null
  idDocumentKey?: string | null
  photoFileId?: string | null
  campusId?: string | null
  reasonCategory: string
  reason: string
  referenceNo?: string | null
  matchAction?: string
  severity?: string
  validFrom?: string
  validTo?: Date | null
  validity?: string | null
  addedByUserId: string
  liftedAt?: Date | null
  liftedByUserId?: string | null
  liftReason?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type VisitorWatchlistCreationAttributes = Optional<VisitorWatchlistAttributes, "id" | "publicId" | "recordCode" | "watchlistId" | "personId" | "dateOfBirth" | "idDocumentType" | "idDocumentNo" | "idDocumentKey" | "photoFileId" | "campusId" | "referenceNo" | "matchAction" | "severity" | "validFrom" | "validTo" | "validity" | "liftedAt" | "liftedByUserId" | "liftReason" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class VisitorWatchlistEntity
  extends Model<VisitorWatchlistAttributes, VisitorWatchlistCreationAttributes>
  implements VisitorWatchlistAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare watchlistId: string
  declare personId: string | null
  declare fullName: string
  declare dateOfBirth: Date | null
  declare idDocumentType: string | null
  declare idDocumentNo: string | null
  declare idDocumentKey: string | null
  declare photoFileId: string | null
  declare campusId: string | null
  declare reasonCategory: string
  declare reason: string
  declare referenceNo: string | null
  declare matchAction: string
  declare severity: string
  declare validFrom: string
  declare validTo: Date | null
  declare validity: string | null
  declare addedByUserId: string
  declare liftedAt: Date | null
  declare liftedByUserId: string | null
  declare liftReason: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initVisitorWatchlistEntity(sequelize: Sequelize): typeof VisitorWatchlistEntity {
  VisitorWatchlistEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('visitor_watchlist')"),
      },
      watchlistId: {
        type: DataTypes.TEXT,
        field: 'watchlist_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      personId: {
        type: DataTypes.TEXT,
        field: 'person_id',
        allowNull: true,
        references: { model: 'ppl_person', key: 'person_id' },
      },
      fullName: {
        type: DataTypes.TEXT,
        field: 'full_name',
        allowNull: false,
      },
      dateOfBirth: {
        type: DataTypes.DATEONLY,
        field: 'date_of_birth',
        allowNull: true,
      },
      idDocumentType: {
        type: DataTypes.STRING(20),
        field: 'id_document_type',
        allowNull: true,
      },
      idDocumentNo: {
        type: DataTypes.STRING(40),
        field: 'id_document_no',
        allowNull: true,
      },
      idDocumentKey: {
        type: DataTypes.STRING(40),
        field: 'id_document_key',
        allowNull: true,
        autoIncrement: true,
      },
      photoFileId: {
        type: DataTypes.TEXT,
        field: 'photo_file_id',
        allowNull: true,
        references: { model: 'docs_file', key: 'file_id' },
      },
      campusId: {
        type: DataTypes.TEXT,
        field: 'campus_id',
        allowNull: true,
        references: { model: 'org_campus', key: 'campus_id' },
      },
      reasonCategory: {
        type: DataTypes.STRING(30),
        field: 'reason_category',
        allowNull: false,
      },
      reason: {
        type: DataTypes.TEXT,
        field: 'reason',
        allowNull: false,
      },
      referenceNo: {
        type: DataTypes.STRING(40),
        field: 'reference_no',
        allowNull: true,
      },
      matchAction: {
        type: DataTypes.STRING(20),
        field: 'match_action',
        allowNull: false,
        defaultValue: "deny_entry",
      },
      severity: {
        type: DataTypes.STRING(10),
        field: 'severity',
        allowNull: false,
        defaultValue: "high",
      },
      validFrom: {
        type: DataTypes.TEXT,
        field: 'valid_from',
        allowNull: false,
        defaultValue: Sequelize.literal("current_date"),
      },
      validTo: {
        type: DataTypes.DATEONLY,
        field: 'valid_to',
        allowNull: true,
      },
      validity: {
        type: DataTypes.TEXT,
        field: 'validity',
        allowNull: true,
        autoIncrement: true,
      },
      addedByUserId: {
        type: DataTypes.TEXT,
        field: 'added_by_user_id',
        allowNull: false,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      liftedAt: {
        type: DataTypes.DATE,
        field: 'lifted_at',
        allowNull: true,
      },
      liftedByUserId: {
        type: DataTypes.TEXT,
        field: 'lifted_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      liftReason: {
        type: DataTypes.TEXT,
        field: 'lift_reason',
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
      tableName: 'visitor_watchlist',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return VisitorWatchlistEntity
}

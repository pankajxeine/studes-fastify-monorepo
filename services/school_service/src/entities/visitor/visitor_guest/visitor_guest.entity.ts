import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type VisitorGuestAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  guestId?: string
  personId: string
  guestType?: string
  organizationName?: string | null
  designation?: string | null
  vendorId?: string | null
  idDocumentType?: string | null
  idDocumentNo?: string | null
  idDocumentKey?: string | null
  photoFileId?: string | null
  vehicleNo?: string | null
  safetyInductionOn?: Date | null
  ndaSignedOn?: Date | null
  isFrequentVisitor?: string
  isActive?: string
  notes?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type VisitorGuestCreationAttributes = Optional<VisitorGuestAttributes, "id" | "publicId" | "recordCode" | "guestId" | "guestType" | "organizationName" | "designation" | "vendorId" | "idDocumentType" | "idDocumentNo" | "idDocumentKey" | "photoFileId" | "vehicleNo" | "safetyInductionOn" | "ndaSignedOn" | "isFrequentVisitor" | "isActive" | "notes" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class VisitorGuestEntity
  extends Model<VisitorGuestAttributes, VisitorGuestCreationAttributes>
  implements VisitorGuestAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare guestId: string
  declare personId: string
  declare guestType: string
  declare organizationName: string | null
  declare designation: string | null
  declare vendorId: string | null
  declare idDocumentType: string | null
  declare idDocumentNo: string | null
  declare idDocumentKey: string | null
  declare photoFileId: string | null
  declare vehicleNo: string | null
  declare safetyInductionOn: Date | null
  declare ndaSignedOn: Date | null
  declare isFrequentVisitor: string
  declare isActive: string
  declare notes: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initVisitorGuestEntity(sequelize: Sequelize): typeof VisitorGuestEntity {
  VisitorGuestEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('visitor_guest')"),
      },
      guestId: {
        type: DataTypes.TEXT,
        field: 'guest_id',
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
      guestType: {
        type: DataTypes.TEXT,
        field: 'guest_type',
        allowNull: false,
        defaultValue: "visitor",
      },
      organizationName: {
        type: DataTypes.TEXT,
        field: 'organization_name',
        allowNull: true,
      },
      designation: {
        type: DataTypes.TEXT,
        field: 'designation',
        allowNull: true,
      },
      vendorId: {
        type: DataTypes.TEXT,
        field: 'vendor_id',
        allowNull: true,
        references: { model: 'org_vendor', key: 'vendor_id' },
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
      vehicleNo: {
        type: DataTypes.STRING(20),
        field: 'vehicle_no',
        allowNull: true,
      },
      safetyInductionOn: {
        type: DataTypes.DATEONLY,
        field: 'safety_induction_on',
        allowNull: true,
      },
      ndaSignedOn: {
        type: DataTypes.DATEONLY,
        field: 'nda_signed_on',
        allowNull: true,
      },
      isFrequentVisitor: {
        type: DataTypes.TEXT,
        field: 'is_frequent_visitor',
        allowNull: false,
        defaultValue: false,
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
      tableName: 'visitor_guest',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['person_id'] }
      ]
    }
  )
  return VisitorGuestEntity
}

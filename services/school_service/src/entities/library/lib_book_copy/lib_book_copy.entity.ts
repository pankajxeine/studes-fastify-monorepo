import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type LibBookCopyAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  bookCopyId?: string
  bookId: string
  campusId: string
  roomId?: string | null
  accessionNo: string
  barcode: string
  shelfLocation?: string | null
  status?: string
  isLoanable?: string
  acquiredOn: string
  acquisitionSource?: string
  priceAmount?: string | null
  vendorId?: string | null
  conditionNote?: string | null
  withdrawnOn?: Date | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type LibBookCopyCreationAttributes = Optional<LibBookCopyAttributes, "id" | "publicId" | "recordCode" | "bookCopyId" | "roomId" | "shelfLocation" | "status" | "isLoanable" | "acquisitionSource" | "priceAmount" | "vendorId" | "conditionNote" | "withdrawnOn" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class LibBookCopyEntity
  extends Model<LibBookCopyAttributes, LibBookCopyCreationAttributes>
  implements LibBookCopyAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare bookCopyId: string
  declare bookId: string
  declare campusId: string
  declare roomId: string | null
  declare accessionNo: string
  declare barcode: string
  declare shelfLocation: string | null
  declare status: string
  declare isLoanable: string
  declare acquiredOn: string
  declare acquisitionSource: string
  declare priceAmount: string | null
  declare vendorId: string | null
  declare conditionNote: string | null
  declare withdrawnOn: Date | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initLibBookCopyEntity(sequelize: Sequelize): typeof LibBookCopyEntity {
  LibBookCopyEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('lib_book_copy')"),
      },
      bookCopyId: {
        type: DataTypes.TEXT,
        field: 'book_copy_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      bookId: {
        type: DataTypes.TEXT,
        field: 'book_id',
        allowNull: false,
        references: { model: 'lib_book', key: 'book_id' },
      },
      campusId: {
        type: DataTypes.TEXT,
        field: 'campus_id',
        allowNull: false,
        references: { model: 'org_campus', key: 'campus_id' },
      },
      roomId: {
        type: DataTypes.TEXT,
        field: 'room_id',
        allowNull: true,
        references: { model: 'org_room', key: 'room_id' },
      },
      accessionNo: {
        type: DataTypes.STRING(30),
        field: 'accession_no',
        allowNull: false,
      },
      barcode: {
        type: DataTypes.STRING(40),
        field: 'barcode',
        allowNull: false,
      },
      shelfLocation: {
        type: DataTypes.STRING(40),
        field: 'shelf_location',
        allowNull: true,
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "available",
      },
      isLoanable: {
        type: DataTypes.TEXT,
        field: 'is_loanable',
        allowNull: false,
        defaultValue: true,
      },
      acquiredOn: {
        type: DataTypes.TEXT,
        field: 'acquired_on',
        allowNull: false,
      },
      acquisitionSource: {
        type: DataTypes.STRING(12),
        field: 'acquisition_source',
        allowNull: false,
        defaultValue: "purchase",
      },
      priceAmount: {
        type: DataTypes.TEXT,
        field: 'price_amount',
        allowNull: true,
      },
      vendorId: {
        type: DataTypes.TEXT,
        field: 'vendor_id',
        allowNull: true,
        references: { model: 'org_vendor', key: 'vendor_id' },
      },
      conditionNote: {
        type: DataTypes.TEXT,
        field: 'condition_note',
        allowNull: true,
      },
      withdrawnOn: {
        type: DataTypes.DATEONLY,
        field: 'withdrawn_on',
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
      tableName: 'lib_book_copy',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['accession_no'] },
      { unique: true, fields: ['barcode'] }
      ]
    }
  )
  return LibBookCopyEntity
}

import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type LibReservationAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  reservationId?: string
  bookId: string
  libraryMembershipId: string
  reservedAt?: Date
  status?: string
  queuePosition?: number | null
  bookCopyId?: string | null
  notifiedAt?: Date | null
  holdUntil?: Date | null
  fulfilledLoanId?: string | null
  fulfilledAt?: Date | null
  cancelledAt?: Date | null
  cancellationReason?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type LibReservationCreationAttributes = Optional<LibReservationAttributes, "id" | "publicId" | "recordCode" | "reservationId" | "reservedAt" | "status" | "queuePosition" | "bookCopyId" | "notifiedAt" | "holdUntil" | "fulfilledLoanId" | "fulfilledAt" | "cancelledAt" | "cancellationReason" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class LibReservationEntity
  extends Model<LibReservationAttributes, LibReservationCreationAttributes>
  implements LibReservationAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare reservationId: string
  declare bookId: string
  declare libraryMembershipId: string
  declare reservedAt: Date
  declare status: string
  declare queuePosition: number | null
  declare bookCopyId: string | null
  declare notifiedAt: Date | null
  declare holdUntil: Date | null
  declare fulfilledLoanId: string | null
  declare fulfilledAt: Date | null
  declare cancelledAt: Date | null
  declare cancellationReason: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initLibReservationEntity(sequelize: Sequelize): typeof LibReservationEntity {
  LibReservationEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('lib_reservation')"),
      },
      reservationId: {
        type: DataTypes.TEXT,
        field: 'reservation_id',
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
      libraryMembershipId: {
        type: DataTypes.TEXT,
        field: 'library_membership_id',
        allowNull: false,
        references: { model: 'lib_library_membership', key: 'library_membership_id' },
      },
      reservedAt: {
        type: DataTypes.DATE,
        field: 'reserved_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "active",
      },
      queuePosition: {
        type: DataTypes.SMALLINT,
        field: 'queue_position',
        allowNull: true,
      },
      bookCopyId: {
        type: DataTypes.TEXT,
        field: 'book_copy_id',
        allowNull: true,
        references: { model: 'lib_book_copy', key: 'book_copy_id' },
      },
      notifiedAt: {
        type: DataTypes.DATE,
        field: 'notified_at',
        allowNull: true,
      },
      holdUntil: {
        type: DataTypes.DATEONLY,
        field: 'hold_until',
        allowNull: true,
      },
      fulfilledLoanId: {
        type: DataTypes.TEXT,
        field: 'fulfilled_loan_id',
        allowNull: true,
        references: { model: 'lib_loan', key: 'loan_id' },
      },
      fulfilledAt: {
        type: DataTypes.DATE,
        field: 'fulfilled_at',
        allowNull: true,
      },
      cancelledAt: {
        type: DataTypes.DATE,
        field: 'cancelled_at',
        allowNull: true,
      },
      cancellationReason: {
        type: DataTypes.TEXT,
        field: 'cancellation_reason',
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
      tableName: 'lib_reservation',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return LibReservationEntity
}

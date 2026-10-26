"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibReservationEntity = void 0;
exports.initLibReservationEntity = initLibReservationEntity;
const sequelize_1 = require("sequelize");
class LibReservationEntity extends sequelize_1.Model {
}
exports.LibReservationEntity = LibReservationEntity;
function initLibReservationEntity(sequelize) {
    LibReservationEntity.init({
        id: {
            type: sequelize_1.DataTypes.BIGINT,
            field: 'id',
            allowNull: true,
            primaryKey: true,
            autoIncrement: true,
        },
        publicId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'public_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        recordCode: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'record_code',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('lib_reservation')"),
        },
        reservationId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'reservation_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        bookId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'book_id',
            allowNull: false,
            references: { model: 'lib_book', key: 'book_id' },
        },
        libraryMembershipId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'library_membership_id',
            allowNull: false,
            references: { model: 'lib_library_membership', key: 'library_membership_id' },
        },
        reservedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'reserved_at',
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        status: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'status',
            allowNull: false,
            defaultValue: "active",
        },
        queuePosition: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'queue_position',
            allowNull: true,
        },
        bookCopyId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'book_copy_id',
            allowNull: true,
            references: { model: 'lib_book_copy', key: 'book_copy_id' },
        },
        notifiedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'notified_at',
            allowNull: true,
        },
        holdUntil: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'hold_until',
            allowNull: true,
        },
        fulfilledLoanId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'fulfilled_loan_id',
            allowNull: true,
            references: { model: 'lib_loan', key: 'loan_id' },
        },
        fulfilledAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'fulfilled_at',
            allowNull: true,
        },
        cancelledAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'cancelled_at',
            allowNull: true,
        },
        cancellationReason: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'cancellation_reason',
            allowNull: true,
        },
        createdAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'created_at',
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        createdBy: {
            type: sequelize_1.DataTypes.UUID,
            field: 'created_by',
            allowNull: true,
        },
        updatedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'updated_at',
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        updatedBy: {
            type: sequelize_1.DataTypes.UUID,
            field: 'updated_by',
            allowNull: true,
        }
    }, {
        sequelize,
        tableName: 'lib_reservation',
        timestamps: true,
        underscored: true,
        freezeTableName: true
    });
    return LibReservationEntity;
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibBookCopyEntity = void 0;
exports.initLibBookCopyEntity = initLibBookCopyEntity;
const sequelize_1 = require("sequelize");
class LibBookCopyEntity extends sequelize_1.Model {
}
exports.LibBookCopyEntity = LibBookCopyEntity;
function initLibBookCopyEntity(sequelize) {
    LibBookCopyEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('lib_book_copy')"),
        },
        bookCopyId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'book_copy_id',
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
        campusId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'campus_id',
            allowNull: false,
            references: { model: 'org_campus', key: 'campus_id' },
        },
        roomId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'room_id',
            allowNull: true,
            references: { model: 'org_room', key: 'room_id' },
        },
        accessionNo: {
            type: sequelize_1.DataTypes.STRING(30),
            field: 'accession_no',
            allowNull: false,
        },
        barcode: {
            type: sequelize_1.DataTypes.STRING(40),
            field: 'barcode',
            allowNull: false,
        },
        shelfLocation: {
            type: sequelize_1.DataTypes.STRING(40),
            field: 'shelf_location',
            allowNull: true,
        },
        status: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'status',
            allowNull: false,
            defaultValue: "available",
        },
        isLoanable: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_loanable',
            allowNull: false,
            defaultValue: true,
        },
        acquiredOn: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'acquired_on',
            allowNull: false,
        },
        acquisitionSource: {
            type: sequelize_1.DataTypes.STRING(12),
            field: 'acquisition_source',
            allowNull: false,
            defaultValue: "purchase",
        },
        priceAmount: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'price_amount',
            allowNull: true,
        },
        vendorId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'vendor_id',
            allowNull: true,
            references: { model: 'org_vendor', key: 'vendor_id' },
        },
        conditionNote: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'condition_note',
            allowNull: true,
        },
        withdrawnOn: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'withdrawn_on',
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
        tableName: 'lib_book_copy',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['accession_no'] },
            { unique: true, fields: ['barcode'] }
        ]
    });
    return LibBookCopyEntity;
}

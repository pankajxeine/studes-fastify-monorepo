"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibBookAuthorEntity = void 0;
exports.initLibBookAuthorEntity = initLibBookAuthorEntity;
const sequelize_1 = require("sequelize");
class LibBookAuthorEntity extends sequelize_1.Model {
}
exports.LibBookAuthorEntity = LibBookAuthorEntity;
function initLibBookAuthorEntity(sequelize) {
    LibBookAuthorEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('lib_book_author')"),
        },
        bookAuthorId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'book_author_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        bookId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'book_id',
            allowNull: false,
            references: { model: 'lib_book', key: 'book_id' },
            onDelete: 'CASCADE',
        },
        authorName: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'author_name',
            allowNull: false,
        },
        authorRole: {
            type: sequelize_1.DataTypes.STRING(12),
            field: 'author_role',
            allowNull: false,
            defaultValue: "author",
        },
        sequenceNo: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'sequence_no',
            allowNull: false,
            defaultValue: 1,
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
        tableName: 'lib_book_author',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['book_id', 'sequence_no'] }
        ]
    });
    return LibBookAuthorEntity;
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibBookEntity = void 0;
exports.initLibBookEntity = initLibBookEntity;
const sequelize_1 = require("sequelize");
class LibBookEntity extends sequelize_1.Model {
}
exports.LibBookEntity = LibBookEntity;
function initLibBookEntity(sequelize) {
    LibBookEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('lib_book')"),
        },
        bookId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'book_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        bookCategoryCode: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'book_category_code',
            allowNull: false,
            references: { model: 'lib_book_category', key: 'book_category_code' },
            onUpdate: 'CASCADE',
        },
        isbn: {
            type: sequelize_1.DataTypes.STRING(13),
            field: 'isbn',
            allowNull: true,
        },
        title: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'title',
            allowNull: false,
        },
        subtitle: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'subtitle',
            allowNull: true,
        },
        edition: {
            type: sequelize_1.DataTypes.STRING(30),
            field: 'edition',
            allowNull: true,
        },
        publisher: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'publisher',
            allowNull: true,
        },
        publishedYear: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'published_year',
            allowNull: true,
        },
        languageCode: {
            type: sequelize_1.DataTypes.STRING(8),
            field: 'language_code',
            allowNull: false,
            defaultValue: "en",
        },
        pageCount: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'page_count',
            allowNull: true,
        },
        callNo: {
            type: sequelize_1.DataTypes.STRING(40),
            field: 'call_no',
            allowNull: true,
        },
        summary: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'summary',
            allowNull: true,
        },
        isReferenceOnly: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_reference_only',
            allowNull: false,
            defaultValue: false,
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
        },
        deletedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'deleted_at',
            allowNull: true,
        }
    }, {
        sequelize,
        tableName: 'lib_book',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: true,
        deletedAt: 'deletedAt'
    });
    return LibBookEntity;
}

import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type LibBookAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  bookId?: string
  bookCategoryCode: string
  isbn?: string | null
  title: string
  subtitle?: string | null
  edition?: string | null
  publisher?: string | null
  publishedYear?: number | null
  languageCode?: string
  pageCount?: number | null
  callNo?: string | null
  summary?: string | null
  isReferenceOnly?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
  deletedAt?: Date | null
}

export type LibBookCreationAttributes = Optional<LibBookAttributes, "id" | "publicId" | "recordCode" | "bookId" | "isbn" | "subtitle" | "edition" | "publisher" | "publishedYear" | "languageCode" | "pageCount" | "callNo" | "summary" | "isReferenceOnly" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy" | "deletedAt">

export class LibBookEntity
  extends Model<LibBookAttributes, LibBookCreationAttributes>
  implements LibBookAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare bookId: string
  declare bookCategoryCode: string
  declare isbn: string | null
  declare title: string
  declare subtitle: string | null
  declare edition: string | null
  declare publisher: string | null
  declare publishedYear: number | null
  declare languageCode: string
  declare pageCount: number | null
  declare callNo: string | null
  declare summary: string | null
  declare isReferenceOnly: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
  declare deletedAt: Date | null
}

export function initLibBookEntity(sequelize: Sequelize): typeof LibBookEntity {
  LibBookEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('lib_book')"),
      },
      bookId: {
        type: DataTypes.TEXT,
        field: 'book_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      bookCategoryCode: {
        type: DataTypes.TEXT,
        field: 'book_category_code',
        allowNull: false,
        references: { model: 'lib_book_category', key: 'book_category_code' },
        onUpdate: 'CASCADE',
      },
      isbn: {
        type: DataTypes.STRING(13),
        field: 'isbn',
        allowNull: true,
      },
      title: {
        type: DataTypes.TEXT,
        field: 'title',
        allowNull: false,
      },
      subtitle: {
        type: DataTypes.TEXT,
        field: 'subtitle',
        allowNull: true,
      },
      edition: {
        type: DataTypes.STRING(30),
        field: 'edition',
        allowNull: true,
      },
      publisher: {
        type: DataTypes.TEXT,
        field: 'publisher',
        allowNull: true,
      },
      publishedYear: {
        type: DataTypes.SMALLINT,
        field: 'published_year',
        allowNull: true,
      },
      languageCode: {
        type: DataTypes.STRING(8),
        field: 'language_code',
        allowNull: false,
        defaultValue: "en",
      },
      pageCount: {
        type: DataTypes.SMALLINT,
        field: 'page_count',
        allowNull: true,
      },
      callNo: {
        type: DataTypes.STRING(40),
        field: 'call_no',
        allowNull: true,
      },
      summary: {
        type: DataTypes.TEXT,
        field: 'summary',
        allowNull: true,
      },
      isReferenceOnly: {
        type: DataTypes.TEXT,
        field: 'is_reference_only',
        allowNull: false,
        defaultValue: false,
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
      },
      deletedAt: {
        type: DataTypes.DATE,
        field: 'deleted_at',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'lib_book',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true,
      deletedAt: 'deletedAt'
    }
  )
  return LibBookEntity
}

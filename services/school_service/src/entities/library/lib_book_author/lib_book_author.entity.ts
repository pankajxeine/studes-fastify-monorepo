import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type LibBookAuthorAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  bookAuthorId?: string
  bookId: string
  authorName: string
  authorRole?: string
  sequenceNo?: number
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type LibBookAuthorCreationAttributes = Optional<LibBookAuthorAttributes, "id" | "publicId" | "recordCode" | "bookAuthorId" | "authorRole" | "sequenceNo" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class LibBookAuthorEntity
  extends Model<LibBookAuthorAttributes, LibBookAuthorCreationAttributes>
  implements LibBookAuthorAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare bookAuthorId: string
  declare bookId: string
  declare authorName: string
  declare authorRole: string
  declare sequenceNo: number
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initLibBookAuthorEntity(sequelize: Sequelize): typeof LibBookAuthorEntity {
  LibBookAuthorEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('lib_book_author')"),
      },
      bookAuthorId: {
        type: DataTypes.TEXT,
        field: 'book_author_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      bookId: {
        type: DataTypes.TEXT,
        field: 'book_id',
        allowNull: false,
        references: { model: 'lib_book', key: 'book_id' },
        onDelete: 'CASCADE',
      },
      authorName: {
        type: DataTypes.TEXT,
        field: 'author_name',
        allowNull: false,
      },
      authorRole: {
        type: DataTypes.STRING(12),
        field: 'author_role',
        allowNull: false,
        defaultValue: "author",
      },
      sequenceNo: {
        type: DataTypes.SMALLINT,
        field: 'sequence_no',
        allowNull: false,
        defaultValue: 1,
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
      tableName: 'lib_book_author',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['book_id', 'sequence_no'] }
      ]
    }
  )
  return LibBookAuthorEntity
}

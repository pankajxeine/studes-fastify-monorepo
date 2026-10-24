import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type LibBookCategoryAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  bookCategoryCode?: string | null
  name: string
  description?: string | null
  deweyClass?: string | null
  sortOrder?: number
  isActive?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type LibBookCategoryCreationAttributes = Optional<LibBookCategoryAttributes, "id" | "publicId" | "recordCode" | "bookCategoryCode" | "description" | "deweyClass" | "sortOrder" | "isActive" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class LibBookCategoryEntity
  extends Model<LibBookCategoryAttributes, LibBookCategoryCreationAttributes>
  implements LibBookCategoryAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare bookCategoryCode: string | null
  declare name: string
  declare description: string | null
  declare deweyClass: string | null
  declare sortOrder: number
  declare isActive: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initLibBookCategoryEntity(sequelize: Sequelize): typeof LibBookCategoryEntity {
  LibBookCategoryEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('lib_book_category')"),
      },
      bookCategoryCode: {
        type: DataTypes.TEXT,
        field: 'book_category_code',
        allowNull: true,
        unique: true,
      },
      name: {
        type: DataTypes.TEXT,
        field: 'name',
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        field: 'description',
        allowNull: true,
      },
      deweyClass: {
        type: DataTypes.STRING(20),
        field: 'dewey_class',
        allowNull: true,
      },
      sortOrder: {
        type: DataTypes.SMALLINT,
        field: 'sort_order',
        allowNull: false,
        defaultValue: 0,
      },
      isActive: {
        type: DataTypes.TEXT,
        field: 'is_active',
        allowNull: false,
        defaultValue: true,
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
      tableName: 'lib_book_category',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['name'] }
      ]
    }
  )
  return LibBookCategoryEntity
}

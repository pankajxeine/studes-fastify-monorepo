import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CntnAllergenAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  allergenCode?: string | null
  name: string
  description?: string | null
  isMajor?: string
  sortOrder?: number
  isActive?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type CntnAllergenCreationAttributes = Optional<CntnAllergenAttributes, "id" | "publicId" | "recordCode" | "allergenCode" | "description" | "isMajor" | "sortOrder" | "isActive" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class CntnAllergenEntity
  extends Model<CntnAllergenAttributes, CntnAllergenCreationAttributes>
  implements CntnAllergenAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare allergenCode: string | null
  declare name: string
  declare description: string | null
  declare isMajor: string
  declare sortOrder: number
  declare isActive: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initCntnAllergenEntity(sequelize: Sequelize): typeof CntnAllergenEntity {
  CntnAllergenEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('cntn_allergen')"),
      },
      allergenCode: {
        type: DataTypes.TEXT,
        field: 'allergen_code',
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
      isMajor: {
        type: DataTypes.TEXT,
        field: 'is_major',
        allowNull: false,
        defaultValue: true,
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
      tableName: 'cntn_allergen',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return CntnAllergenEntity
}

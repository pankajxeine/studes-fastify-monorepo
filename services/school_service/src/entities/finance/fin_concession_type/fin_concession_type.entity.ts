import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type FinConcessionTypeAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  concessionTypeCode?: string | null
  name: string
  description?: string | null
  defaultDiscountKind?: string
  defaultDiscountValue?: number
  requiresDocument?: string
  sortOrder?: number
  isActive?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type FinConcessionTypeCreationAttributes = Optional<FinConcessionTypeAttributes, "id" | "publicId" | "recordCode" | "concessionTypeCode" | "description" | "defaultDiscountKind" | "defaultDiscountValue" | "requiresDocument" | "sortOrder" | "isActive" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class FinConcessionTypeEntity
  extends Model<FinConcessionTypeAttributes, FinConcessionTypeCreationAttributes>
  implements FinConcessionTypeAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare concessionTypeCode: string | null
  declare name: string
  declare description: string | null
  declare defaultDiscountKind: string
  declare defaultDiscountValue: number
  declare requiresDocument: string
  declare sortOrder: number
  declare isActive: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initFinConcessionTypeEntity(sequelize: Sequelize): typeof FinConcessionTypeEntity {
  FinConcessionTypeEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('fin_concession_type')"),
      },
      concessionTypeCode: {
        type: DataTypes.TEXT,
        field: 'concession_type_code',
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
      defaultDiscountKind: {
        type: DataTypes.TEXT,
        field: 'default_discount_kind',
        allowNull: false,
        defaultValue: "percent",
      },
      defaultDiscountValue: {
        type: DataTypes.DECIMAL(12, 2),
        field: 'default_discount_value',
        allowNull: false,
        defaultValue: 0,
      },
      requiresDocument: {
        type: DataTypes.TEXT,
        field: 'requires_document',
        allowNull: false,
        defaultValue: false,
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
      tableName: 'fin_concession_type',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['name'] }
      ]
    }
  )
  return FinConcessionTypeEntity
}

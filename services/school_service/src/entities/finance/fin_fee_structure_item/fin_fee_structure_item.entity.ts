import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type FinFeeStructureItemAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  feeStructureItemId?: string
  feeStructureId: string
  feeHeadCode: string
  amount: string
  frequency?: string
  isOptional?: string
  sortOrder?: number
  notes?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type FinFeeStructureItemCreationAttributes = Optional<FinFeeStructureItemAttributes, "id" | "publicId" | "recordCode" | "feeStructureItemId" | "frequency" | "isOptional" | "sortOrder" | "notes" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class FinFeeStructureItemEntity
  extends Model<FinFeeStructureItemAttributes, FinFeeStructureItemCreationAttributes>
  implements FinFeeStructureItemAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare feeStructureItemId: string
  declare feeStructureId: string
  declare feeHeadCode: string
  declare amount: string
  declare frequency: string
  declare isOptional: string
  declare sortOrder: number
  declare notes: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initFinFeeStructureItemEntity(sequelize: Sequelize): typeof FinFeeStructureItemEntity {
  FinFeeStructureItemEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('fin_fee_structure_item')"),
      },
      feeStructureItemId: {
        type: DataTypes.TEXT,
        field: 'fee_structure_item_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      feeStructureId: {
        type: DataTypes.TEXT,
        field: 'fee_structure_id',
        allowNull: false,
        references: { model: 'fin_fee_structure', key: 'fee_structure_id' },
        onDelete: 'CASCADE',
      },
      feeHeadCode: {
        type: DataTypes.TEXT,
        field: 'fee_head_code',
        allowNull: false,
        references: { model: 'fin_fee_head', key: 'fee_head_code' },
        onUpdate: 'CASCADE',
      },
      amount: {
        type: DataTypes.TEXT,
        field: 'amount',
        allowNull: false,
      },
      frequency: {
        type: DataTypes.TEXT,
        field: 'frequency',
        allowNull: false,
        defaultValue: "term",
      },
      isOptional: {
        type: DataTypes.TEXT,
        field: 'is_optional',
        allowNull: false,
        defaultValue: false,
      },
      sortOrder: {
        type: DataTypes.SMALLINT,
        field: 'sort_order',
        allowNull: false,
        defaultValue: 0,
      },
      notes: {
        type: DataTypes.TEXT,
        field: 'notes',
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
      tableName: 'fin_fee_structure_item',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['fee_structure_id', 'fee_head_code'] }
      ]
    }
  )
  return FinFeeStructureItemEntity
}

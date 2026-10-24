import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PlatformLookupValueAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  lookupTypeCode: string
  valueCode: string
  label: string
  description?: string | null
  metadata?: unknown | null
  sortOrder?: number
  isActive?: string
  createdAt?: Date
  updatedAt?: Date
  UNIQUE?: string | null
}

export type PlatformLookupValueCreationAttributes = Optional<PlatformLookupValueAttributes, "id" | "publicId" | "recordCode" | "description" | "metadata" | "sortOrder" | "isActive" | "createdAt" | "updatedAt" | "UNIQUE">

export class PlatformLookupValueEntity
  extends Model<PlatformLookupValueAttributes, PlatformLookupValueCreationAttributes>
  implements PlatformLookupValueAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare lookupTypeCode: string
  declare valueCode: string
  declare label: string
  declare description: string | null
  declare metadata: unknown | null
  declare sortOrder: number
  declare isActive: string
  declare createdAt: Date
  declare updatedAt: Date
  declare UNIQUE: string | null
}

export function initPlatformLookupValueEntity(sequelize: Sequelize): typeof PlatformLookupValueEntity {
  PlatformLookupValueEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('platform_lookup_value')"),
      },
      lookupTypeCode: {
        type: DataTypes.TEXT,
        field: 'lookup_type_code',
        allowNull: false,
        references: { model: 'platform_lookup_type', key: 'lookup_type_code' },
        onUpdate: 'CASCADE',
      },
      valueCode: {
        type: DataTypes.TEXT,
        field: 'value_code',
        allowNull: false,
      },
      label: {
        type: DataTypes.TEXT,
        field: 'label',
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        field: 'description',
        allowNull: true,
      },
      metadata: {
        type: DataTypes.JSONB,
        field: 'metadata',
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
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      UNIQUE: {
        type: DataTypes.TEXT,
        field: 'UNIQUE',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'platform_lookup_value',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return PlatformLookupValueEntity
}

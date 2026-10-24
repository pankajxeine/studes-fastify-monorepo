import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PlatformLookupTypeAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  lookupTypeCode: string
  name: string
  description?: string | null
  isSystem?: string
  createdAt?: Date
  updatedAt?: Date
}

export type PlatformLookupTypeCreationAttributes = Optional<PlatformLookupTypeAttributes, "id" | "publicId" | "recordCode" | "description" | "isSystem" | "createdAt" | "updatedAt">

export class PlatformLookupTypeEntity
  extends Model<PlatformLookupTypeAttributes, PlatformLookupTypeCreationAttributes>
  implements PlatformLookupTypeAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare lookupTypeCode: string
  declare name: string
  declare description: string | null
  declare isSystem: string
  declare createdAt: Date
  declare updatedAt: Date
}

export function initPlatformLookupTypeEntity(sequelize: Sequelize): typeof PlatformLookupTypeEntity {
  PlatformLookupTypeEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('platform_lookup_type')"),
      },
      lookupTypeCode: {
        type: DataTypes.TEXT,
        field: 'lookup_type_code',
        allowNull: false,
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
      isSystem: {
        type: DataTypes.TEXT,
        field: 'is_system',
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
      }
    },
    {
      sequelize,
      tableName: 'platform_lookup_type',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return PlatformLookupTypeEntity
}

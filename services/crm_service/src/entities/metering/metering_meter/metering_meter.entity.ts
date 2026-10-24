import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type MeteringMeterAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  meterId?: string
  featureId: string
  meterCode: string
  aggregation: string
  description?: string | null
  isActive?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type MeteringMeterCreationAttributes = Optional<MeteringMeterAttributes, "id" | "publicId" | "recordCode" | "meterId" | "description" | "isActive" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class MeteringMeterEntity
  extends Model<MeteringMeterAttributes, MeteringMeterCreationAttributes>
  implements MeteringMeterAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare meterId: string
  declare featureId: string
  declare meterCode: string
  declare aggregation: string
  declare description: string | null
  declare isActive: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initMeteringMeterEntity(sequelize: Sequelize): typeof MeteringMeterEntity {
  MeteringMeterEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('metering_meter')"),
      },
      meterId: {
        type: DataTypes.TEXT,
        field: 'meter_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      featureId: {
        type: DataTypes.TEXT,
        field: 'feature_id',
        allowNull: false,
        references: { model: 'catalog_feature', key: 'feature_id' },
      },
      meterCode: {
        type: DataTypes.TEXT,
        field: 'meter_code',
        allowNull: false,
      },
      aggregation: {
        type: DataTypes.STRING(6),
        field: 'aggregation',
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        field: 'description',
        allowNull: true,
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
      tableName: 'metering_meter',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['feature_id'] }
      ]
    }
  )
  return MeteringMeterEntity
}

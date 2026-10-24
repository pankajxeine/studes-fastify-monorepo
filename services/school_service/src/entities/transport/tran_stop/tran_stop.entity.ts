import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type TranStopAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  stopId?: string
  campusId: string
  code: string
  name: string
  landmark?: string | null
  addressLine?: string | null
  latitude?: number | null
  longitude?: number | null
  isActive?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type TranStopCreationAttributes = Optional<TranStopAttributes, "id" | "publicId" | "recordCode" | "stopId" | "landmark" | "addressLine" | "latitude" | "longitude" | "isActive" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class TranStopEntity
  extends Model<TranStopAttributes, TranStopCreationAttributes>
  implements TranStopAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare stopId: string
  declare campusId: string
  declare code: string
  declare name: string
  declare landmark: string | null
  declare addressLine: string | null
  declare latitude: number | null
  declare longitude: number | null
  declare isActive: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initTranStopEntity(sequelize: Sequelize): typeof TranStopEntity {
  TranStopEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('tran_stop')"),
      },
      stopId: {
        type: DataTypes.TEXT,
        field: 'stop_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      campusId: {
        type: DataTypes.TEXT,
        field: 'campus_id',
        allowNull: false,
        references: { model: 'org_campus', key: 'campus_id' },
      },
      code: {
        type: DataTypes.STRING(20),
        field: 'code',
        allowNull: false,
      },
      name: {
        type: DataTypes.TEXT,
        field: 'name',
        allowNull: false,
      },
      landmark: {
        type: DataTypes.TEXT,
        field: 'landmark',
        allowNull: true,
      },
      addressLine: {
        type: DataTypes.TEXT,
        field: 'address_line',
        allowNull: true,
      },
      latitude: {
        type: DataTypes.DECIMAL(9, 6),
        field: 'latitude',
        allowNull: true,
      },
      longitude: {
        type: DataTypes.DECIMAL(9, 6),
        field: 'longitude',
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
      tableName: 'tran_stop',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['campus_id', 'code'] }
      ]
    }
  )
  return TranStopEntity
}

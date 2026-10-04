import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type DevicesAttributes = {
  id: number
  name: string
  status?: string
  deviceType?: string | null
  deviceTypeCode?: string | null
  apiMethod?: string | null
  verifonePackageId?: string | null
  contents?: string | null
  videos?: string | null
  createdBy: number
  updatedBy: number
  createdAt: Date
  updatedAt: Date
  deletedAt?: Date | null
}

export type DevicesCreationAttributes = Optional<DevicesAttributes, "status" | "deviceType" | "deviceTypeCode" | "apiMethod" | "verifonePackageId" | "contents" | "videos" | "deletedAt">

export class DevicesEntity
  extends Model<DevicesAttributes, DevicesCreationAttributes>
  implements DevicesAttributes
{
  declare id: number
  declare name: string
  declare status: string
  declare deviceType: string | null
  declare deviceTypeCode: string | null
  declare apiMethod: string | null
  declare verifonePackageId: string | null
  declare contents: string | null
  declare videos: string | null
  declare createdBy: number
  declare updatedBy: number
  declare createdAt: Date
  declare updatedAt: Date
  declare deletedAt: Date | null
}

export function initDevicesEntity(sequelize: Sequelize): typeof DevicesEntity {
  DevicesEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(50),
        field: 'name',
        allowNull: false,
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "'Active' CHECK (\n        \"status\" IN ('Active'",
      },
      deviceType: {
        type: DataTypes.TEXT,
        field: 'device_type',
        allowNull: true,
      },
      deviceTypeCode: {
        type: DataTypes.STRING(150),
        field: 'device_type_code',
        allowNull: true,
      },
      apiMethod: {
        type: DataTypes.TEXT,
        field: 'api_method',
        allowNull: true,
        defaultValue: "'None' CHECK (\n        \"api_method\" IN (\n            'None'",
      },
      verifonePackageId: {
        type: DataTypes.STRING(150),
        field: 'verifone_package_id',
        allowNull: true,
      },
      contents: {
        type: DataTypes.TEXT,
        field: 'contents',
        allowNull: true,
      },
      videos: {
        type: DataTypes.TEXT,
        field: 'videos',
        allowNull: true,
      },
      createdBy: {
        type: DataTypes.INTEGER,
        field: 'created_by',
        allowNull: false,
      },
      updatedBy: {
        type: DataTypes.INTEGER,
        field: 'updated_by',
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
      },
      deletedAt: {
        type: DataTypes.DATE,
        field: 'deleted_at',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'devices',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] },
      { unique: true, fields: ['uq_devices_name_deleted_at', 'name', 'deleted_at'] }
      ]
    }
  )
  return DevicesEntity
}

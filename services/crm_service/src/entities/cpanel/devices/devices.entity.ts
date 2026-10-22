import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type DevicesAttributes = {
  id?: string | number | null
  name: string
  status?: string
  deviceType?: string | null
  deviceTypeCode?: string | null
  apiMethod?: string | null
  verifonePackageId?: string | null
  contents?: string | null
  videos?: string | null
}

export type DevicesCreationAttributes = Optional<DevicesAttributes, "id" | "status" | "deviceType" | "deviceTypeCode" | "apiMethod" | "verifonePackageId" | "contents" | "videos">

export class DevicesEntity
  extends Model<DevicesAttributes, DevicesCreationAttributes>
  implements DevicesAttributes
{
  declare id: string | number | null
  declare name: string
  declare status: string
  declare deviceType: string | null
  declare deviceTypeCode: string | null
  declare apiMethod: string | null
  declare verifonePackageId: string | null
  declare contents: string | null
  declare videos: string | null
}

export function initDevicesEntity(sequelize: Sequelize): typeof DevicesEntity {
  DevicesEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
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
        defaultValue: "Active",
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
        defaultValue: "None",
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
      }
    },
    {
      sequelize,
      tableName: 'devices',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] },
      { unique: true, fields: ['name'] }
      ]
    }
  )
  return DevicesEntity
}

import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type HardwaresAttributes = {
  id?: string | number | null
  deviceId: number
  customerId?: number | null
  posTsysSettingId?: number | null
  posExpinetTerminalId?: number | null
  posVerifoneSettingId?: number | null
  purchaseDate?: Date | null
  soldBy?: string | null
  terminalId?: string | null
  trackingNumber?: string | null
  deliveryStatus?: string | null
  shippingMethodId?: number | null
  price?: number | null
  notes?: string | null
  serialNumber?: string | null
  transactionId?: string | null
  userId?: string | null
  apiKey?: string | null
  hashKey?: string | null
  locationId?: string | null
  mid?: string | null
  virtualTerminal?: string | null
  userName?: string | null
  password?: string | null
  developerId?: string | null
  terminalName?: string | null
  terminalType?: string | null
  terminalStatus?: string | null
  verifoneOrderId?: string | null
  deviceIdValue?: string | null
  softwareId?: number | null
  storeId?: number | null
  storeNumber?: string | null
  terminalNumber?: string | null
  timezone?: string | null
  isStoreAddress?: string
  createdAt?: Date
  updatedAt?: Date
  createdBy: number
  updatedBy?: number | null
}

export type HardwaresCreationAttributes = Optional<HardwaresAttributes, "id" | "customerId" | "posTsysSettingId" | "posExpinetTerminalId" | "posVerifoneSettingId" | "purchaseDate" | "soldBy" | "terminalId" | "trackingNumber" | "deliveryStatus" | "shippingMethodId" | "price" | "notes" | "serialNumber" | "transactionId" | "userId" | "apiKey" | "hashKey" | "locationId" | "mid" | "virtualTerminal" | "userName" | "password" | "developerId" | "terminalName" | "terminalType" | "terminalStatus" | "verifoneOrderId" | "deviceIdValue" | "softwareId" | "storeId" | "storeNumber" | "terminalNumber" | "timezone" | "isStoreAddress" | "createdAt" | "updatedAt" | "updatedBy">

export class HardwaresEntity
  extends Model<HardwaresAttributes, HardwaresCreationAttributes>
  implements HardwaresAttributes
{
  declare id: string | number | null
  declare deviceId: number
  declare customerId: number | null
  declare posTsysSettingId: number | null
  declare posExpinetTerminalId: number | null
  declare posVerifoneSettingId: number | null
  declare purchaseDate: Date | null
  declare soldBy: string | null
  declare terminalId: string | null
  declare trackingNumber: string | null
  declare deliveryStatus: string | null
  declare shippingMethodId: number | null
  declare price: number | null
  declare notes: string | null
  declare serialNumber: string | null
  declare transactionId: string | null
  declare userId: string | null
  declare apiKey: string | null
  declare hashKey: string | null
  declare locationId: string | null
  declare mid: string | null
  declare virtualTerminal: string | null
  declare userName: string | null
  declare password: string | null
  declare developerId: string | null
  declare terminalName: string | null
  declare terminalType: string | null
  declare terminalStatus: string | null
  declare verifoneOrderId: string | null
  declare deviceIdValue: string | null
  declare softwareId: number | null
  declare storeId: number | null
  declare storeNumber: string | null
  declare terminalNumber: string | null
  declare timezone: string | null
  declare isStoreAddress: string
  declare createdAt: Date
  declare updatedAt: Date
  declare createdBy: number
  declare updatedBy: number | null
}

export function initHardwaresEntity(sequelize: Sequelize): typeof HardwaresEntity {
  HardwaresEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      deviceId: {
        type: DataTypes.INTEGER,
        field: 'device_id',
        allowNull: false,
        references: { model: 'devices', key: 'id' },
      },
      customerId: {
        type: DataTypes.INTEGER,
        field: 'customer_id',
        allowNull: true,
        references: { model: 'customers', key: 'id' },
      },
      posTsysSettingId: {
        type: DataTypes.INTEGER,
        field: 'pos_tsys_setting_id',
        allowNull: true,
        defaultValue: "0",
      },
      posExpinetTerminalId: {
        type: DataTypes.INTEGER,
        field: 'pos_expinet_terminal_id',
        allowNull: true,
        defaultValue: "0",
      },
      posVerifoneSettingId: {
        type: DataTypes.INTEGER,
        field: 'pos_verifone_setting_id',
        allowNull: true,
        defaultValue: "0",
      },
      purchaseDate: {
        type: DataTypes.DATEONLY,
        field: 'purchase_date',
        allowNull: true,
      },
      soldBy: {
        type: DataTypes.STRING(150),
        field: 'sold_by',
        allowNull: true,
      },
      terminalId: {
        type: DataTypes.STRING(150),
        field: 'terminal_id',
        allowNull: true,
      },
      trackingNumber: {
        type: DataTypes.STRING(150),
        field: 'tracking_number',
        allowNull: true,
      },
      deliveryStatus: {
        type: DataTypes.TEXT,
        field: 'delivery_status',
        allowNull: true,
      },
      shippingMethodId: {
        type: DataTypes.INTEGER,
        field: 'shipping_method_id',
        allowNull: true,
        references: { model: 'shipping_methods', key: 'id' },
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        field: 'price',
        allowNull: true,
      },
      notes: {
        type: DataTypes.STRING(250),
        field: 'notes',
        allowNull: true,
      },
      serialNumber: {
        type: DataTypes.STRING(250),
        field: 'serial_number',
        allowNull: true,
      },
      transactionId: {
        type: DataTypes.STRING(250),
        field: 'transaction_id',
        allowNull: true,
      },
      userId: {
        type: DataTypes.STRING(250),
        field: 'user_id',
        allowNull: true,
      },
      apiKey: {
        type: DataTypes.STRING(250),
        field: 'api_key',
        allowNull: true,
      },
      hashKey: {
        type: DataTypes.STRING(250),
        field: 'hash_key',
        allowNull: true,
      },
      locationId: {
        type: DataTypes.STRING(250),
        field: 'location_id',
        allowNull: true,
      },
      mid: {
        type: DataTypes.STRING(250),
        field: 'mid',
        allowNull: true,
      },
      virtualTerminal: {
        type: DataTypes.STRING(200),
        field: 'virtual_terminal',
        allowNull: true,
      },
      userName: {
        type: DataTypes.STRING(150),
        field: 'user_name',
        allowNull: true,
      },
      password: {
        type: DataTypes.STRING(200),
        field: 'password',
        allowNull: true,
      },
      developerId: {
        type: DataTypes.STRING(200),
        field: 'developer_id',
        allowNull: true,
      },
      terminalName: {
        type: DataTypes.STRING(200),
        field: 'terminal_name',
        allowNull: true,
      },
      terminalType: {
        type: DataTypes.TEXT,
        field: 'terminal_type',
        allowNull: true,
      },
      terminalStatus: {
        type: DataTypes.TEXT,
        field: 'terminal_status',
        allowNull: true,
      },
      verifoneOrderId: {
        type: DataTypes.STRING(255),
        field: 'verifone_order_id',
        allowNull: true,
      },
      deviceIdValue: {
        type: DataTypes.STRING(150),
        field: 'device_id_value',
        allowNull: true,
      },
      softwareId: {
        type: DataTypes.INTEGER,
        field: 'software_id',
        allowNull: true,
      },
      storeId: {
        type: DataTypes.INTEGER,
        field: 'store_id',
        allowNull: true,
      },
      storeNumber: {
        type: DataTypes.STRING(4),
        field: 'store_number',
        allowNull: true,
      },
      terminalNumber: {
        type: DataTypes.STRING(4),
        field: 'terminal_number',
        allowNull: true,
      },
      timezone: {
        type: DataTypes.STRING(255),
        field: 'timezone',
        allowNull: true,
      },
      isStoreAddress: {
        type: DataTypes.TEXT,
        field: 'is_store_address',
        allowNull: false,
        defaultValue: "FALSE",
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
        defaultValue: "DataTypes.NOW",
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
        defaultValue: "DataTypes.NOW",
      },
      createdBy: {
        type: DataTypes.INTEGER,
        field: 'created_by',
        allowNull: false,
      },
      updatedBy: {
        type: DataTypes.INTEGER,
        field: 'updated_by',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'hardwares',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return HardwaresEntity
}

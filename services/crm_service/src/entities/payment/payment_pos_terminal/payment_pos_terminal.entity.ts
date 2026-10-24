import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PaymentPosTerminalAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  posTerminalId?: string
  tenantApplicationId: string
  outletId: string
  merchantAccountId: string
  terminalCode: string
  providerTerminalRef: string
  deviceSerial: string
  manufacturer?: string | null
  model?: string | null
  connectionType?: string
  pairingSecretRef?: string | null
  status?: string
  pairedAt?: Date | null
  lastSeenAt?: Date | null
  createdAt?: Date
  updatedAt?: Date
}

export type PaymentPosTerminalCreationAttributes = Optional<PaymentPosTerminalAttributes, "id" | "publicId" | "recordCode" | "posTerminalId" | "manufacturer" | "model" | "connectionType" | "pairingSecretRef" | "status" | "pairedAt" | "lastSeenAt" | "createdAt" | "updatedAt">

export class PaymentPosTerminalEntity
  extends Model<PaymentPosTerminalAttributes, PaymentPosTerminalCreationAttributes>
  implements PaymentPosTerminalAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare posTerminalId: string
  declare tenantApplicationId: string
  declare outletId: string
  declare merchantAccountId: string
  declare terminalCode: string
  declare providerTerminalRef: string
  declare deviceSerial: string
  declare manufacturer: string | null
  declare model: string | null
  declare connectionType: string
  declare pairingSecretRef: string | null
  declare status: string
  declare pairedAt: Date | null
  declare lastSeenAt: Date | null
  declare createdAt: Date
  declare updatedAt: Date
}

export function initPaymentPosTerminalEntity(sequelize: Sequelize): typeof PaymentPosTerminalEntity {
  PaymentPosTerminalEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('payment_pos_terminal')"),
      },
      posTerminalId: {
        type: DataTypes.TEXT,
        field: 'pos_terminal_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      tenantApplicationId: {
        type: DataTypes.TEXT,
        field: 'tenant_application_id',
        allowNull: false,
        references: { model: 'payment_merchant_account', key: 'tenant_application_id' },
      },
      outletId: {
        type: DataTypes.TEXT,
        field: 'outlet_id',
        allowNull: false,
      },
      merchantAccountId: {
        type: DataTypes.TEXT,
        field: 'merchant_account_id',
        allowNull: false,
      },
      terminalCode: {
        type: DataTypes.TEXT,
        field: 'terminal_code',
        allowNull: false,
      },
      providerTerminalRef: {
        type: DataTypes.TEXT,
        field: 'provider_terminal_ref',
        allowNull: false,
      },
      deviceSerial: {
        type: DataTypes.TEXT,
        field: 'device_serial',
        allowNull: false,
      },
      manufacturer: {
        type: DataTypes.TEXT,
        field: 'manufacturer',
        allowNull: true,
      },
      model: {
        type: DataTypes.TEXT,
        field: 'model',
        allowNull: true,
      },
      connectionType: {
        type: DataTypes.STRING(10),
        field: 'connection_type',
        allowNull: false,
        defaultValue: "cloud",
      },
      pairingSecretRef: {
        type: DataTypes.TEXT,
        field: 'pairing_secret_ref',
        allowNull: true,
      },
      status: {
        type: DataTypes.STRING(10),
        field: 'status',
        allowNull: false,
        defaultValue: "pending",
      },
      pairedAt: {
        type: DataTypes.DATE,
        field: 'paired_at',
        allowNull: true,
      },
      lastSeenAt: {
        type: DataTypes.DATE,
        field: 'last_seen_at',
        allowNull: true,
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
      tableName: 'payment_pos_terminal',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['tenant_application_id', 'terminal_code'] },
      { unique: true, fields: ['merchant_account_id', 'provider_terminal_ref'] },
      { unique: true, fields: ['tenant_application_id', 'outlet_id', 'merchant_account_id', 'pos_terminal_id'] }
      ]
    }
  )
  return PaymentPosTerminalEntity
}

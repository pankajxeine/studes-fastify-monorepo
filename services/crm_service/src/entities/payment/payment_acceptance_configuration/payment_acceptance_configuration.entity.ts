import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PaymentAcceptanceConfigurationAttributes = {
  recordCode?: string
  acceptanceConfigurationId: string | null
  tenantApplicationId: string
  outletId: string
  modeCode: string
  merchantAccountId?: string | null
  posTerminalId?: string | null
  channel: string
  currencyCode: string
  upiFlow?: string | null
  upiVpa?: string | null
  upiVerifiedAt?: Date | null
  minimumAmount?: number
  maximumAmount?: number | null
  captureMode?: string
  isEnabled?: string
  validFrom?: Date
  validTo?: Date | null
  createdAt?: Date
  updatedAt?: Date
}

export type PaymentAcceptanceConfigurationCreationAttributes = Optional<PaymentAcceptanceConfigurationAttributes, "recordCode" | "merchantAccountId" | "posTerminalId" | "upiFlow" | "upiVpa" | "upiVerifiedAt" | "minimumAmount" | "maximumAmount" | "captureMode" | "isEnabled" | "validFrom" | "validTo" | "createdAt" | "updatedAt">

export class PaymentAcceptanceConfigurationEntity
  extends Model<PaymentAcceptanceConfigurationAttributes, PaymentAcceptanceConfigurationCreationAttributes>
  implements PaymentAcceptanceConfigurationAttributes
{
  declare recordCode: string
  declare acceptanceConfigurationId: string | null
  declare tenantApplicationId: string
  declare outletId: string
  declare modeCode: string
  declare merchantAccountId: string | null
  declare posTerminalId: string | null
  declare channel: string
  declare currencyCode: string
  declare upiFlow: string | null
  declare upiVpa: string | null
  declare upiVerifiedAt: Date | null
  declare minimumAmount: number
  declare maximumAmount: number | null
  declare captureMode: string
  declare isEnabled: string
  declare validFrom: Date
  declare validTo: Date | null
  declare createdAt: Date
  declare updatedAt: Date
}

export function initPaymentAcceptanceConfigurationEntity(sequelize: Sequelize): typeof PaymentAcceptanceConfigurationEntity {
  PaymentAcceptanceConfigurationEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table (\r\n        'payment_acceptance_configuration'\r\n    )"),
      },
      acceptanceConfigurationId: {
        type: DataTypes.TEXT,
        field: 'acceptance_configuration_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      tenantApplicationId: {
        type: DataTypes.TEXT,
        field: 'tenant_application_id',
        allowNull: false,
        references: { model: 'payment_pos_terminal', key: 'tenant_application_id' },
      },
      outletId: {
        type: DataTypes.TEXT,
        field: 'outlet_id',
        allowNull: false,
      },
      modeCode: {
        type: DataTypes.TEXT,
        field: 'mode_code',
        allowNull: false,
        references: { model: 'payment_acceptance_mode', key: 'mode_code' },
      },
      merchantAccountId: {
        type: DataTypes.UUID,
        field: 'merchant_account_id',
        allowNull: true,
      },
      posTerminalId: {
        type: DataTypes.UUID,
        field: 'pos_terminal_id',
        allowNull: true,
      },
      channel: {
        type: DataTypes.STRING(10),
        field: 'channel',
        allowNull: false,
      },
      currencyCode: {
        type: DataTypes.TEXT,
        field: 'currency_code',
        allowNull: false,
        references: { model: 'platform_currency', key: 'currency_code' },
      },
      upiFlow: {
        type: DataTypes.STRING(10),
        field: 'upi_flow',
        allowNull: true,
      },
      upiVpa: {
        type: DataTypes.TEXT,
        field: 'upi_vpa',
        allowNull: true,
      },
      upiVerifiedAt: {
        type: DataTypes.DATE,
        field: 'upi_verified_at',
        allowNull: true,
      },
      minimumAmount: {
        type: DataTypes.DECIMAL(18, 4),
        field: 'minimum_amount',
        allowNull: false,
        defaultValue: 0,
      },
      maximumAmount: {
        type: DataTypes.DECIMAL(18, 4),
        field: 'maximum_amount',
        allowNull: true,
      },
      captureMode: {
        type: DataTypes.STRING(9),
        field: 'capture_mode',
        allowNull: false,
        defaultValue: "automatic",
      },
      isEnabled: {
        type: DataTypes.TEXT,
        field: 'is_enabled',
        allowNull: false,
        defaultValue: false,
      },
      validFrom: {
        type: DataTypes.DATE,
        field: 'valid_from',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      validTo: {
        type: DataTypes.DATE,
        field: 'valid_to',
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
      tableName: 'payment_acceptance_configuration',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['tenant_application_id', 'outlet_id', 'mode_code', 'channel', 'merchant_account_id', 'pos_terminal_id'] }
      ]
    }
  )
  return PaymentAcceptanceConfigurationEntity
}

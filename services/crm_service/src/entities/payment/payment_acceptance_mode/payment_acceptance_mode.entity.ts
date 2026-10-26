import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PaymentAcceptanceModeAttributes = {
  recordCode?: string
  acceptanceModeId: string | null
  modeCode: string
  name: string
  requiresGateway: string
  isActive?: string
}

export type PaymentAcceptanceModeCreationAttributes = Optional<PaymentAcceptanceModeAttributes, "recordCode" | "isActive">

export class PaymentAcceptanceModeEntity
  extends Model<PaymentAcceptanceModeAttributes, PaymentAcceptanceModeCreationAttributes>
  implements PaymentAcceptanceModeAttributes
{
  declare recordCode: string
  declare acceptanceModeId: string | null
  declare modeCode: string
  declare name: string
  declare requiresGateway: string
  declare isActive: string
}

export function initPaymentAcceptanceModeEntity(sequelize: Sequelize): typeof PaymentAcceptanceModeEntity {
  PaymentAcceptanceModeEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('payment_acceptance_mode')"),
      },
      acceptanceModeId: {
        type: DataTypes.TEXT,
        field: 'acceptance_mode_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      modeCode: {
        type: DataTypes.TEXT,
        field: 'mode_code',
        allowNull: false,
        unique: true,
      },
      name: {
        type: DataTypes.TEXT,
        field: 'name',
        allowNull: false,
      },
      requiresGateway: {
        type: DataTypes.TEXT,
        field: 'requires_gateway',
        allowNull: false,
      },
      isActive: {
        type: DataTypes.TEXT,
        field: 'is_active',
        allowNull: false,
        defaultValue: true,
      }
    },
    {
      sequelize,
      tableName: 'payment_acceptance_mode',
      timestamps: false,
      underscored: true,
      freezeTableName: true
    }
  )
  return PaymentAcceptanceModeEntity
}

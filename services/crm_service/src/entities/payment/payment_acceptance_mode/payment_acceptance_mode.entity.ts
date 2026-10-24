import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PaymentAcceptanceModeAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  modeCode: string
  name: string
  requiresGateway: string
  isActive?: string
}

export type PaymentAcceptanceModeCreationAttributes = Optional<PaymentAcceptanceModeAttributes, "id" | "publicId" | "recordCode" | "isActive">

export class PaymentAcceptanceModeEntity
  extends Model<PaymentAcceptanceModeAttributes, PaymentAcceptanceModeCreationAttributes>
  implements PaymentAcceptanceModeAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare modeCode: string
  declare name: string
  declare requiresGateway: string
  declare isActive: string
}

export function initPaymentAcceptanceModeEntity(sequelize: Sequelize): typeof PaymentAcceptanceModeEntity {
  PaymentAcceptanceModeEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('payment_acceptance_mode')"),
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

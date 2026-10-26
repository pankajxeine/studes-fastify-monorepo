import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type IntegrationIdempotencyKeyAttributes = {
  recordCode?: string
  idempotencyKeyId: string | null
  scope: string
  key: string
  requestHash: string
  responseCode?: number | null
  responseBody?: unknown | null
  createdAt?: Date
  expiresAt?: Date
}

export type IntegrationIdempotencyKeyCreationAttributes = Optional<IntegrationIdempotencyKeyAttributes, "recordCode" | "responseCode" | "responseBody" | "createdAt" | "expiresAt">

export class IntegrationIdempotencyKeyEntity
  extends Model<IntegrationIdempotencyKeyAttributes, IntegrationIdempotencyKeyCreationAttributes>
  implements IntegrationIdempotencyKeyAttributes
{
  declare recordCode: string
  declare idempotencyKeyId: string | null
  declare scope: string
  declare key: string
  declare requestHash: string
  declare responseCode: number | null
  declare responseBody: unknown | null
  declare createdAt: Date
  declare expiresAt: Date
}

export function initIntegrationIdempotencyKeyEntity(sequelize: Sequelize): typeof IntegrationIdempotencyKeyEntity {
  IntegrationIdempotencyKeyEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('integration_idempotency_key')"),
      },
      idempotencyKeyId: {
        type: DataTypes.TEXT,
        field: 'idempotency_key_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      scope: {
        type: DataTypes.STRING(60),
        field: 'scope',
        allowNull: false,
      },
      key: {
        type: DataTypes.STRING(120),
        field: 'key',
        allowNull: false,
      },
      requestHash: {
        type: DataTypes.TEXT,
        field: 'request_hash',
        allowNull: false,
      },
      responseCode: {
        type: DataTypes.SMALLINT,
        field: 'response_code',
        allowNull: true,
      },
      responseBody: {
        type: DataTypes.JSONB,
        field: 'response_body',
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      expiresAt: {
        type: DataTypes.DATE,
        field: 'expires_at',
        allowNull: false,
        defaultValue: Sequelize.literal("now() + interval '24 hours'"),
      }
    },
    {
      sequelize,
      tableName: 'integration_idempotency_key',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['scope'] }
      ]
    }
  )
  return IntegrationIdempotencyKeyEntity
}

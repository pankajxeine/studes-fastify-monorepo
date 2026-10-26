import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type ProvisioningProvisioningJobAttributes = {
  recordCode?: string
  jobId: string | null
  tenantApplicationId: string
  jobType: string
  status?: string
  idempotencyKey: string
  payload?: unknown
  result?: unknown | null
  attempts?: number
  maxAttempts?: number
  runAfter?: Date
  lockedBy?: string | null
  lockedUntil?: Date | null
  startedAt?: Date | null
  finishedAt?: Date | null
  lastError?: string | null
  requestedByUserId?: string | null
  createdAt?: Date
  updatedAt?: Date
}

export type ProvisioningProvisioningJobCreationAttributes = Optional<ProvisioningProvisioningJobAttributes, "recordCode" | "status" | "payload" | "result" | "attempts" | "maxAttempts" | "runAfter" | "lockedBy" | "lockedUntil" | "startedAt" | "finishedAt" | "lastError" | "requestedByUserId" | "createdAt" | "updatedAt">

export class ProvisioningProvisioningJobEntity
  extends Model<ProvisioningProvisioningJobAttributes, ProvisioningProvisioningJobCreationAttributes>
  implements ProvisioningProvisioningJobAttributes
{
  declare recordCode: string
  declare jobId: string | null
  declare tenantApplicationId: string
  declare jobType: string
  declare status: string
  declare idempotencyKey: string
  declare payload: unknown
  declare result: unknown | null
  declare attempts: number
  declare maxAttempts: number
  declare runAfter: Date
  declare lockedBy: string | null
  declare lockedUntil: Date | null
  declare startedAt: Date | null
  declare finishedAt: Date | null
  declare lastError: string | null
  declare requestedByUserId: string | null
  declare createdAt: Date
  declare updatedAt: Date
}

export function initProvisioningProvisioningJobEntity(sequelize: Sequelize): typeof ProvisioningProvisioningJobEntity {
  ProvisioningProvisioningJobEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table (\r\n        'provisioning_provisioning_job'\r\n    )"),
      },
      jobId: {
        type: DataTypes.TEXT,
        field: 'job_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      tenantApplicationId: {
        type: DataTypes.TEXT,
        field: 'tenant_application_id',
        allowNull: false,
        references: { model: 'tenancy_tenant_application', key: 'tenant_application_id' },
      },
      jobType: {
        type: DataTypes.STRING(12),
        field: 'job_type',
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING(12),
        field: 'status',
        allowNull: false,
        defaultValue: "queued",
      },
      idempotencyKey: {
        type: DataTypes.STRING(100),
        field: 'idempotency_key',
        allowNull: false,
      },
      payload: {
        type: DataTypes.JSONB,
        field: 'payload',
        allowNull: false,
        defaultValue: "{}",
      },
      result: {
        type: DataTypes.JSONB,
        field: 'result',
        allowNull: true,
      },
      attempts: {
        type: DataTypes.SMALLINT,
        field: 'attempts',
        allowNull: false,
        defaultValue: 0,
      },
      maxAttempts: {
        type: DataTypes.SMALLINT,
        field: 'max_attempts',
        allowNull: false,
        defaultValue: 5,
      },
      runAfter: {
        type: DataTypes.DATE,
        field: 'run_after',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      lockedBy: {
        type: DataTypes.STRING(60),
        field: 'locked_by',
        allowNull: true,
      },
      lockedUntil: {
        type: DataTypes.DATE,
        field: 'locked_until',
        allowNull: true,
      },
      startedAt: {
        type: DataTypes.DATE,
        field: 'started_at',
        allowNull: true,
      },
      finishedAt: {
        type: DataTypes.DATE,
        field: 'finished_at',
        allowNull: true,
      },
      lastError: {
        type: DataTypes.TEXT,
        field: 'last_error',
        allowNull: true,
      },
      requestedByUserId: {
        type: DataTypes.TEXT,
        field: 'requested_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
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
      tableName: 'provisioning_provisioning_job',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['idempotency_key'] }
      ]
    }
  )
  return ProvisioningProvisioningJobEntity
}

import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type ProvisioningProvisioningStepAttributes = {
  recordCode?: string
  provisioningStepId: string | null
  jobId: string
  stepNo: number
  stepCode: string
  compensationStepCode?: string | null
  status?: string
  attempts?: number
  startedAt?: Date | null
  finishedAt?: Date | null
  output?: unknown | null
  error?: string | null
}

export type ProvisioningProvisioningStepCreationAttributes = Optional<ProvisioningProvisioningStepAttributes, "recordCode" | "compensationStepCode" | "status" | "attempts" | "startedAt" | "finishedAt" | "output" | "error">

export class ProvisioningProvisioningStepEntity
  extends Model<ProvisioningProvisioningStepAttributes, ProvisioningProvisioningStepCreationAttributes>
  implements ProvisioningProvisioningStepAttributes
{
  declare recordCode: string
  declare provisioningStepId: string | null
  declare jobId: string
  declare stepNo: number
  declare stepCode: string
  declare compensationStepCode: string | null
  declare status: string
  declare attempts: number
  declare startedAt: Date | null
  declare finishedAt: Date | null
  declare output: unknown | null
  declare error: string | null
}

export function initProvisioningProvisioningStepEntity(sequelize: Sequelize): typeof ProvisioningProvisioningStepEntity {
  ProvisioningProvisioningStepEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table (\r\n        'provisioning_provisioning_step'\r\n    )"),
      },
      provisioningStepId: {
        type: DataTypes.TEXT,
        field: 'provisioning_step_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      jobId: {
        type: DataTypes.TEXT,
        field: 'job_id',
        allowNull: false,
        references: { model: 'provisioning_provisioning_job', key: 'job_id' },
        onDelete: 'CASCADE',
      },
      stepNo: {
        type: DataTypes.SMALLINT,
        field: 'step_no',
        allowNull: false,
      },
      stepCode: {
        type: DataTypes.TEXT,
        field: 'step_code',
        allowNull: false,
      },
      compensationStepCode: {
        type: DataTypes.TEXT,
        field: 'compensation_step_code',
        allowNull: true,
      },
      status: {
        type: DataTypes.STRING(12),
        field: 'status',
        allowNull: false,
        defaultValue: "pending",
      },
      attempts: {
        type: DataTypes.SMALLINT,
        field: 'attempts',
        allowNull: false,
        defaultValue: 0,
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
      output: {
        type: DataTypes.JSONB,
        field: 'output',
        allowNull: true,
      },
      error: {
        type: DataTypes.TEXT,
        field: 'error',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'provisioning_provisioning_step',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['job_id', 'step_no'] }
      ]
    }
  )
  return ProvisioningProvisioningStepEntity
}

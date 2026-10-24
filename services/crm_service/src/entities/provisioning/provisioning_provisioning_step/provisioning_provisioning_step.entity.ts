import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type ProvisioningProvisioningStepAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
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
  UNIQUE?: string | null
}

export type ProvisioningProvisioningStepCreationAttributes = Optional<ProvisioningProvisioningStepAttributes, "id" | "publicId" | "recordCode" | "compensationStepCode" | "status" | "attempts" | "startedAt" | "finishedAt" | "output" | "error" | "UNIQUE">

export class ProvisioningProvisioningStepEntity
  extends Model<ProvisioningProvisioningStepAttributes, ProvisioningProvisioningStepCreationAttributes>
  implements ProvisioningProvisioningStepAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
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
  declare UNIQUE: string | null
}

export function initProvisioningProvisioningStepEntity(sequelize: Sequelize): typeof ProvisioningProvisioningStepEntity {
  ProvisioningProvisioningStepEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table (\r\n        'provisioning_provisioning_step'\r\n    )"),
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
      },
      UNIQUE: {
        type: DataTypes.TEXT,
        field: 'UNIQUE',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'provisioning_provisioning_step',
      timestamps: false,
      underscored: true,
      freezeTableName: true
    }
  )
  return ProvisioningProvisioningStepEntity
}

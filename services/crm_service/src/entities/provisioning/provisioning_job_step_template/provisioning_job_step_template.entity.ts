import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type ProvisioningJobStepTemplateAttributes = {
  recordCode?: string
  jobStepTemplateId: string | null
  jobType: string
  stepNo: number
  stepCode: string
  compensationStepCode?: string | null
  timeoutSeconds?: number
}

export type ProvisioningJobStepTemplateCreationAttributes = Optional<ProvisioningJobStepTemplateAttributes, "recordCode" | "compensationStepCode" | "timeoutSeconds">

export class ProvisioningJobStepTemplateEntity
  extends Model<ProvisioningJobStepTemplateAttributes, ProvisioningJobStepTemplateCreationAttributes>
  implements ProvisioningJobStepTemplateAttributes
{
  declare recordCode: string
  declare jobStepTemplateId: string | null
  declare jobType: string
  declare stepNo: number
  declare stepCode: string
  declare compensationStepCode: string | null
  declare timeoutSeconds: number
}

export function initProvisioningJobStepTemplateEntity(sequelize: Sequelize): typeof ProvisioningJobStepTemplateEntity {
  ProvisioningJobStepTemplateEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table (\r\n        'provisioning_job_step_template'\r\n    )"),
      },
      jobStepTemplateId: {
        type: DataTypes.TEXT,
        field: 'job_step_template_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      jobType: {
        type: DataTypes.STRING(12),
        field: 'job_type',
        allowNull: false,
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
      timeoutSeconds: {
        type: DataTypes.INTEGER,
        field: 'timeout_seconds',
        allowNull: false,
        defaultValue: 300,
      }
    },
    {
      sequelize,
      tableName: 'provisioning_job_step_template',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['job_type', 'step_no'] }
      ]
    }
  )
  return ProvisioningJobStepTemplateEntity
}

import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type ProvisioningJobStepTemplateAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  jobType: string
  stepNo: number
  stepCode: string
  compensationStepCode?: string | null
  timeoutSeconds?: number
  UNIQUE?: string | null
}

export type ProvisioningJobStepTemplateCreationAttributes = Optional<ProvisioningJobStepTemplateAttributes, "id" | "publicId" | "recordCode" | "compensationStepCode" | "timeoutSeconds" | "UNIQUE">

export class ProvisioningJobStepTemplateEntity
  extends Model<ProvisioningJobStepTemplateAttributes, ProvisioningJobStepTemplateCreationAttributes>
  implements ProvisioningJobStepTemplateAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare jobType: string
  declare stepNo: number
  declare stepCode: string
  declare compensationStepCode: string | null
  declare timeoutSeconds: number
  declare UNIQUE: string | null
}

export function initProvisioningJobStepTemplateEntity(sequelize: Sequelize): typeof ProvisioningJobStepTemplateEntity {
  ProvisioningJobStepTemplateEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table (\r\n        'provisioning_job_step_template'\r\n    )"),
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
      },
      UNIQUE: {
        type: DataTypes.TEXT,
        field: 'UNIQUE',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'provisioning_job_step_template',
      timestamps: false,
      underscored: true,
      freezeTableName: true
    }
  )
  return ProvisioningJobStepTemplateEntity
}

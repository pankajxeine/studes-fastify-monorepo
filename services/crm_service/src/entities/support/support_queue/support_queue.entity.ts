import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type SupportQueueAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  queueId?: string
  queueCode: string
  name: string
  teamId?: string | null
  applicationId?: string | null
  isDefault?: string
  isActive?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type SupportQueueCreationAttributes = Optional<SupportQueueAttributes, "id" | "publicId" | "recordCode" | "queueId" | "teamId" | "applicationId" | "isDefault" | "isActive" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class SupportQueueEntity
  extends Model<SupportQueueAttributes, SupportQueueCreationAttributes>
  implements SupportQueueAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare queueId: string
  declare queueCode: string
  declare name: string
  declare teamId: string | null
  declare applicationId: string | null
  declare isDefault: string
  declare isActive: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initSupportQueueEntity(sequelize: Sequelize): typeof SupportQueueEntity {
  SupportQueueEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('support_queue')"),
      },
      queueId: {
        type: DataTypes.TEXT,
        field: 'queue_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      queueCode: {
        type: DataTypes.TEXT,
        field: 'queue_code',
        allowNull: false,
      },
      name: {
        type: DataTypes.TEXT,
        field: 'name',
        allowNull: false,
      },
      teamId: {
        type: DataTypes.TEXT,
        field: 'team_id',
        allowNull: true,
        references: { model: 'org_team', key: 'team_id' },
      },
      applicationId: {
        type: DataTypes.TEXT,
        field: 'application_id',
        allowNull: true,
        references: { model: 'catalog_application', key: 'application_id' },
      },
      isDefault: {
        type: DataTypes.TEXT,
        field: 'is_default',
        allowNull: false,
        defaultValue: false,
      },
      isActive: {
        type: DataTypes.TEXT,
        field: 'is_active',
        allowNull: false,
        defaultValue: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      createdBy: {
        type: DataTypes.UUID,
        field: 'created_by',
        allowNull: true,
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updatedBy: {
        type: DataTypes.UUID,
        field: 'updated_by',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'support_queue',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['queue_code'] }
      ]
    }
  )
  return SupportQueueEntity
}

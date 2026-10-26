import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CrmActivityAttributes = {
  recordCode?: string
  activityId: string | null
  activityType: string
  subject: string
  body?: string | null
  relatedType: string
  relatedId: string
  ownerUserId: string
  dueAt?: Date | null
  completedAt?: Date | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type CrmActivityCreationAttributes = Optional<CrmActivityAttributes, "recordCode" | "body" | "dueAt" | "completedAt" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class CrmActivityEntity
  extends Model<CrmActivityAttributes, CrmActivityCreationAttributes>
  implements CrmActivityAttributes
{
  declare recordCode: string
  declare activityId: string | null
  declare activityType: string
  declare subject: string
  declare body: string | null
  declare relatedType: string
  declare relatedId: string
  declare ownerUserId: string
  declare dueAt: Date | null
  declare completedAt: Date | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initCrmActivityEntity(sequelize: Sequelize): typeof CrmActivityEntity {
  CrmActivityEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('crm_activity')"),
      },
      activityId: {
        type: DataTypes.TEXT,
        field: 'activity_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      activityType: {
        type: DataTypes.STRING(10),
        field: 'activity_type',
        allowNull: false,
      },
      subject: {
        type: DataTypes.TEXT,
        field: 'subject',
        allowNull: false,
      },
      body: {
        type: DataTypes.TEXT,
        field: 'body',
        allowNull: true,
      },
      relatedType: {
        type: DataTypes.STRING(15),
        field: 'related_type',
        allowNull: false,
      },
      relatedId: {
        type: DataTypes.TEXT,
        field: 'related_id',
        allowNull: false,
      },
      ownerUserId: {
        type: DataTypes.TEXT,
        field: 'owner_user_id',
        allowNull: false,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      dueAt: {
        type: DataTypes.DATE,
        field: 'due_at',
        allowNull: true,
      },
      completedAt: {
        type: DataTypes.DATE,
        field: 'completed_at',
        allowNull: true,
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
      tableName: 'crm_activity',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return CrmActivityEntity
}

import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type OnboardingChecklistItemAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  requestId: string
  itemCode: string
  title: string
  isMandatory?: string
  status?: string
  completedByUserId?: string | null
  completedAt?: Date | null
  note?: string | null
  UNIQUE?: string | null
}

export type OnboardingChecklistItemCreationAttributes = Optional<OnboardingChecklistItemAttributes, "id" | "publicId" | "recordCode" | "isMandatory" | "status" | "completedByUserId" | "completedAt" | "note" | "UNIQUE">

export class OnboardingChecklistItemEntity
  extends Model<OnboardingChecklistItemAttributes, OnboardingChecklistItemCreationAttributes>
  implements OnboardingChecklistItemAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare requestId: string
  declare itemCode: string
  declare title: string
  declare isMandatory: string
  declare status: string
  declare completedByUserId: string | null
  declare completedAt: Date | null
  declare note: string | null
  declare UNIQUE: string | null
}

export function initOnboardingChecklistItemEntity(sequelize: Sequelize): typeof OnboardingChecklistItemEntity {
  OnboardingChecklistItemEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('onboarding_checklist_item')"),
      },
      requestId: {
        type: DataTypes.TEXT,
        field: 'request_id',
        allowNull: false,
        references: { model: 'onboarding_onboarding_request', key: 'request_id' },
        onDelete: 'CASCADE',
      },
      itemCode: {
        type: DataTypes.TEXT,
        field: 'item_code',
        allowNull: false,
      },
      title: {
        type: DataTypes.TEXT,
        field: 'title',
        allowNull: false,
      },
      isMandatory: {
        type: DataTypes.TEXT,
        field: 'is_mandatory',
        allowNull: false,
        defaultValue: true,
      },
      status: {
        type: DataTypes.STRING(8),
        field: 'status',
        allowNull: false,
        defaultValue: "pending",
      },
      completedByUserId: {
        type: DataTypes.TEXT,
        field: 'completed_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      completedAt: {
        type: DataTypes.DATE,
        field: 'completed_at',
        allowNull: true,
      },
      note: {
        type: DataTypes.TEXT,
        field: 'note',
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
      tableName: 'onboarding_checklist_item',
      timestamps: false,
      underscored: true,
      freezeTableName: true
    }
  )
  return OnboardingChecklistItemEntity
}

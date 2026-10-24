import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type IamAccessReviewItemAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  accessReviewItemId?: string
  accessReviewId: string
  userRoleId: string
  reviewerUserId: string
  decision?: string | null
  decidedAt?: Date | null
  comment?: string | null
}

export type IamAccessReviewItemCreationAttributes = Optional<IamAccessReviewItemAttributes, "id" | "publicId" | "recordCode" | "accessReviewItemId" | "decision" | "decidedAt" | "comment">

export class IamAccessReviewItemEntity
  extends Model<IamAccessReviewItemAttributes, IamAccessReviewItemCreationAttributes>
  implements IamAccessReviewItemAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare accessReviewItemId: string
  declare accessReviewId: string
  declare userRoleId: string
  declare reviewerUserId: string
  declare decision: string | null
  declare decidedAt: Date | null
  declare comment: string | null
}

export function initIamAccessReviewItemEntity(sequelize: Sequelize): typeof IamAccessReviewItemEntity {
  IamAccessReviewItemEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('iam_access_review_item')"),
      },
      accessReviewItemId: {
        type: DataTypes.TEXT,
        field: 'access_review_item_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      accessReviewId: {
        type: DataTypes.TEXT,
        field: 'access_review_id',
        allowNull: false,
        references: { model: 'iam_access_review', key: 'access_review_id' },
        onDelete: 'CASCADE',
      },
      userRoleId: {
        type: DataTypes.TEXT,
        field: 'user_role_id',
        allowNull: false,
        references: { model: 'iam_user_role', key: 'user_role_id' },
      },
      reviewerUserId: {
        type: DataTypes.TEXT,
        field: 'reviewer_user_id',
        allowNull: false,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      decision: {
        type: DataTypes.STRING(10),
        field: 'decision',
        allowNull: true,
      },
      decidedAt: {
        type: DataTypes.DATE,
        field: 'decided_at',
        allowNull: true,
      },
      comment: {
        type: DataTypes.TEXT,
        field: 'comment',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'iam_access_review_item',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['access_review_id', 'user_role_id'] }
      ]
    }
  )
  return IamAccessReviewItemEntity
}

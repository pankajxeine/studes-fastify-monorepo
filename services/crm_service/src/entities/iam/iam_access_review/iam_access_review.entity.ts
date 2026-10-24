import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type IamAccessReviewAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  accessReviewId?: string
  name: string
  periodLabel: string
  status?: string
  dueAt: Date
  closedAt?: Date | null
  createdAt?: Date
  createdBy?: string | null
}

export type IamAccessReviewCreationAttributes = Optional<IamAccessReviewAttributes, "id" | "publicId" | "recordCode" | "accessReviewId" | "status" | "closedAt" | "createdAt" | "createdBy">

export class IamAccessReviewEntity
  extends Model<IamAccessReviewAttributes, IamAccessReviewCreationAttributes>
  implements IamAccessReviewAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare accessReviewId: string
  declare name: string
  declare periodLabel: string
  declare status: string
  declare dueAt: Date
  declare closedAt: Date | null
  declare createdAt: Date
  declare createdBy: string | null
}

export function initIamAccessReviewEntity(sequelize: Sequelize): typeof IamAccessReviewEntity {
  IamAccessReviewEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('iam_access_review')"),
      },
      accessReviewId: {
        type: DataTypes.TEXT,
        field: 'access_review_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      name: {
        type: DataTypes.TEXT,
        field: 'name',
        allowNull: false,
      },
      periodLabel: {
        type: DataTypes.STRING(20),
        field: 'period_label',
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING(10),
        field: 'status',
        allowNull: false,
        defaultValue: "open",
      },
      dueAt: {
        type: DataTypes.DATE,
        field: 'due_at',
        allowNull: false,
      },
      closedAt: {
        type: DataTypes.DATE,
        field: 'closed_at',
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
      }
    },
    {
      sequelize,
      tableName: 'iam_access_review',
      timestamps: false,
      underscored: true,
      freezeTableName: true
    }
  )
  return IamAccessReviewEntity
}

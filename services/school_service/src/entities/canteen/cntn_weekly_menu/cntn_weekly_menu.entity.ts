import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CntnWeeklyMenuAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  weeklyMenuId?: string
  canteenOutletId: string
  name: string
  validFrom: string
  validTo: string
  validity?: string | null
  publishedAt?: Date | null
  publishedByUserId?: string | null
  notes?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type CntnWeeklyMenuCreationAttributes = Optional<CntnWeeklyMenuAttributes, "id" | "publicId" | "recordCode" | "weeklyMenuId" | "validity" | "publishedAt" | "publishedByUserId" | "notes" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class CntnWeeklyMenuEntity
  extends Model<CntnWeeklyMenuAttributes, CntnWeeklyMenuCreationAttributes>
  implements CntnWeeklyMenuAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare weeklyMenuId: string
  declare canteenOutletId: string
  declare name: string
  declare validFrom: string
  declare validTo: string
  declare validity: string | null
  declare publishedAt: Date | null
  declare publishedByUserId: string | null
  declare notes: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initCntnWeeklyMenuEntity(sequelize: Sequelize): typeof CntnWeeklyMenuEntity {
  CntnWeeklyMenuEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('cntn_weekly_menu')"),
      },
      weeklyMenuId: {
        type: DataTypes.TEXT,
        field: 'weekly_menu_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      canteenOutletId: {
        type: DataTypes.TEXT,
        field: 'canteen_outlet_id',
        allowNull: false,
        references: { model: 'cntn_canteen_outlet', key: 'canteen_outlet_id' },
      },
      name: {
        type: DataTypes.TEXT,
        field: 'name',
        allowNull: false,
      },
      validFrom: {
        type: DataTypes.TEXT,
        field: 'valid_from',
        allowNull: false,
      },
      validTo: {
        type: DataTypes.TEXT,
        field: 'valid_to',
        allowNull: false,
      },
      validity: {
        type: DataTypes.TEXT,
        field: 'validity',
        allowNull: true,
        autoIncrement: true,
      },
      publishedAt: {
        type: DataTypes.DATE,
        field: 'published_at',
        allowNull: true,
      },
      publishedByUserId: {
        type: DataTypes.TEXT,
        field: 'published_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      notes: {
        type: DataTypes.TEXT,
        field: 'notes',
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
      tableName: 'cntn_weekly_menu',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['weekly_menu_id', 'canteen_outlet_id'] }
      ]
    }
  )
  return CntnWeeklyMenuEntity
}

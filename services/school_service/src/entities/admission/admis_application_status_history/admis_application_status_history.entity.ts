import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type AdmisApplicationStatusHistoryAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  applicationStatusHistoryId?: string
  applicationId: string
  fromStatus?: string | null
  toStatus: string
  changedAt?: Date
  changedByUserId?: string | null
  remarks?: string | null
  createdAt?: Date
  createdBy?: string | null
}

export type AdmisApplicationStatusHistoryCreationAttributes = Optional<AdmisApplicationStatusHistoryAttributes, "id" | "publicId" | "recordCode" | "applicationStatusHistoryId" | "fromStatus" | "changedAt" | "changedByUserId" | "remarks" | "createdAt" | "createdBy">

export class AdmisApplicationStatusHistoryEntity
  extends Model<AdmisApplicationStatusHistoryAttributes, AdmisApplicationStatusHistoryCreationAttributes>
  implements AdmisApplicationStatusHistoryAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare applicationStatusHistoryId: string
  declare applicationId: string
  declare fromStatus: string | null
  declare toStatus: string
  declare changedAt: Date
  declare changedByUserId: string | null
  declare remarks: string | null
  declare createdAt: Date
  declare createdBy: string | null
}

export function initAdmisApplicationStatusHistoryEntity(sequelize: Sequelize): typeof AdmisApplicationStatusHistoryEntity {
  AdmisApplicationStatusHistoryEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table (\r\n        'admis_application_status_history'\r\n    )"),
      },
      applicationStatusHistoryId: {
        type: DataTypes.TEXT,
        field: 'application_status_history_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      applicationId: {
        type: DataTypes.TEXT,
        field: 'application_id',
        allowNull: false,
        references: { model: 'admis_application', key: 'application_id' },
        onDelete: 'CASCADE',
      },
      fromStatus: {
        type: DataTypes.TEXT,
        field: 'from_status',
        allowNull: true,
      },
      toStatus: {
        type: DataTypes.TEXT,
        field: 'to_status',
        allowNull: false,
      },
      changedAt: {
        type: DataTypes.DATE,
        field: 'changed_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      changedByUserId: {
        type: DataTypes.TEXT,
        field: 'changed_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      remarks: {
        type: DataTypes.TEXT,
        field: 'remarks',
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
      tableName: 'admis_application_status_history',
      timestamps: false,
      underscored: true,
      freezeTableName: true
    }
  )
  return AdmisApplicationStatusHistoryEntity
}

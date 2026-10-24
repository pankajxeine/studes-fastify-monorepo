import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type DispDisciplinaryActionAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  disciplinaryActionId?: string
  incidentPartyId: string
  actionType: string
  startDate?: string
  endDate?: Date | null
  details?: string | null
  issuedByUserId: string
  issuedAt?: Date
  guardianInformedAt?: Date | null
  status?: string
  revokedReason?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type DispDisciplinaryActionCreationAttributes = Optional<DispDisciplinaryActionAttributes, "id" | "publicId" | "recordCode" | "disciplinaryActionId" | "startDate" | "endDate" | "details" | "issuedAt" | "guardianInformedAt" | "status" | "revokedReason" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class DispDisciplinaryActionEntity
  extends Model<DispDisciplinaryActionAttributes, DispDisciplinaryActionCreationAttributes>
  implements DispDisciplinaryActionAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare disciplinaryActionId: string
  declare incidentPartyId: string
  declare actionType: string
  declare startDate: string
  declare endDate: Date | null
  declare details: string | null
  declare issuedByUserId: string
  declare issuedAt: Date
  declare guardianInformedAt: Date | null
  declare status: string
  declare revokedReason: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initDispDisciplinaryActionEntity(sequelize: Sequelize): typeof DispDisciplinaryActionEntity {
  DispDisciplinaryActionEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('disp_disciplinary_action')"),
      },
      disciplinaryActionId: {
        type: DataTypes.TEXT,
        field: 'disciplinary_action_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      incidentPartyId: {
        type: DataTypes.TEXT,
        field: 'incident_party_id',
        allowNull: false,
        references: { model: 'disp_incident_party', key: 'incident_party_id' },
      },
      actionType: {
        type: DataTypes.TEXT,
        field: 'action_type',
        allowNull: false,
      },
      startDate: {
        type: DataTypes.TEXT,
        field: 'start_date',
        allowNull: false,
        defaultValue: Sequelize.literal("current_date"),
      },
      endDate: {
        type: DataTypes.DATEONLY,
        field: 'end_date',
        allowNull: true,
      },
      details: {
        type: DataTypes.TEXT,
        field: 'details',
        allowNull: true,
      },
      issuedByUserId: {
        type: DataTypes.TEXT,
        field: 'issued_by_user_id',
        allowNull: false,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      issuedAt: {
        type: DataTypes.DATE,
        field: 'issued_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      guardianInformedAt: {
        type: DataTypes.DATE,
        field: 'guardian_informed_at',
        allowNull: true,
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "active",
      },
      revokedReason: {
        type: DataTypes.TEXT,
        field: 'revoked_reason',
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
      tableName: 'disp_disciplinary_action',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return DispDisciplinaryActionEntity
}

import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type DispIncidentPartyAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  incidentPartyId?: string
  incidentId: string
  studentId: string
  partyRole: string
  statement?: string | null
  statementRecordedAt?: Date | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type DispIncidentPartyCreationAttributes = Optional<DispIncidentPartyAttributes, "id" | "publicId" | "recordCode" | "incidentPartyId" | "statement" | "statementRecordedAt" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class DispIncidentPartyEntity
  extends Model<DispIncidentPartyAttributes, DispIncidentPartyCreationAttributes>
  implements DispIncidentPartyAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare incidentPartyId: string
  declare incidentId: string
  declare studentId: string
  declare partyRole: string
  declare statement: string | null
  declare statementRecordedAt: Date | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initDispIncidentPartyEntity(sequelize: Sequelize): typeof DispIncidentPartyEntity {
  DispIncidentPartyEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('disp_incident_party')"),
      },
      incidentPartyId: {
        type: DataTypes.TEXT,
        field: 'incident_party_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      incidentId: {
        type: DataTypes.TEXT,
        field: 'incident_id',
        allowNull: false,
        references: { model: 'disp_incident', key: 'incident_id' },
        onDelete: 'CASCADE',
      },
      studentId: {
        type: DataTypes.TEXT,
        field: 'student_id',
        allowNull: false,
        references: { model: 'sis_student', key: 'student_id' },
      },
      partyRole: {
        type: DataTypes.TEXT,
        field: 'party_role',
        allowNull: false,
      },
      statement: {
        type: DataTypes.TEXT,
        field: 'statement',
        allowNull: true,
      },
      statementRecordedAt: {
        type: DataTypes.DATE,
        field: 'statement_recorded_at',
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
      tableName: 'disp_incident_party',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['incident_id', 'student_id', 'party_role'] }
      ]
    }
  )
  return DispIncidentPartyEntity
}

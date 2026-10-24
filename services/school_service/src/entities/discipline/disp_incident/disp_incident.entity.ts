import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type DispIncidentAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  incidentId?: string
  incidentNo: string
  campusId: string
  incidentCategoryCode: string
  severity?: number
  occurredAt: Date
  location?: string | null
  sectionId?: string | null
  description: string
  isConfidential?: string
  reportedByUserId: string
  reportedAt?: Date
  status?: string
  resolvedAt?: Date | null
  resolutionSummary?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type DispIncidentCreationAttributes = Optional<DispIncidentAttributes, "id" | "publicId" | "recordCode" | "incidentId" | "severity" | "location" | "sectionId" | "isConfidential" | "reportedAt" | "status" | "resolvedAt" | "resolutionSummary" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class DispIncidentEntity
  extends Model<DispIncidentAttributes, DispIncidentCreationAttributes>
  implements DispIncidentAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare incidentId: string
  declare incidentNo: string
  declare campusId: string
  declare incidentCategoryCode: string
  declare severity: number
  declare occurredAt: Date
  declare location: string | null
  declare sectionId: string | null
  declare description: string
  declare isConfidential: string
  declare reportedByUserId: string
  declare reportedAt: Date
  declare status: string
  declare resolvedAt: Date | null
  declare resolutionSummary: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initDispIncidentEntity(sequelize: Sequelize): typeof DispIncidentEntity {
  DispIncidentEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('disp_incident')"),
      },
      incidentId: {
        type: DataTypes.TEXT,
        field: 'incident_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      incidentNo: {
        type: DataTypes.STRING(30),
        field: 'incident_no',
        allowNull: false,
      },
      campusId: {
        type: DataTypes.TEXT,
        field: 'campus_id',
        allowNull: false,
        references: { model: 'org_campus', key: 'campus_id' },
      },
      incidentCategoryCode: {
        type: DataTypes.TEXT,
        field: 'incident_category_code',
        allowNull: false,
        references: { model: 'disp_incident_category', key: 'incident_category_code' },
        onUpdate: 'CASCADE',
      },
      severity: {
        type: DataTypes.SMALLINT,
        field: 'severity',
        allowNull: false,
        defaultValue: 1,
      },
      occurredAt: {
        type: DataTypes.DATE,
        field: 'occurred_at',
        allowNull: false,
      },
      location: {
        type: DataTypes.TEXT,
        field: 'location',
        allowNull: true,
      },
      sectionId: {
        type: DataTypes.TEXT,
        field: 'section_id',
        allowNull: true,
        references: { model: 'acad_section', key: 'section_id' },
      },
      description: {
        type: DataTypes.TEXT,
        field: 'description',
        allowNull: false,
      },
      isConfidential: {
        type: DataTypes.TEXT,
        field: 'is_confidential',
        allowNull: false,
        defaultValue: false,
      },
      reportedByUserId: {
        type: DataTypes.TEXT,
        field: 'reported_by_user_id',
        allowNull: false,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      reportedAt: {
        type: DataTypes.DATE,
        field: 'reported_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "open",
      },
      resolvedAt: {
        type: DataTypes.DATE,
        field: 'resolved_at',
        allowNull: true,
      },
      resolutionSummary: {
        type: DataTypes.TEXT,
        field: 'resolution_summary',
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
      tableName: 'disp_incident',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['incident_no'] }
      ]
    }
  )
  return DispIncidentEntity
}

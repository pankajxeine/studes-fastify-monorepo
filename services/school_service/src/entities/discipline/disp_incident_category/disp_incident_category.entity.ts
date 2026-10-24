import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type DispIncidentCategoryAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  incidentCategoryCode?: string | null
  name: string
  description?: string | null
  severity?: number
  sortOrder?: number
  isActive?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type DispIncidentCategoryCreationAttributes = Optional<DispIncidentCategoryAttributes, "id" | "publicId" | "recordCode" | "incidentCategoryCode" | "description" | "severity" | "sortOrder" | "isActive" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class DispIncidentCategoryEntity
  extends Model<DispIncidentCategoryAttributes, DispIncidentCategoryCreationAttributes>
  implements DispIncidentCategoryAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare incidentCategoryCode: string | null
  declare name: string
  declare description: string | null
  declare severity: number
  declare sortOrder: number
  declare isActive: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initDispIncidentCategoryEntity(sequelize: Sequelize): typeof DispIncidentCategoryEntity {
  DispIncidentCategoryEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('disp_incident_category')"),
      },
      incidentCategoryCode: {
        type: DataTypes.TEXT,
        field: 'incident_category_code',
        allowNull: true,
        unique: true,
      },
      name: {
        type: DataTypes.TEXT,
        field: 'name',
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        field: 'description',
        allowNull: true,
      },
      severity: {
        type: DataTypes.SMALLINT,
        field: 'severity',
        allowNull: false,
        defaultValue: 1,
      },
      sortOrder: {
        type: DataTypes.SMALLINT,
        field: 'sort_order',
        allowNull: false,
        defaultValue: 0,
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
      tableName: 'disp_incident_category',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return DispIncidentCategoryEntity
}

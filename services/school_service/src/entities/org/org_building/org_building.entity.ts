import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type OrgBuildingAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  buildingId?: string
  campusId: string
  code: string
  name: string
  floors?: number
  yearBuilt?: number | null
  hasLift?: string
  isAccessible?: string
  isActive?: string
  notes?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type OrgBuildingCreationAttributes = Optional<OrgBuildingAttributes, "id" | "publicId" | "recordCode" | "buildingId" | "floors" | "yearBuilt" | "hasLift" | "isAccessible" | "isActive" | "notes" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class OrgBuildingEntity
  extends Model<OrgBuildingAttributes, OrgBuildingCreationAttributes>
  implements OrgBuildingAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare buildingId: string
  declare campusId: string
  declare code: string
  declare name: string
  declare floors: number
  declare yearBuilt: number | null
  declare hasLift: string
  declare isAccessible: string
  declare isActive: string
  declare notes: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initOrgBuildingEntity(sequelize: Sequelize): typeof OrgBuildingEntity {
  OrgBuildingEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('org_building')"),
      },
      buildingId: {
        type: DataTypes.TEXT,
        field: 'building_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      campusId: {
        type: DataTypes.TEXT,
        field: 'campus_id',
        allowNull: false,
        references: { model: 'org_campus', key: 'campus_id' },
      },
      code: {
        type: DataTypes.STRING(20),
        field: 'code',
        allowNull: false,
      },
      name: {
        type: DataTypes.TEXT,
        field: 'name',
        allowNull: false,
      },
      floors: {
        type: DataTypes.SMALLINT,
        field: 'floors',
        allowNull: false,
        defaultValue: 1,
      },
      yearBuilt: {
        type: DataTypes.SMALLINT,
        field: 'year_built',
        allowNull: true,
      },
      hasLift: {
        type: DataTypes.TEXT,
        field: 'has_lift',
        allowNull: false,
        defaultValue: false,
      },
      isAccessible: {
        type: DataTypes.TEXT,
        field: 'is_accessible',
        allowNull: false,
        defaultValue: false,
      },
      isActive: {
        type: DataTypes.TEXT,
        field: 'is_active',
        allowNull: false,
        defaultValue: true,
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
      tableName: 'org_building',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['campus_id', 'code'] },
      { unique: true, fields: ['building_id', 'campus_id'] }
      ]
    }
  )
  return OrgBuildingEntity
}

import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type OrgRoomAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  roomId?: string
  buildingId: string
  campusId: string
  roomTypeCode: string
  code: string
  name: string
  floorNo?: number
  capacity?: number | null
  areaSqm?: number | null
  isBookable?: string
  hasProjector?: string
  isAccessible?: string
  isActive?: string
  notes?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
  deletedAt?: Date | null
}

export type OrgRoomCreationAttributes = Optional<OrgRoomAttributes, "id" | "publicId" | "recordCode" | "roomId" | "floorNo" | "capacity" | "areaSqm" | "isBookable" | "hasProjector" | "isAccessible" | "isActive" | "notes" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy" | "deletedAt">

export class OrgRoomEntity
  extends Model<OrgRoomAttributes, OrgRoomCreationAttributes>
  implements OrgRoomAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare roomId: string
  declare buildingId: string
  declare campusId: string
  declare roomTypeCode: string
  declare code: string
  declare name: string
  declare floorNo: number
  declare capacity: number | null
  declare areaSqm: number | null
  declare isBookable: string
  declare hasProjector: string
  declare isAccessible: string
  declare isActive: string
  declare notes: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
  declare deletedAt: Date | null
}

export function initOrgRoomEntity(sequelize: Sequelize): typeof OrgRoomEntity {
  OrgRoomEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('org_room')"),
      },
      roomId: {
        type: DataTypes.TEXT,
        field: 'room_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      buildingId: {
        type: DataTypes.TEXT,
        field: 'building_id',
        allowNull: false,
        references: { model: 'org_building', key: 'building_id' },
        onUpdate: 'CASCADE',
      },
      campusId: {
        type: DataTypes.TEXT,
        field: 'campus_id',
        allowNull: false,
      },
      roomTypeCode: {
        type: DataTypes.TEXT,
        field: 'room_type_code',
        allowNull: false,
        references: { model: 'org_room_type', key: 'room_type_code' },
        onUpdate: 'CASCADE',
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
      floorNo: {
        type: DataTypes.SMALLINT,
        field: 'floor_no',
        allowNull: false,
        defaultValue: 0,
      },
      capacity: {
        type: DataTypes.SMALLINT,
        field: 'capacity',
        allowNull: true,
      },
      areaSqm: {
        type: DataTypes.DECIMAL(7, 2),
        field: 'area_sqm',
        allowNull: true,
      },
      isBookable: {
        type: DataTypes.TEXT,
        field: 'is_bookable',
        allowNull: false,
        defaultValue: true,
      },
      hasProjector: {
        type: DataTypes.TEXT,
        field: 'has_projector',
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
      },
      deletedAt: {
        type: DataTypes.DATE,
        field: 'deleted_at',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'org_room',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true,
      deletedAt: 'deletedAt'
    }
  )
  return OrgRoomEntity
}

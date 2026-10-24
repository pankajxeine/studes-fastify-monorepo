import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type HstlHostelRoomAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  hostelRoomId?: string
  hostelId: string
  roomNo: string
  floorNo?: number
  roomType: string
  bedCount: number
  hasAttachedBath?: string
  hasAirConditioning?: string
  isActive?: string
  notes?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type HstlHostelRoomCreationAttributes = Optional<HstlHostelRoomAttributes, "id" | "publicId" | "recordCode" | "hostelRoomId" | "floorNo" | "hasAttachedBath" | "hasAirConditioning" | "isActive" | "notes" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class HstlHostelRoomEntity
  extends Model<HstlHostelRoomAttributes, HstlHostelRoomCreationAttributes>
  implements HstlHostelRoomAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare hostelRoomId: string
  declare hostelId: string
  declare roomNo: string
  declare floorNo: number
  declare roomType: string
  declare bedCount: number
  declare hasAttachedBath: string
  declare hasAirConditioning: string
  declare isActive: string
  declare notes: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initHstlHostelRoomEntity(sequelize: Sequelize): typeof HstlHostelRoomEntity {
  HstlHostelRoomEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('hstl_hostel_room')"),
      },
      hostelRoomId: {
        type: DataTypes.TEXT,
        field: 'hostel_room_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      hostelId: {
        type: DataTypes.TEXT,
        field: 'hostel_id',
        allowNull: false,
        references: { model: 'hstl_hostel', key: 'hostel_id' },
      },
      roomNo: {
        type: DataTypes.STRING(20),
        field: 'room_no',
        allowNull: false,
      },
      floorNo: {
        type: DataTypes.SMALLINT,
        field: 'floor_no',
        allowNull: false,
        defaultValue: 0,
      },
      roomType: {
        type: DataTypes.STRING(20),
        field: 'room_type',
        allowNull: false,
      },
      bedCount: {
        type: DataTypes.SMALLINT,
        field: 'bed_count',
        allowNull: false,
      },
      hasAttachedBath: {
        type: DataTypes.TEXT,
        field: 'has_attached_bath',
        allowNull: false,
        defaultValue: false,
      },
      hasAirConditioning: {
        type: DataTypes.TEXT,
        field: 'has_air_conditioning',
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
      tableName: 'hstl_hostel_room',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['hostel_id', 'room_no'] }
      ]
    }
  )
  return HstlHostelRoomEntity
}

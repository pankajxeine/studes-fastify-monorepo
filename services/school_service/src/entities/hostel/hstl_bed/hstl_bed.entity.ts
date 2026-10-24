import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type HstlBedAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  bedId?: string
  hostelRoomId: string
  bedCode: string
  status?: string
  hasStudyDesk?: string
  hasLocker?: string
  notes?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type HstlBedCreationAttributes = Optional<HstlBedAttributes, "id" | "publicId" | "recordCode" | "bedId" | "status" | "hasStudyDesk" | "hasLocker" | "notes" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class HstlBedEntity
  extends Model<HstlBedAttributes, HstlBedCreationAttributes>
  implements HstlBedAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare bedId: string
  declare hostelRoomId: string
  declare bedCode: string
  declare status: string
  declare hasStudyDesk: string
  declare hasLocker: string
  declare notes: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initHstlBedEntity(sequelize: Sequelize): typeof HstlBedEntity {
  HstlBedEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('hstl_bed')"),
      },
      bedId: {
        type: DataTypes.TEXT,
        field: 'bed_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      hostelRoomId: {
        type: DataTypes.TEXT,
        field: 'hostel_room_id',
        allowNull: false,
        references: { model: 'hstl_hostel_room', key: 'hostel_room_id' },
        onDelete: 'CASCADE',
      },
      bedCode: {
        type: DataTypes.STRING(10),
        field: 'bed_code',
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING(20),
        field: 'status',
        allowNull: false,
        defaultValue: "available",
      },
      hasStudyDesk: {
        type: DataTypes.TEXT,
        field: 'has_study_desk',
        allowNull: false,
        defaultValue: true,
      },
      hasLocker: {
        type: DataTypes.TEXT,
        field: 'has_locker',
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
      tableName: 'hstl_bed',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['hostel_room_id', 'bed_code'] }
      ]
    }
  )
  return HstlBedEntity
}

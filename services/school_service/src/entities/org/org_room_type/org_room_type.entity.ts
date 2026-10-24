import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type OrgRoomTypeAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  roomTypeCode?: string | null
  name: string
  isTeachingSpace?: string
  sortOrder?: number
  isActive?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type OrgRoomTypeCreationAttributes = Optional<OrgRoomTypeAttributes, "id" | "publicId" | "recordCode" | "roomTypeCode" | "isTeachingSpace" | "sortOrder" | "isActive" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class OrgRoomTypeEntity
  extends Model<OrgRoomTypeAttributes, OrgRoomTypeCreationAttributes>
  implements OrgRoomTypeAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare roomTypeCode: string | null
  declare name: string
  declare isTeachingSpace: string
  declare sortOrder: number
  declare isActive: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initOrgRoomTypeEntity(sequelize: Sequelize): typeof OrgRoomTypeEntity {
  OrgRoomTypeEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('org_room_type')"),
      },
      roomTypeCode: {
        type: DataTypes.TEXT,
        field: 'room_type_code',
        allowNull: true,
        unique: true,
      },
      name: {
        type: DataTypes.TEXT,
        field: 'name',
        allowNull: false,
      },
      isTeachingSpace: {
        type: DataTypes.TEXT,
        field: 'is_teaching_space',
        allowNull: false,
        defaultValue: false,
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
      tableName: 'org_room_type',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return OrgRoomTypeEntity
}

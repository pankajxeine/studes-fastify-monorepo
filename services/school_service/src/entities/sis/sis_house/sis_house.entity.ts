import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type SisHouseAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  houseId?: string
  campusId: string
  code: string
  name: string
  colorHex?: string | null
  motto?: string | null
  houseMasterStaffId?: string | null
  isActive?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type SisHouseCreationAttributes = Optional<SisHouseAttributes, "id" | "publicId" | "recordCode" | "houseId" | "colorHex" | "motto" | "houseMasterStaffId" | "isActive" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class SisHouseEntity
  extends Model<SisHouseAttributes, SisHouseCreationAttributes>
  implements SisHouseAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare houseId: string
  declare campusId: string
  declare code: string
  declare name: string
  declare colorHex: string | null
  declare motto: string | null
  declare houseMasterStaffId: string | null
  declare isActive: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initSisHouseEntity(sequelize: Sequelize): typeof SisHouseEntity {
  SisHouseEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('sis_house')"),
      },
      houseId: {
        type: DataTypes.TEXT,
        field: 'house_id',
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
        type: DataTypes.TEXT,
        field: 'code',
        allowNull: false,
      },
      name: {
        type: DataTypes.TEXT,
        field: 'name',
        allowNull: false,
      },
      colorHex: {
        type: DataTypes.STRING(7),
        field: 'color_hex',
        allowNull: true,
      },
      motto: {
        type: DataTypes.TEXT,
        field: 'motto',
        allowNull: true,
      },
      houseMasterStaffId: {
        type: DataTypes.TEXT,
        field: 'house_master_staff_id',
        allowNull: true,
        references: { model: 'hr_staff', key: 'staff_id' },
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
      tableName: 'sis_house',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['campus_id', 'code'] },
      { unique: true, fields: ['campus_id', 'name'] },
      { unique: true, fields: ['house_id', 'campus_id'] }
      ]
    }
  )
  return SisHouseEntity
}

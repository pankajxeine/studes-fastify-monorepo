import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type HstlHostelAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  hostelId?: string
  campusId: string
  buildingId?: string | null
  code: string
  name: string
  genderPolicy: string
  wardenStaffId?: string | null
  phone?: string | null
  curfewTime?: Date
  visitingHours?: string | null
  termFeeAmount?: string
  isActive?: string
  notes?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type HstlHostelCreationAttributes = Optional<HstlHostelAttributes, "id" | "publicId" | "recordCode" | "hostelId" | "buildingId" | "wardenStaffId" | "phone" | "curfewTime" | "visitingHours" | "termFeeAmount" | "isActive" | "notes" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class HstlHostelEntity
  extends Model<HstlHostelAttributes, HstlHostelCreationAttributes>
  implements HstlHostelAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare hostelId: string
  declare campusId: string
  declare buildingId: string | null
  declare code: string
  declare name: string
  declare genderPolicy: string
  declare wardenStaffId: string | null
  declare phone: string | null
  declare curfewTime: Date
  declare visitingHours: string | null
  declare termFeeAmount: string
  declare isActive: string
  declare notes: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initHstlHostelEntity(sequelize: Sequelize): typeof HstlHostelEntity {
  HstlHostelEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('hstl_hostel')"),
      },
      hostelId: {
        type: DataTypes.TEXT,
        field: 'hostel_id',
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
      buildingId: {
        type: DataTypes.TEXT,
        field: 'building_id',
        allowNull: true,
        references: { model: 'org_building', key: 'building_id' },
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
      genderPolicy: {
        type: DataTypes.TEXT,
        field: 'gender_policy',
        allowNull: false,
      },
      wardenStaffId: {
        type: DataTypes.TEXT,
        field: 'warden_staff_id',
        allowNull: true,
        references: { model: 'hr_staff', key: 'staff_id' },
      },
      phone: {
        type: DataTypes.TEXT,
        field: 'phone',
        allowNull: true,
      },
      curfewTime: {
        type: DataTypes.TIME,
        field: 'curfew_time',
        allowNull: false,
        defaultValue: "21:00",
      },
      visitingHours: {
        type: DataTypes.TEXT,
        field: 'visiting_hours',
        allowNull: true,
      },
      termFeeAmount: {
        type: DataTypes.TEXT,
        field: 'term_fee_amount',
        allowNull: false,
        defaultValue: 0,
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
      tableName: 'hstl_hostel',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['campus_id', 'code'] }
      ]
    }
  )
  return HstlHostelEntity
}

import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type HstlMessMenuAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  messMenuId?: string
  hostelId: string
  dayOfWeek: string
  meal: string
  menuItems: string
  vegetarianOption?: string | null
  allergenNotes?: string | null
  servingStartTime: Date
  servingEndTime: Date
  validFrom: string
  validTo?: Date | null
  validity?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type HstlMessMenuCreationAttributes = Optional<HstlMessMenuAttributes, "id" | "publicId" | "recordCode" | "messMenuId" | "vegetarianOption" | "allergenNotes" | "validTo" | "validity" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class HstlMessMenuEntity
  extends Model<HstlMessMenuAttributes, HstlMessMenuCreationAttributes>
  implements HstlMessMenuAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare messMenuId: string
  declare hostelId: string
  declare dayOfWeek: string
  declare meal: string
  declare menuItems: string
  declare vegetarianOption: string | null
  declare allergenNotes: string | null
  declare servingStartTime: Date
  declare servingEndTime: Date
  declare validFrom: string
  declare validTo: Date | null
  declare validity: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initHstlMessMenuEntity(sequelize: Sequelize): typeof HstlMessMenuEntity {
  HstlMessMenuEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('hstl_mess_menu')"),
      },
      messMenuId: {
        type: DataTypes.TEXT,
        field: 'mess_menu_id',
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
      dayOfWeek: {
        type: DataTypes.TEXT,
        field: 'day_of_week',
        allowNull: false,
      },
      meal: {
        type: DataTypes.STRING(20),
        field: 'meal',
        allowNull: false,
      },
      menuItems: {
        type: DataTypes.TEXT,
        field: 'menu_items',
        allowNull: false,
      },
      vegetarianOption: {
        type: DataTypes.TEXT,
        field: 'vegetarian_option',
        allowNull: true,
      },
      allergenNotes: {
        type: DataTypes.TEXT,
        field: 'allergen_notes',
        allowNull: true,
      },
      servingStartTime: {
        type: DataTypes.TIME,
        field: 'serving_start_time',
        allowNull: false,
      },
      servingEndTime: {
        type: DataTypes.TIME,
        field: 'serving_end_time',
        allowNull: false,
      },
      validFrom: {
        type: DataTypes.TEXT,
        field: 'valid_from',
        allowNull: false,
      },
      validTo: {
        type: DataTypes.DATEONLY,
        field: 'valid_to',
        allowNull: true,
      },
      validity: {
        type: DataTypes.TEXT,
        field: 'validity',
        allowNull: true,
        autoIncrement: true,
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
      tableName: 'hstl_mess_menu',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return HstlMessMenuEntity
}

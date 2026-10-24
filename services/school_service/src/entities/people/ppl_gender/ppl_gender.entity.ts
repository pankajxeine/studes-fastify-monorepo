import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PplGenderAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  genderCode?: string | null
  name: string
  sortOrder?: number
  isActive?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type PplGenderCreationAttributes = Optional<PplGenderAttributes, "id" | "publicId" | "recordCode" | "genderCode" | "sortOrder" | "isActive" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class PplGenderEntity
  extends Model<PplGenderAttributes, PplGenderCreationAttributes>
  implements PplGenderAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare genderCode: string | null
  declare name: string
  declare sortOrder: number
  declare isActive: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initPplGenderEntity(sequelize: Sequelize): typeof PplGenderEntity {
  PplGenderEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('ppl_gender')"),
      },
      genderCode: {
        type: DataTypes.TEXT,
        field: 'gender_code',
        allowNull: true,
        unique: true,
      },
      name: {
        type: DataTypes.TEXT,
        field: 'name',
        allowNull: false,
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
      tableName: 'ppl_gender',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return PplGenderEntity
}

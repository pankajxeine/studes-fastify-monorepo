import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type AdmisInquirySourceAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  inquirySourceCode?: string | null
  name: string
  sortOrder?: number
  isActive?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type AdmisInquirySourceCreationAttributes = Optional<AdmisInquirySourceAttributes, "id" | "publicId" | "recordCode" | "inquirySourceCode" | "sortOrder" | "isActive" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class AdmisInquirySourceEntity
  extends Model<AdmisInquirySourceAttributes, AdmisInquirySourceCreationAttributes>
  implements AdmisInquirySourceAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare inquirySourceCode: string | null
  declare name: string
  declare sortOrder: number
  declare isActive: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initAdmisInquirySourceEntity(sequelize: Sequelize): typeof AdmisInquirySourceEntity {
  AdmisInquirySourceEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('admis_inquiry_source')"),
      },
      inquirySourceCode: {
        type: DataTypes.TEXT,
        field: 'inquiry_source_code',
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
      tableName: 'admis_inquiry_source',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return AdmisInquirySourceEntity
}

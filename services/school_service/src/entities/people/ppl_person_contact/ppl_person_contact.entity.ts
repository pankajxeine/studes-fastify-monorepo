import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PplPersonContactAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  personContactId?: string
  personId: string
  contactType: string
  contactValue: string
  isPrimary?: string
  isVerified?: string
  verifiedAt?: Date | null
  isOptedIn?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type PplPersonContactCreationAttributes = Optional<PplPersonContactAttributes, "id" | "publicId" | "recordCode" | "personContactId" | "isPrimary" | "isVerified" | "verifiedAt" | "isOptedIn" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class PplPersonContactEntity
  extends Model<PplPersonContactAttributes, PplPersonContactCreationAttributes>
  implements PplPersonContactAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare personContactId: string
  declare personId: string
  declare contactType: string
  declare contactValue: string
  declare isPrimary: string
  declare isVerified: string
  declare verifiedAt: Date | null
  declare isOptedIn: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initPplPersonContactEntity(sequelize: Sequelize): typeof PplPersonContactEntity {
  PplPersonContactEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('ppl_person_contact')"),
      },
      personContactId: {
        type: DataTypes.TEXT,
        field: 'person_contact_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      personId: {
        type: DataTypes.TEXT,
        field: 'person_id',
        allowNull: false,
        references: { model: 'ppl_person', key: 'person_id' },
        onDelete: 'CASCADE',
      },
      contactType: {
        type: DataTypes.STRING(12),
        field: 'contact_type',
        allowNull: false,
      },
      contactValue: {
        type: DataTypes.TEXT,
        field: 'contact_value',
        allowNull: false,
      },
      isPrimary: {
        type: DataTypes.TEXT,
        field: 'is_primary',
        allowNull: false,
        defaultValue: false,
      },
      isVerified: {
        type: DataTypes.TEXT,
        field: 'is_verified',
        allowNull: false,
        defaultValue: false,
      },
      verifiedAt: {
        type: DataTypes.DATE,
        field: 'verified_at',
        allowNull: true,
      },
      isOptedIn: {
        type: DataTypes.TEXT,
        field: 'is_opted_in',
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
      tableName: 'ppl_person_contact',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['person_id', 'contact_type', 'contact_value'] }
      ]
    }
  )
  return PplPersonContactEntity
}

import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PplPersonAddressAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  personAddressId?: string
  personId: string
  addressType?: string
  addressLine1: string
  addressLine2?: string | null
  city: string
  stateRegion?: string | null
  postalCode?: string | null
  countryCode: string
  isPrimary?: string
  validFrom?: Date | null
  validTo?: Date | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type PplPersonAddressCreationAttributes = Optional<PplPersonAddressAttributes, "id" | "publicId" | "recordCode" | "personAddressId" | "addressType" | "addressLine2" | "stateRegion" | "postalCode" | "isPrimary" | "validFrom" | "validTo" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class PplPersonAddressEntity
  extends Model<PplPersonAddressAttributes, PplPersonAddressCreationAttributes>
  implements PplPersonAddressAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare personAddressId: string
  declare personId: string
  declare addressType: string
  declare addressLine1: string
  declare addressLine2: string | null
  declare city: string
  declare stateRegion: string | null
  declare postalCode: string | null
  declare countryCode: string
  declare isPrimary: string
  declare validFrom: Date | null
  declare validTo: Date | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initPplPersonAddressEntity(sequelize: Sequelize): typeof PplPersonAddressEntity {
  PplPersonAddressEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('ppl_person_address')"),
      },
      personAddressId: {
        type: DataTypes.TEXT,
        field: 'person_address_id',
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
      addressType: {
        type: DataTypes.STRING(12),
        field: 'address_type',
        allowNull: false,
        defaultValue: "home",
      },
      addressLine1: {
        type: DataTypes.TEXT,
        field: 'address_line1',
        allowNull: false,
      },
      addressLine2: {
        type: DataTypes.TEXT,
        field: 'address_line2',
        allowNull: true,
      },
      city: {
        type: DataTypes.TEXT,
        field: 'city',
        allowNull: false,
      },
      stateRegion: {
        type: DataTypes.TEXT,
        field: 'state_region',
        allowNull: true,
      },
      postalCode: {
        type: DataTypes.STRING(20),
        field: 'postal_code',
        allowNull: true,
      },
      countryCode: {
        type: DataTypes.CHAR(2),
        field: 'country_code',
        allowNull: false,
      },
      isPrimary: {
        type: DataTypes.TEXT,
        field: 'is_primary',
        allowNull: false,
        defaultValue: false,
      },
      validFrom: {
        type: DataTypes.DATEONLY,
        field: 'valid_from',
        allowNull: true,
      },
      validTo: {
        type: DataTypes.DATEONLY,
        field: 'valid_to',
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
      tableName: 'ppl_person_address',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return PplPersonAddressEntity
}

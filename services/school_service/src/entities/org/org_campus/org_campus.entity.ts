import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type OrgCampusAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  campusId?: string
  organizationId: string
  code: string
  name: string
  campusType: string
  addressLine1?: string | null
  addressLine2?: string | null
  city?: string | null
  stateRegion?: string | null
  postalCode?: string | null
  countryCode?: string | null
  phone?: string | null
  email?: string | null
  timezone?: string | null
  latitude?: number | null
  longitude?: number | null
  establishedOn?: Date | null
  principalStaffId?: string | null
  isActive?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type OrgCampusCreationAttributes = Optional<OrgCampusAttributes, "id" | "publicId" | "recordCode" | "campusId" | "addressLine1" | "addressLine2" | "city" | "stateRegion" | "postalCode" | "countryCode" | "phone" | "email" | "timezone" | "latitude" | "longitude" | "establishedOn" | "principalStaffId" | "isActive" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class OrgCampusEntity
  extends Model<OrgCampusAttributes, OrgCampusCreationAttributes>
  implements OrgCampusAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare campusId: string
  declare organizationId: string
  declare code: string
  declare name: string
  declare campusType: string
  declare addressLine1: string | null
  declare addressLine2: string | null
  declare city: string | null
  declare stateRegion: string | null
  declare postalCode: string | null
  declare countryCode: string | null
  declare phone: string | null
  declare email: string | null
  declare timezone: string | null
  declare latitude: number | null
  declare longitude: number | null
  declare establishedOn: Date | null
  declare principalStaffId: string | null
  declare isActive: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initOrgCampusEntity(sequelize: Sequelize): typeof OrgCampusEntity {
  OrgCampusEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('org_campus')"),
      },
      campusId: {
        type: DataTypes.TEXT,
        field: 'campus_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      organizationId: {
        type: DataTypes.TEXT,
        field: 'organization_id',
        allowNull: false,
        references: { model: 'org_organization', key: 'organization_id' },
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
      campusType: {
        type: DataTypes.STRING(20),
        field: 'campus_type',
        allowNull: false,
      },
      addressLine1: {
        type: DataTypes.TEXT,
        field: 'address_line1',
        allowNull: true,
      },
      addressLine2: {
        type: DataTypes.TEXT,
        field: 'address_line2',
        allowNull: true,
      },
      city: {
        type: DataTypes.TEXT,
        field: 'city',
        allowNull: true,
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
        allowNull: true,
      },
      phone: {
        type: DataTypes.TEXT,
        field: 'phone',
        allowNull: true,
      },
      email: {
        type: DataTypes.TEXT,
        field: 'email',
        allowNull: true,
      },
      timezone: {
        type: DataTypes.TEXT,
        field: 'timezone',
        allowNull: true,
      },
      latitude: {
        type: DataTypes.DECIMAL(9, 6),
        field: 'latitude',
        allowNull: true,
      },
      longitude: {
        type: DataTypes.DECIMAL(9, 6),
        field: 'longitude',
        allowNull: true,
      },
      establishedOn: {
        type: DataTypes.DATEONLY,
        field: 'established_on',
        allowNull: true,
      },
      principalStaffId: {
        type: DataTypes.UUID,
        field: 'principal_staff_id',
        allowNull: true,
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
      tableName: 'org_campus',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['code'] },
      { unique: true, fields: ['name'] }
      ]
    }
  )
  return OrgCampusEntity
}

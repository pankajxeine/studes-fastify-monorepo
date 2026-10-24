import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type OrgTerritoryAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  territoryId?: string
  territoryCode: string
  name: string
  parentTerritoryId?: string | null
  countryCodes?: string | null
  isActive?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type OrgTerritoryCreationAttributes = Optional<OrgTerritoryAttributes, "id" | "publicId" | "recordCode" | "territoryId" | "parentTerritoryId" | "countryCodes" | "isActive" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class OrgTerritoryEntity
  extends Model<OrgTerritoryAttributes, OrgTerritoryCreationAttributes>
  implements OrgTerritoryAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare territoryId: string
  declare territoryCode: string
  declare name: string
  declare parentTerritoryId: string | null
  declare countryCodes: string | null
  declare isActive: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initOrgTerritoryEntity(sequelize: Sequelize): typeof OrgTerritoryEntity {
  OrgTerritoryEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('org_territory')"),
      },
      territoryId: {
        type: DataTypes.TEXT,
        field: 'territory_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      territoryCode: {
        type: DataTypes.TEXT,
        field: 'territory_code',
        allowNull: false,
      },
      name: {
        type: DataTypes.TEXT,
        field: 'name',
        allowNull: false,
      },
      parentTerritoryId: {
        type: DataTypes.TEXT,
        field: 'parent_territory_id',
        allowNull: true,
        references: { model: 'org_territory', key: 'territory_id' },
      },
      countryCodes: {
        type: DataTypes.CHAR(2),
        field: 'country_codes',
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
      tableName: 'org_territory',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['territory_code'] }
      ]
    }
  )
  return OrgTerritoryEntity
}

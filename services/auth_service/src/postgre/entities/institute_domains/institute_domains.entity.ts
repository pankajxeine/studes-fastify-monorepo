import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type InstituteDomainsAttributes = {
  id?: number | null
  institute_id?: number | null
  domain?: string | null
  schema_name?: string | null
  is_primary?: number | null
  status?: string | null
  created_at?: string | null
  updated_at?: string | null
}

export type InstituteDomainsCreationAttributes = Optional<InstituteDomainsAttributes, "id" | "institute_id" | "domain" | "schema_name" | "is_primary" | "status" | "created_at" | "updated_at">

export class InstituteDomainsEntity
  extends Model<InstituteDomainsAttributes, InstituteDomainsCreationAttributes>
  implements InstituteDomainsAttributes
{
  declare id: number | null
  declare institute_id: number | null
  declare domain: string | null
  declare schema_name: string | null
  declare is_primary: number | null
  declare status: string | null
  declare created_at: string | null
  declare updated_at: string | null
}

export function initInstituteDomainsEntity(sequelize: Sequelize): typeof InstituteDomainsEntity {
  InstituteDomainsEntity.init(
    {
      id: {
        type: DataTypes.TEXT,
        field: 'id',
        allowNull: true,
      },
      institute_id: {
        type: DataTypes.TEXT,
        field: 'institute_id',
        allowNull: true,
      },
      domain: {
        type: DataTypes.CHAR,
        field: 'domain',
        allowNull: true,
        defaultValue: null,
      },
      schema_name: {
        type: DataTypes.CHAR,
        field: 'schema_name',
        allowNull: true,
        defaultValue: null,
      },
      is_primary: {
        type: DataTypes.TEXT,
        field: 'is_primary',
        allowNull: true,
      },
      status: {
        type: DataTypes.CHAR,
        field: 'status',
        allowNull: true,
        defaultValue: null,
      },
      created_at: {
        type: DataTypes.CHAR,
        field: 'created_at',
        allowNull: true,
        defaultValue: null,
      },
      updated_at: {
        type: DataTypes.CHAR,
        field: 'updated_at',
        allowNull: true,
        defaultValue: null,
      }
    },
    {
      sequelize,
      tableName: 'institute_domains',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true
    }
  )
  return InstituteDomainsEntity
}

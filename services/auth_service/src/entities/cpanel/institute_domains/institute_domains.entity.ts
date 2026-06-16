import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type InstituteDomainsAttributes = {
  id?: number | null
  instituteId?: number | null
  domain?: string | null
  schemaName?: string | null
  isPrimary?: string | null
  status?: string | null
  createdAt?: Date | null
  updatedAt?: Date | null
}

export type InstituteDomainsCreationAttributes = Optional<InstituteDomainsAttributes, "id" | "instituteId" | "domain" | "schemaName" | "isPrimary" | "status" | "createdAt" | "updatedAt">

export class InstituteDomainsEntity
  extends Model<InstituteDomainsAttributes, InstituteDomainsCreationAttributes>
  implements InstituteDomainsAttributes
{
  declare id: number | null
  declare instituteId: number | null
  declare domain: string | null
  declare schemaName: string | null
  declare isPrimary: string | null
  declare status: string | null
  declare createdAt: Date | null
  declare updatedAt: Date | null
}

export function initInstituteDomainsEntity(sequelize: Sequelize): typeof InstituteDomainsEntity {
  InstituteDomainsEntity.init(
    {
      id: {
        type: DataTypes.TEXT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
      },
      instituteId: {
        type: DataTypes.TEXT,
        field: 'institute_id',
        allowNull: true,
      },
      domain: {
        type: DataTypes.STRING(100),
        field: 'domain',
        allowNull: true,
      },
      schemaName: {
        type: DataTypes.STRING(100),
        field: 'schema_name',
        allowNull: true,
      },
      isPrimary: {
        type: DataTypes.TEXT,
        field: 'is_primary',
        allowNull: true,
        defaultValue: "Yes",
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: true,
        defaultValue: "Active",
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: true,
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'institute_domains',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] },
      { unique: true, fields: ['domain'] }
      ]
    }
  )
  return InstituteDomainsEntity
}

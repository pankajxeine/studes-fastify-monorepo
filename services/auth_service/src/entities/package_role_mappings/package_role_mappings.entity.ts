import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PackageRoleMappingsAttributes = {
  id?: number
  package_role_id?: number | null
  package_id?: number | null
  created_at?: Date | null
  updated_at?: Date | null
}

export type PackageRoleMappingsCreationAttributes = Optional<PackageRoleMappingsAttributes, "id" | "package_role_id" | "package_id" | "created_at" | "updated_at">

export class PackageRoleMappingsEntity
  extends Model<PackageRoleMappingsAttributes, PackageRoleMappingsCreationAttributes>
  implements PackageRoleMappingsAttributes
{
  declare id: number
  declare package_role_id: number | null
  declare package_id: number | null
  declare created_at: Date | null
  declare updated_at: Date | null
}

export function initPackageRoleMappingsEntity(sequelize: Sequelize): typeof PackageRoleMappingsEntity {
  PackageRoleMappingsEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true ,
        autoIncrement: true,
      },
      package_role_id: {
        type: DataTypes.INTEGER,
        field: 'package_role_id',
        allowNull: true,
        unique: true,
        defaultValue: null,
      },
      package_id: {
        type: DataTypes.INTEGER,
        field: 'package_id',
        allowNull: true,
        unique: true,
        defaultValue: null,
      },
      created_at: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: true,
        defaultValue: null,
      },
      updated_at: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: true,
        defaultValue: null,
      }
    },
    {
      sequelize,
      tableName: 'package_role_mappings',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true
    }
  )
  return PackageRoleMappingsEntity
}

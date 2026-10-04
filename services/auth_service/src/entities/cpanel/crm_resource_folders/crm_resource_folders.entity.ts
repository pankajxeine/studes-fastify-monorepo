import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CrmResourceFoldersAttributes = {
  id?: number
  folderName?: string | null
  parentFolderId?: number | null
  createdBy?: number | null
  updatedBy?: number | null
  createdAt?: Date | null
  updatedAt?: Date | null
  deletedAt?: Date | null
}

export type CrmResourceFoldersCreationAttributes = Optional<CrmResourceFoldersAttributes, "id" | "folderName" | "parentFolderId" | "createdBy" | "updatedBy" | "createdAt" | "updatedAt" | "deletedAt">

export class CrmResourceFoldersEntity
  extends Model<CrmResourceFoldersAttributes, CrmResourceFoldersCreationAttributes>
  implements CrmResourceFoldersAttributes
{
  declare id: number
  declare folderName: string | null
  declare parentFolderId: number | null
  declare createdBy: number | null
  declare updatedBy: number | null
  declare createdAt: Date | null
  declare updatedAt: Date | null
  declare deletedAt: Date | null
}

export function initCrmResourceFoldersEntity(sequelize: Sequelize): typeof CrmResourceFoldersEntity {
  CrmResourceFoldersEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      folderName: {
        type: DataTypes.STRING(100),
        field: 'folder_name',
        allowNull: true,
      },
      parentFolderId: {
        type: DataTypes.INTEGER,
        field: 'parent_folder_id',
        allowNull: true,
      },
      createdBy: {
        type: DataTypes.INTEGER,
        field: 'created_by',
        allowNull: true,
      },
      updatedBy: {
        type: DataTypes.INTEGER,
        field: 'updated_by',
        allowNull: true,
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
      },
      deletedAt: {
        type: DataTypes.DATE,
        field: 'deleted_at',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'crm_resource_folders',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return CrmResourceFoldersEntity
}

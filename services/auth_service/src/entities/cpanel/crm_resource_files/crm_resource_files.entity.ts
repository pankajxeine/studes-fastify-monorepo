import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CrmResourceFilesAttributes = {
  id?: number
  folderId?: number | null
  fileName?: string | null
  fileOrigionalName?: string | null
  fileDescription?: string | null
  fileType?: string | null
  fileSize?: string | null
  createdBy?: number | null
  updatedBy?: number | null
  createdAt?: Date | null
  updatedAt?: Date | null
  deletedAt?: Date | null
}

export type CrmResourceFilesCreationAttributes = Optional<CrmResourceFilesAttributes, "id" | "folderId" | "fileName" | "fileOrigionalName" | "fileDescription" | "fileType" | "fileSize" | "createdBy" | "updatedBy" | "createdAt" | "updatedAt" | "deletedAt">

export class CrmResourceFilesEntity
  extends Model<CrmResourceFilesAttributes, CrmResourceFilesCreationAttributes>
  implements CrmResourceFilesAttributes
{
  declare id: number
  declare folderId: number | null
  declare fileName: string | null
  declare fileOrigionalName: string | null
  declare fileDescription: string | null
  declare fileType: string | null
  declare fileSize: string | null
  declare createdBy: number | null
  declare updatedBy: number | null
  declare createdAt: Date | null
  declare updatedAt: Date | null
  declare deletedAt: Date | null
}

export function initCrmResourceFilesEntity(sequelize: Sequelize): typeof CrmResourceFilesEntity {
  CrmResourceFilesEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      folderId: {
        type: DataTypes.INTEGER,
        field: 'folder_id',
        allowNull: true,
      },
      fileName: {
        type: DataTypes.STRING(150),
        field: 'file_name',
        allowNull: true,
      },
      fileOrigionalName: {
        type: DataTypes.STRING(150),
        field: 'file_origional_name',
        allowNull: true,
      },
      fileDescription: {
        type: DataTypes.STRING(150),
        field: 'file_description',
        allowNull: true,
      },
      fileType: {
        type: DataTypes.STRING(150),
        field: 'file_type',
        allowNull: true,
      },
      fileSize: {
        type: DataTypes.STRING(50),
        field: 'file_size',
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
      tableName: 'crm_resource_files',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return CrmResourceFilesEntity
}

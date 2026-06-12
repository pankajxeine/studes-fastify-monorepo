import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type DocumentTypesAttributes = {
  id?: number
  name?: string | null
  status?: string
  created_by: number
  updated_by: number
  created_at?: Date | null
  updated_at?: Date | null
  deleted_at?: Date | null
}

export type DocumentTypesCreationAttributes = Optional<DocumentTypesAttributes, "id" | "name" | "status" | "created_at" | "updated_at" | "deleted_at">

export class DocumentTypesEntity
  extends Model<DocumentTypesAttributes, DocumentTypesCreationAttributes>
  implements DocumentTypesAttributes
{
  declare id: number
  declare name: string | null
  declare status: string
  declare created_by: number
  declare updated_by: number
  declare created_at: Date | null
  declare updated_at: Date | null
  declare deleted_at: Date | null
}

export function initDocumentTypesEntity(sequelize: Sequelize): typeof DocumentTypesEntity {
  DocumentTypesEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true ,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(100),
        field: 'name',
        allowNull: true,
        unique: true,
        defaultValue: null,
      },
      status: {
        type: DataTypes.ENUM('active','inactive'),
        field: 'status',
        allowNull: false,
        defaultValue: "Active",
      },
      created_by: {
        type: DataTypes.INTEGER,
        field: 'created_by',
        allowNull: false,
      },
      updated_by: {
        type: DataTypes.INTEGER,
        field: 'updated_by',
        allowNull: false,
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
      },
      deleted_at: {
        type: DataTypes.DATE,
        field: 'deleted_at',
        allowNull: true,
        unique: true,
        defaultValue: null,
      }
    },
    {
      sequelize,
      tableName: 'document_types',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true
    }
  )
  return DocumentTypesEntity
}

import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type DocumentTypesAttributes = {
  id?: number | null
  name?: string | null
  status?: string | null
  createdBy?: number | null
  updatedBy?: number | null
  createdAt?: Date | null
  updatedAt?: Date | null
  deletedAt?: Date | null
}

export type DocumentTypesCreationAttributes = Optional<DocumentTypesAttributes, "id" | "name" | "status" | "createdBy" | "updatedBy" | "createdAt" | "updatedAt" | "deletedAt">

export class DocumentTypesEntity
  extends Model<DocumentTypesAttributes, DocumentTypesCreationAttributes>
  implements DocumentTypesAttributes
{
  declare id: number | null
  declare name: string | null
  declare status: string | null
  declare createdBy: number | null
  declare updatedBy: number | null
  declare createdAt: Date | null
  declare updatedAt: Date | null
  declare deletedAt: Date | null
}

export function initDocumentTypesEntity(sequelize: Sequelize): typeof DocumentTypesEntity {
  DocumentTypesEntity.init(
    {
      id: {
        type: DataTypes.TEXT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.CHAR(100),
        field: 'name',
        allowNull: true,
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: true,
        defaultValue: "Active",
      },
      createdBy: {
        type: DataTypes.TEXT,
        field: 'created_by',
        allowNull: true,
      },
      updatedBy: {
        type: DataTypes.TEXT,
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
      tableName: 'document_types',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return DocumentTypesEntity
}

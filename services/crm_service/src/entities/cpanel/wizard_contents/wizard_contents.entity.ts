import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type WizardContentsAttributes = {
  id?: string | number | null
  pageKey?: string | null
  videos?: string | null
  contents?: string | null
  createdAt?: Date
  updatedAt?: Date
}

export type WizardContentsCreationAttributes = Optional<WizardContentsAttributes, "id" | "pageKey" | "videos" | "contents" | "createdAt" | "updatedAt">

export class WizardContentsEntity
  extends Model<WizardContentsAttributes, WizardContentsCreationAttributes>
  implements WizardContentsAttributes
{
  declare id: string | number | null
  declare pageKey: string | null
  declare videos: string | null
  declare contents: string | null
  declare createdAt: Date
  declare updatedAt: Date
}

export function initWizardContentsEntity(sequelize: Sequelize): typeof WizardContentsEntity {
  WizardContentsEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      pageKey: {
        type: DataTypes.STRING(50),
        field: 'page_key',
        allowNull: true,
      },
      videos: {
        type: DataTypes.TEXT,
        field: 'videos',
        allowNull: true,
      },
      contents: {
        type: DataTypes.TEXT,
        field: 'contents',
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
        defaultValue: "DataTypes.NOW",
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
        defaultValue: "DataTypes.NOW",
      }
    },
    {
      sequelize,
      tableName: 'wizard_contents',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return WizardContentsEntity
}

import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type WizardContentsAttributes = {
  id: number
  pageKey?: string | null
  videos?: string | null
  contents?: string | null
  createdAt: Date
  updatedAt: Date
}

export type WizardContentsCreationAttributes = Optional<WizardContentsAttributes, "pageKey" | "videos" | "contents">

export class WizardContentsEntity
  extends Model<WizardContentsAttributes, WizardContentsCreationAttributes>
  implements WizardContentsAttributes
{
  declare id: number
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
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true,
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
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
      }
    },
    {
      sequelize,
      tableName: 'wizard_contents',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return WizardContentsEntity
}

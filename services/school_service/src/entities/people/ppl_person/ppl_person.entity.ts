import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PplPersonAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  personId?: string
  honorific?: string | null
  firstName: string
  middleName?: string | null
  lastName: string
  fullName?: string | null
  preferredName?: string | null
  dateOfBirth?: Date | null
  genderCode?: string | null
  nationality?: string | null
  nationalId?: string | null
  passportNo?: string | null
  primaryEmail?: string | null
  primaryPhone?: string | null
  firstLanguage?: string | null
  photoFileId?: string | null
  notes?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
  deletedAt?: Date | null
}

export type PplPersonCreationAttributes = Optional<PplPersonAttributes, "id" | "publicId" | "recordCode" | "personId" | "honorific" | "middleName" | "fullName" | "preferredName" | "dateOfBirth" | "genderCode" | "nationality" | "nationalId" | "passportNo" | "primaryEmail" | "primaryPhone" | "firstLanguage" | "photoFileId" | "notes" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy" | "deletedAt">

export class PplPersonEntity
  extends Model<PplPersonAttributes, PplPersonCreationAttributes>
  implements PplPersonAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare personId: string
  declare honorific: string | null
  declare firstName: string
  declare middleName: string | null
  declare lastName: string
  declare fullName: string | null
  declare preferredName: string | null
  declare dateOfBirth: Date | null
  declare genderCode: string | null
  declare nationality: string | null
  declare nationalId: string | null
  declare passportNo: string | null
  declare primaryEmail: string | null
  declare primaryPhone: string | null
  declare firstLanguage: string | null
  declare photoFileId: string | null
  declare notes: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
  declare deletedAt: Date | null
}

export function initPplPersonEntity(sequelize: Sequelize): typeof PplPersonEntity {
  PplPersonEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('ppl_person')"),
      },
      personId: {
        type: DataTypes.TEXT,
        field: 'person_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      honorific: {
        type: DataTypes.STRING(10),
        field: 'honorific',
        allowNull: true,
      },
      firstName: {
        type: DataTypes.TEXT,
        field: 'first_name',
        allowNull: false,
      },
      middleName: {
        type: DataTypes.TEXT,
        field: 'middle_name',
        allowNull: true,
      },
      lastName: {
        type: DataTypes.TEXT,
        field: 'last_name',
        allowNull: false,
      },
      fullName: {
        type: DataTypes.TEXT,
        field: 'full_name',
        allowNull: true,
        autoIncrement: true,
      },
      preferredName: {
        type: DataTypes.TEXT,
        field: 'preferred_name',
        allowNull: true,
      },
      dateOfBirth: {
        type: DataTypes.DATEONLY,
        field: 'date_of_birth',
        allowNull: true,
      },
      genderCode: {
        type: DataTypes.TEXT,
        field: 'gender_code',
        allowNull: true,
        references: { model: 'ppl_gender', key: 'gender_code' },
        onUpdate: 'CASCADE',
      },
      nationality: {
        type: DataTypes.CHAR(2),
        field: 'nationality',
        allowNull: true,
      },
      nationalId: {
        type: DataTypes.STRING(40),
        field: 'national_id',
        allowNull: true,
      },
      passportNo: {
        type: DataTypes.STRING(30),
        field: 'passport_no',
        allowNull: true,
      },
      primaryEmail: {
        type: DataTypes.TEXT,
        field: 'primary_email',
        allowNull: true,
      },
      primaryPhone: {
        type: DataTypes.TEXT,
        field: 'primary_phone',
        allowNull: true,
      },
      firstLanguage: {
        type: DataTypes.STRING(40),
        field: 'first_language',
        allowNull: true,
      },
      photoFileId: {
        type: DataTypes.UUID,
        field: 'photo_file_id',
        allowNull: true,
      },
      notes: {
        type: DataTypes.TEXT,
        field: 'notes',
        allowNull: true,
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
      },
      deletedAt: {
        type: DataTypes.DATE,
        field: 'deleted_at',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'ppl_person',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true,
      deletedAt: 'deletedAt'
    }
  )
  return PplPersonEntity
}

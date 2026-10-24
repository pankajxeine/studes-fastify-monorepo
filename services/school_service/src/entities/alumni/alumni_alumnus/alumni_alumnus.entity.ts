import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type AlumniAlumnusAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  alumnusId?: string
  personId: string
  studentId?: string | null
  programId?: string | null
  campusId?: string | null
  alumniNo: string
  graduationYear: number
  graduatedOn?: Date | null
  degreeTitle?: string | null
  finalCgpa?: number | null
  honours?: string | null
  currentCity?: string | null
  currentCountryCode?: string | null
  industry?: string | null
  linkedinUrl?: string | null
  bio?: string | null
  membershipStatus?: string
  isDirectoryVisible?: string
  canContact?: string
  isMentorAvailable?: string
  maxMentees?: number
  verifiedAt?: Date | null
  verifiedByUserId?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type AlumniAlumnusCreationAttributes = Optional<AlumniAlumnusAttributes, "id" | "publicId" | "recordCode" | "alumnusId" | "studentId" | "programId" | "campusId" | "graduatedOn" | "degreeTitle" | "finalCgpa" | "honours" | "currentCity" | "currentCountryCode" | "industry" | "linkedinUrl" | "bio" | "membershipStatus" | "isDirectoryVisible" | "canContact" | "isMentorAvailable" | "maxMentees" | "verifiedAt" | "verifiedByUserId" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class AlumniAlumnusEntity
  extends Model<AlumniAlumnusAttributes, AlumniAlumnusCreationAttributes>
  implements AlumniAlumnusAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare alumnusId: string
  declare personId: string
  declare studentId: string | null
  declare programId: string | null
  declare campusId: string | null
  declare alumniNo: string
  declare graduationYear: number
  declare graduatedOn: Date | null
  declare degreeTitle: string | null
  declare finalCgpa: number | null
  declare honours: string | null
  declare currentCity: string | null
  declare currentCountryCode: string | null
  declare industry: string | null
  declare linkedinUrl: string | null
  declare bio: string | null
  declare membershipStatus: string
  declare isDirectoryVisible: string
  declare canContact: string
  declare isMentorAvailable: string
  declare maxMentees: number
  declare verifiedAt: Date | null
  declare verifiedByUserId: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initAlumniAlumnusEntity(sequelize: Sequelize): typeof AlumniAlumnusEntity {
  AlumniAlumnusEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('alumni_alumnus')"),
      },
      alumnusId: {
        type: DataTypes.TEXT,
        field: 'alumnus_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      personId: {
        type: DataTypes.TEXT,
        field: 'person_id',
        allowNull: false,
        references: { model: 'ppl_person', key: 'person_id' },
      },
      studentId: {
        type: DataTypes.TEXT,
        field: 'student_id',
        allowNull: true,
        references: { model: 'sis_student', key: 'student_id' },
      },
      programId: {
        type: DataTypes.TEXT,
        field: 'program_id',
        allowNull: true,
        references: { model: 'acad_program', key: 'program_id' },
      },
      campusId: {
        type: DataTypes.TEXT,
        field: 'campus_id',
        allowNull: true,
        references: { model: 'org_campus', key: 'campus_id' },
      },
      alumniNo: {
        type: DataTypes.STRING(30),
        field: 'alumni_no',
        allowNull: false,
      },
      graduationYear: {
        type: DataTypes.SMALLINT,
        field: 'graduation_year',
        allowNull: false,
      },
      graduatedOn: {
        type: DataTypes.DATEONLY,
        field: 'graduated_on',
        allowNull: true,
      },
      degreeTitle: {
        type: DataTypes.TEXT,
        field: 'degree_title',
        allowNull: true,
      },
      finalCgpa: {
        type: DataTypes.DECIMAL(4, 2),
        field: 'final_cgpa',
        allowNull: true,
      },
      honours: {
        type: DataTypes.TEXT,
        field: 'honours',
        allowNull: true,
      },
      currentCity: {
        type: DataTypes.TEXT,
        field: 'current_city',
        allowNull: true,
      },
      currentCountryCode: {
        type: DataTypes.CHAR(2),
        field: 'current_country_code',
        allowNull: true,
      },
      industry: {
        type: DataTypes.TEXT,
        field: 'industry',
        allowNull: true,
      },
      linkedinUrl: {
        type: DataTypes.TEXT,
        field: 'linkedin_url',
        allowNull: true,
      },
      bio: {
        type: DataTypes.TEXT,
        field: 'bio',
        allowNull: true,
      },
      membershipStatus: {
        type: DataTypes.STRING(20),
        field: 'membership_status',
        allowNull: false,
        defaultValue: "unverified",
      },
      isDirectoryVisible: {
        type: DataTypes.TEXT,
        field: 'is_directory_visible',
        allowNull: false,
        defaultValue: true,
      },
      canContact: {
        type: DataTypes.TEXT,
        field: 'can_contact',
        allowNull: false,
        defaultValue: true,
      },
      isMentorAvailable: {
        type: DataTypes.TEXT,
        field: 'is_mentor_available',
        allowNull: false,
        defaultValue: false,
      },
      maxMentees: {
        type: DataTypes.SMALLINT,
        field: 'max_mentees',
        allowNull: false,
        defaultValue: 2,
      },
      verifiedAt: {
        type: DataTypes.DATE,
        field: 'verified_at',
        allowNull: true,
      },
      verifiedByUserId: {
        type: DataTypes.TEXT,
        field: 'verified_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
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
      }
    },
    {
      sequelize,
      tableName: 'alumni_alumnus',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['person_id'] },
      { unique: true, fields: ['student_id'] },
      { unique: true, fields: ['alumni_no'] }
      ]
    }
  )
  return AlumniAlumnusEntity
}

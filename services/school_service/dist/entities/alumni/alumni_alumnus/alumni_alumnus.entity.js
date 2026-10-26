"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlumniAlumnusEntity = void 0;
exports.initAlumniAlumnusEntity = initAlumniAlumnusEntity;
const sequelize_1 = require("sequelize");
class AlumniAlumnusEntity extends sequelize_1.Model {
}
exports.AlumniAlumnusEntity = AlumniAlumnusEntity;
function initAlumniAlumnusEntity(sequelize) {
    AlumniAlumnusEntity.init({
        id: {
            type: sequelize_1.DataTypes.BIGINT,
            field: 'id',
            allowNull: true,
            primaryKey: true,
            autoIncrement: true,
        },
        publicId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'public_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        recordCode: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'record_code',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('alumni_alumnus')"),
        },
        alumnusId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'alumnus_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        personId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'person_id',
            allowNull: false,
            references: { model: 'ppl_person', key: 'person_id' },
        },
        studentId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'student_id',
            allowNull: true,
            references: { model: 'sis_student', key: 'student_id' },
        },
        programId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'program_id',
            allowNull: true,
            references: { model: 'acad_program', key: 'program_id' },
        },
        campusId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'campus_id',
            allowNull: true,
            references: { model: 'org_campus', key: 'campus_id' },
        },
        alumniNo: {
            type: sequelize_1.DataTypes.STRING(30),
            field: 'alumni_no',
            allowNull: false,
        },
        graduationYear: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'graduation_year',
            allowNull: false,
        },
        graduatedOn: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'graduated_on',
            allowNull: true,
        },
        degreeTitle: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'degree_title',
            allowNull: true,
        },
        finalCgpa: {
            type: sequelize_1.DataTypes.DECIMAL(4, 2),
            field: 'final_cgpa',
            allowNull: true,
        },
        honours: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'honours',
            allowNull: true,
        },
        currentCity: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'current_city',
            allowNull: true,
        },
        currentCountryCode: {
            type: sequelize_1.DataTypes.CHAR(2),
            field: 'current_country_code',
            allowNull: true,
        },
        industry: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'industry',
            allowNull: true,
        },
        linkedinUrl: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'linkedin_url',
            allowNull: true,
        },
        bio: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'bio',
            allowNull: true,
        },
        membershipStatus: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'membership_status',
            allowNull: false,
            defaultValue: "unverified",
        },
        isDirectoryVisible: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_directory_visible',
            allowNull: false,
            defaultValue: true,
        },
        canContact: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'can_contact',
            allowNull: false,
            defaultValue: true,
        },
        isMentorAvailable: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_mentor_available',
            allowNull: false,
            defaultValue: false,
        },
        maxMentees: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'max_mentees',
            allowNull: false,
            defaultValue: 2,
        },
        verifiedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'verified_at',
            allowNull: true,
        },
        verifiedByUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'verified_by_user_id',
            allowNull: true,
            references: { model: 'iam_app_user', key: 'app_user_id' },
        },
        createdAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'created_at',
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        createdBy: {
            type: sequelize_1.DataTypes.UUID,
            field: 'created_by',
            allowNull: true,
        },
        updatedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'updated_at',
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        updatedBy: {
            type: sequelize_1.DataTypes.UUID,
            field: 'updated_by',
            allowNull: true,
        }
    }, {
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
    });
    return AlumniAlumnusEntity;
}

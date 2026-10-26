"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrtnPlacementDriveEntity = void 0;
exports.initPrtnPlacementDriveEntity = initPrtnPlacementDriveEntity;
const sequelize_1 = require("sequelize");
class PrtnPlacementDriveEntity extends sequelize_1.Model {
}
exports.PrtnPlacementDriveEntity = PrtnPlacementDriveEntity;
function initPrtnPlacementDriveEntity(sequelize) {
    PrtnPlacementDriveEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('prtn_placement_drive')"),
        },
        placementDriveId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'placement_drive_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        partnerOrganizationId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'partner_organization_id',
            allowNull: false,
            references: { model: 'prtn_partner_organization', key: 'partner_organization_id' },
        },
        campusId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'campus_id',
            allowNull: false,
            references: { model: 'org_campus', key: 'campus_id' },
        },
        academicYearId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'academic_year_id',
            allowNull: false,
            references: { model: 'acad_academic_year', key: 'academic_year_id' },
        },
        coordinatorStaffId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'coordinator_staff_id',
            allowNull: false,
            references: { model: 'hr_staff', key: 'staff_id' },
        },
        postedByPartnerContactId: {
            type: sequelize_1.DataTypes.UUID,
            field: 'posted_by_partner_contact_id',
            allowNull: true,
            references: { model: 'prtn_partner_contact', key: 'partner_contact_id' },
        },
        code: {
            type: sequelize_1.DataTypes.STRING(30),
            field: 'code',
            allowNull: false,
        },
        title: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'title',
            allowNull: false,
        },
        driveKind: {
            type: sequelize_1.DataTypes.STRING(12),
            field: 'drive_kind',
            allowNull: false,
        },
        roleTitle: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'role_title',
            allowNull: false,
        },
        jobDescription: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'job_description',
            allowNull: true,
        },
        workLocation: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'work_location',
            allowNull: true,
        },
        workMode: {
            type: sequelize_1.DataTypes.STRING(10),
            field: 'work_mode',
            allowNull: false,
            defaultValue: "onsite",
        },
        positionsCount: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'positions_count',
            allowNull: false,
            defaultValue: 1,
        },
        ctcMinAmount: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'ctc_min_amount',
            allowNull: true,
        },
        ctcMaxAmount: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'ctc_max_amount',
            allowNull: true,
        },
        stipendAmount: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'stipend_amount',
            allowNull: true,
        },
        engagementStartOn: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'engagement_start_on',
            allowNull: true,
        },
        engagementEndOn: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'engagement_end_on',
            allowNull: true,
        },
        registrationOpensOn: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'registration_opens_on',
            allowNull: false,
        },
        registrationClosesOn: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'registration_closes_on',
            allowNull: false,
        },
        status: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'status',
            allowNull: false,
            defaultValue: "draft",
        },
        approvedByUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'approved_by_user_id',
            allowNull: true,
            references: { model: 'iam_app_user', key: 'app_user_id' },
        },
        approvedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'approved_at',
            allowNull: true,
        },
        cancellationReason: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'cancellation_reason',
            allowNull: true,
        },
        notes: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'notes',
            allowNull: true,
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
        tableName: 'prtn_placement_drive',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['code'] },
            { unique: true, fields: ['placement_drive_id', 'academic_year_id'] }
        ]
    });
    return PrtnPlacementDriveEntity;
}

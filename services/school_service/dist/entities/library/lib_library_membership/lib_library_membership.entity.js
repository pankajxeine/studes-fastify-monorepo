"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibLibraryMembershipEntity = void 0;
exports.initLibLibraryMembershipEntity = initLibLibraryMembershipEntity;
const sequelize_1 = require("sequelize");
class LibLibraryMembershipEntity extends sequelize_1.Model {
}
exports.LibLibraryMembershipEntity = LibLibraryMembershipEntity;
function initLibLibraryMembershipEntity(sequelize) {
    LibLibraryMembershipEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('lib_library_membership')"),
        },
        libraryMembershipId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'library_membership_id',
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
        campusId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'campus_id',
            allowNull: false,
            references: { model: 'org_campus', key: 'campus_id' },
        },
        membershipNo: {
            type: sequelize_1.DataTypes.STRING(30),
            field: 'membership_no',
            allowNull: false,
        },
        memberType: {
            type: sequelize_1.DataTypes.STRING(10),
            field: 'member_type',
            allowNull: false,
        },
        maxLoans: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'max_loans',
            allowNull: false,
            defaultValue: 3,
        },
        loanPeriodDays: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'loan_period_days',
            allowNull: false,
            defaultValue: 14,
        },
        validFrom: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'valid_from',
            allowNull: false,
        },
        validTo: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'valid_to',
            allowNull: true,
        },
        validity: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'validity',
            allowNull: true,
            autoIncrement: true,
        },
        status: {
            type: sequelize_1.DataTypes.STRING(10),
            field: 'status',
            allowNull: false,
            defaultValue: "active",
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
        tableName: 'lib_library_membership',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['membership_no'] }
        ]
    });
    return LibLibraryMembershipEntity;
}

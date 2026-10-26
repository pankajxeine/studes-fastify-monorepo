"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HstlHostelEntity = void 0;
exports.initHstlHostelEntity = initHstlHostelEntity;
const sequelize_1 = require("sequelize");
class HstlHostelEntity extends sequelize_1.Model {
}
exports.HstlHostelEntity = HstlHostelEntity;
function initHstlHostelEntity(sequelize) {
    HstlHostelEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('hstl_hostel')"),
        },
        hostelId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'hostel_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        campusId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'campus_id',
            allowNull: false,
            references: { model: 'org_campus', key: 'campus_id' },
        },
        buildingId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'building_id',
            allowNull: true,
            references: { model: 'org_building', key: 'building_id' },
        },
        code: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'code',
            allowNull: false,
        },
        name: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'name',
            allowNull: false,
        },
        genderPolicy: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'gender_policy',
            allowNull: false,
        },
        wardenStaffId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'warden_staff_id',
            allowNull: true,
            references: { model: 'hr_staff', key: 'staff_id' },
        },
        phone: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'phone',
            allowNull: true,
        },
        curfewTime: {
            type: sequelize_1.DataTypes.TIME,
            field: 'curfew_time',
            allowNull: false,
            defaultValue: "21:00",
        },
        visitingHours: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'visiting_hours',
            allowNull: true,
        },
        termFeeAmount: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'term_fee_amount',
            allowNull: false,
            defaultValue: 0,
        },
        isActive: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_active',
            allowNull: false,
            defaultValue: true,
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
        tableName: 'hstl_hostel',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['campus_id', 'code'] }
        ]
    });
    return HstlHostelEntity;
}

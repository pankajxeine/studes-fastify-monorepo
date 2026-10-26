"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TtblTimetableEntryEntity = void 0;
exports.initTtblTimetableEntryEntity = initTtblTimetableEntryEntity;
const sequelize_1 = require("sequelize");
class TtblTimetableEntryEntity extends sequelize_1.Model {
}
exports.TtblTimetableEntryEntity = TtblTimetableEntryEntity;
function initTtblTimetableEntryEntity(sequelize) {
    TtblTimetableEntryEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('ttbl_timetable_entry')"),
        },
        timetableEntryId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'timetable_entry_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        courseOfferingId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'course_offering_id',
            allowNull: false,
            references: { model: 'acad_course_offering', key: 'course_offering_id' },
        },
        sectionId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'section_id',
            allowNull: true,
            references: { model: 'acad_section', key: 'section_id' },
        },
        staffId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'staff_id',
            allowNull: false,
            references: { model: 'hr_staff', key: 'staff_id' },
        },
        roomId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'room_id',
            allowNull: true,
            references: { model: 'org_room', key: 'room_id' },
        },
        periodId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'period_id',
            allowNull: false,
            references: { model: 'ttbl_period', key: 'period_id' },
        },
        dayOfWeek: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'day_of_week',
            allowNull: false,
        },
        entryType: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'entry_type',
            allowNull: false,
            defaultValue: "lecture",
        },
        effectiveFrom: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'effective_from',
            allowNull: false,
        },
        effectiveTo: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'effective_to',
            allowNull: true,
        },
        effective: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'effective',
            allowNull: true,
            autoIncrement: true,
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
        tableName: 'ttbl_timetable_entry',
        timestamps: true,
        underscored: true,
        freezeTableName: true
    });
    return TtblTimetableEntryEntity;
}

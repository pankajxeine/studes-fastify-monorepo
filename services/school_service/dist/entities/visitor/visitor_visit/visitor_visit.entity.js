"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisitorVisitEntity = void 0;
exports.initVisitorVisitEntity = initVisitorVisitEntity;
const sequelize_1 = require("sequelize");
class VisitorVisitEntity extends sequelize_1.Model {
}
exports.VisitorVisitEntity = VisitorVisitEntity;
function initVisitorVisitEntity(sequelize) {
    VisitorVisitEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('visitor_visit')"),
        },
        visitId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'visit_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        visitNo: {
            type: sequelize_1.DataTypes.STRING(30),
            field: 'visit_no',
            allowNull: false,
        },
        guestId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'guest_id',
            allowNull: false,
            references: { model: 'visitor_guest', key: 'guest_id' },
        },
        campusId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'campus_id',
            allowNull: false,
            references: { model: 'org_campus', key: 'campus_id' },
        },
        hostPersonId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'host_person_id',
            allowNull: true,
            references: { model: 'ppl_person', key: 'person_id' },
        },
        purpose: {
            type: sequelize_1.DataTypes.STRING(30),
            field: 'purpose',
            allowNull: false,
        },
        purposeDetail: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'purpose_detail',
            allowNull: true,
        },
        status: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'status',
            allowNull: false,
            defaultValue: "pre_registered",
        },
        checkInMethod: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'check_in_method',
            allowNull: true,
        },
        expectedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'expected_at',
            allowNull: true,
        },
        expectedUntil: {
            type: sequelize_1.DataTypes.DATE,
            field: 'expected_until',
            allowNull: true,
        },
        preRegisteredByUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'pre_registered_by_user_id',
            allowNull: true,
            references: { model: 'iam_app_user', key: 'app_user_id' },
        },
        partySize: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'party_size',
            allowNull: false,
            defaultValue: 1,
        },
        destinationRoomId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'destination_room_id',
            allowNull: true,
            references: { model: 'org_room', key: 'room_id' },
        },
        escortPersonId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'escort_person_id',
            allowNull: true,
            references: { model: 'ppl_person', key: 'person_id' },
        },
        badgeNo: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'badge_no',
            allowNull: true,
        },
        vehicleNo: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'vehicle_no',
            allowNull: true,
        },
        itemsDeclared: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'items_declared',
            allowNull: true,
        },
        checkedInAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'checked_in_at',
            allowNull: true,
        },
        checkedInByUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'checked_in_by_user_id',
            allowNull: true,
            references: { model: 'iam_app_user', key: 'app_user_id' },
        },
        checkedOutAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'checked_out_at',
            allowNull: true,
        },
        checkedOutByUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'checked_out_by_user_id',
            allowNull: true,
            references: { model: 'iam_app_user', key: 'app_user_id' },
        },
        watchlistId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'watchlist_id',
            allowNull: true,
            references: { model: 'visitor_watchlist', key: 'watchlist_id' },
        },
        deniedReason: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'denied_reason',
            allowNull: true,
        },
        cancelledReason: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'cancelled_reason',
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
        tableName: 'visitor_visit',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['visit_no'] }
        ]
    });
    return VisitorVisitEntity;
}

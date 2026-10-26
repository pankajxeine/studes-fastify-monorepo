"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGeneratedModels = createGeneratedModels;
exports.associateGeneratedModels = associateGeneratedModels;
const hstl_hostel_entity_1 = require("./hstl_hostel/hstl_hostel.entity");
const hstl_hostel_room_entity_1 = require("./hstl_hostel_room/hstl_hostel_room.entity");
const hstl_bed_entity_1 = require("./hstl_bed/hstl_bed.entity");
const hstl_bed_allocation_entity_1 = require("./hstl_bed_allocation/hstl_bed_allocation.entity");
const hstl_outpass_entity_1 = require("./hstl_outpass/hstl_outpass.entity");
const hstl_mess_menu_entity_1 = require("./hstl_mess_menu/hstl_mess_menu.entity");
function createGeneratedModels(sequelize) {
    const models = {
        hstl_hostel: (0, hstl_hostel_entity_1.initHstlHostelEntity)(sequelize),
        hstl_hostel_room: (0, hstl_hostel_room_entity_1.initHstlHostelRoomEntity)(sequelize),
        hstl_bed: (0, hstl_bed_entity_1.initHstlBedEntity)(sequelize),
        hstl_bed_allocation: (0, hstl_bed_allocation_entity_1.initHstlBedAllocationEntity)(sequelize),
        hstl_outpass: (0, hstl_outpass_entity_1.initHstlOutpassEntity)(sequelize),
        hstl_mess_menu: (0, hstl_mess_menu_entity_1.initHstlMessMenuEntity)(sequelize)
    };
    return models;
}
function associateGeneratedModels(models) {
    models.hstl_hostel_room.belongsTo(models.hstl_hostel, { as: 'hostel', foreignKey: 'hostelId', targetKey: 'hostelId' });
    models.hstl_hostel.hasMany(models.hstl_hostel_room, { as: 'hstlHostelRoom', foreignKey: 'hostelId', sourceKey: 'hostelId' });
    models.hstl_bed.belongsTo(models.hstl_hostel_room, { as: 'hostelRoom', foreignKey: 'hostelRoomId', targetKey: 'hostelRoomId', onDelete: 'CASCADE' });
    models.hstl_hostel_room.hasMany(models.hstl_bed, { as: 'hstlBed', foreignKey: 'hostelRoomId', sourceKey: 'hostelRoomId', onDelete: 'CASCADE' });
    models.hstl_bed_allocation.belongsTo(models.hstl_bed, { as: 'bed', foreignKey: 'bedId', targetKey: 'bedId' });
    models.hstl_bed.hasMany(models.hstl_bed_allocation, { as: 'hstlBedAllocation', foreignKey: 'bedId', sourceKey: 'bedId' });
    models.hstl_outpass.belongsTo(models.hstl_hostel, { as: 'hostel', foreignKey: 'hostelId', targetKey: 'hostelId' });
    models.hstl_hostel.hasMany(models.hstl_outpass, { as: 'hstlOutpass', foreignKey: 'hostelId', sourceKey: 'hostelId' });
    models.hstl_mess_menu.belongsTo(models.hstl_hostel, { as: 'hostel', foreignKey: 'hostelId', targetKey: 'hostelId' });
    models.hstl_hostel.hasMany(models.hstl_mess_menu, { as: 'hstlMessMenu', foreignKey: 'hostelId', sourceKey: 'hostelId' });
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerGeneratedEntityDecorators = registerGeneratedEntityDecorators;
const academic_1 = require("./academic");
const admission_1 = require("./admission");
const alumni_1 = require("./alumni");
const attendance_1 = require("./attendance");
const audit_1 = require("./audit");
const canteen_1 = require("./canteen");
const comms_1 = require("./comms");
const discipline_1 = require("./discipline");
const docs_1 = require("./docs");
const events_1 = require("./events");
const exam_1 = require("./exam");
const finance_1 = require("./finance");
const health_1 = require("./health");
const hostel_1 = require("./hostel");
const hr_1 = require("./hr");
const iam_1 = require("./iam");
const inventory_1 = require("./inventory");
const library_1 = require("./library");
const lms_1 = require("./lms");
const org_1 = require("./org");
const partner_1 = require("./partner");
const people_1 = require("./people");
const sis_1 = require("./sis");
const timetable_1 = require("./timetable");
const transport_1 = require("./transport");
const visitor_1 = require("./visitor");
function registerGeneratedEntityDecorators(app, sequelize) {
    const academicModels = (0, academic_1.createGeneratedModels)(sequelize);
    const admissionModels = (0, admission_1.createGeneratedModels)(sequelize);
    const alumniModels = (0, alumni_1.createGeneratedModels)(sequelize);
    const attendanceModels = (0, attendance_1.createGeneratedModels)(sequelize);
    const auditModels = (0, audit_1.createGeneratedModels)(sequelize);
    const canteenModels = (0, canteen_1.createGeneratedModels)(sequelize);
    const commsModels = (0, comms_1.createGeneratedModels)(sequelize);
    const disciplineModels = (0, discipline_1.createGeneratedModels)(sequelize);
    const docsModels = (0, docs_1.createGeneratedModels)(sequelize);
    const eventsModels = (0, events_1.createGeneratedModels)(sequelize);
    const examModels = (0, exam_1.createGeneratedModels)(sequelize);
    const financeModels = (0, finance_1.createGeneratedModels)(sequelize);
    const healthModels = (0, health_1.createGeneratedModels)(sequelize);
    const hostelModels = (0, hostel_1.createGeneratedModels)(sequelize);
    const hrModels = (0, hr_1.createGeneratedModels)(sequelize);
    const iamModels = (0, iam_1.createGeneratedModels)(sequelize);
    const inventoryModels = (0, inventory_1.createGeneratedModels)(sequelize);
    const libraryModels = (0, library_1.createGeneratedModels)(sequelize);
    const lmsModels = (0, lms_1.createGeneratedModels)(sequelize);
    const orgModels = (0, org_1.createGeneratedModels)(sequelize);
    const partnerModels = (0, partner_1.createGeneratedModels)(sequelize);
    const peopleModels = (0, people_1.createGeneratedModels)(sequelize);
    const sisModels = (0, sis_1.createGeneratedModels)(sequelize);
    const timetableModels = (0, timetable_1.createGeneratedModels)(sequelize);
    const transportModels = (0, transport_1.createGeneratedModels)(sequelize);
    const visitorModels = (0, visitor_1.createGeneratedModels)(sequelize);
    (0, academic_1.associateGeneratedModels)(academicModels);
    (0, admission_1.associateGeneratedModels)(admissionModels);
    (0, alumni_1.associateGeneratedModels)(alumniModels);
    (0, attendance_1.associateGeneratedModels)(attendanceModels);
    (0, audit_1.associateGeneratedModels)(auditModels);
    (0, canteen_1.associateGeneratedModels)(canteenModels);
    (0, comms_1.associateGeneratedModels)(commsModels);
    (0, discipline_1.associateGeneratedModels)(disciplineModels);
    (0, docs_1.associateGeneratedModels)(docsModels);
    (0, events_1.associateGeneratedModels)(eventsModels);
    (0, exam_1.associateGeneratedModels)(examModels);
    (0, finance_1.associateGeneratedModels)(financeModels);
    (0, health_1.associateGeneratedModels)(healthModels);
    (0, hostel_1.associateGeneratedModels)(hostelModels);
    (0, hr_1.associateGeneratedModels)(hrModels);
    (0, iam_1.associateGeneratedModels)(iamModels);
    (0, inventory_1.associateGeneratedModels)(inventoryModels);
    (0, library_1.associateGeneratedModels)(libraryModels);
    (0, lms_1.associateGeneratedModels)(lmsModels);
    (0, org_1.associateGeneratedModels)(orgModels);
    (0, partner_1.associateGeneratedModels)(partnerModels);
    (0, people_1.associateGeneratedModels)(peopleModels);
    (0, sis_1.associateGeneratedModels)(sisModels);
    (0, timetable_1.associateGeneratedModels)(timetableModels);
    (0, transport_1.associateGeneratedModels)(transportModels);
    (0, visitor_1.associateGeneratedModels)(visitorModels);
    const models = {
        ...academicModels,
        ...admissionModels,
        ...alumniModels,
        ...attendanceModels,
        ...auditModels,
        ...canteenModels,
        ...commsModels,
        ...disciplineModels,
        ...docsModels,
        ...eventsModels,
        ...examModels,
        ...financeModels,
        ...healthModels,
        ...hostelModels,
        ...hrModels,
        ...iamModels,
        ...inventoryModels,
        ...libraryModels,
        ...lmsModels,
        ...orgModels,
        ...partnerModels,
        ...peopleModels,
        ...sisModels,
        ...timetableModels,
        ...transportModels,
        ...visitorModels
    };
    app.decorate('models', models);
    return models;
}

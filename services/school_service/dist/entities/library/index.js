"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGeneratedModels = createGeneratedModels;
exports.associateGeneratedModels = associateGeneratedModels;
const lib_book_category_entity_1 = require("./lib_book_category/lib_book_category.entity");
const lib_book_entity_1 = require("./lib_book/lib_book.entity");
const lib_book_author_entity_1 = require("./lib_book_author/lib_book_author.entity");
const lib_book_copy_entity_1 = require("./lib_book_copy/lib_book_copy.entity");
const lib_library_membership_entity_1 = require("./lib_library_membership/lib_library_membership.entity");
const lib_loan_entity_1 = require("./lib_loan/lib_loan.entity");
const lib_reservation_entity_1 = require("./lib_reservation/lib_reservation.entity");
function createGeneratedModels(sequelize) {
    const models = {
        lib_book_category: (0, lib_book_category_entity_1.initLibBookCategoryEntity)(sequelize),
        lib_book: (0, lib_book_entity_1.initLibBookEntity)(sequelize),
        lib_book_author: (0, lib_book_author_entity_1.initLibBookAuthorEntity)(sequelize),
        lib_book_copy: (0, lib_book_copy_entity_1.initLibBookCopyEntity)(sequelize),
        lib_library_membership: (0, lib_library_membership_entity_1.initLibLibraryMembershipEntity)(sequelize),
        lib_loan: (0, lib_loan_entity_1.initLibLoanEntity)(sequelize),
        lib_reservation: (0, lib_reservation_entity_1.initLibReservationEntity)(sequelize)
    };
    return models;
}
function associateGeneratedModels(models) {
    models.lib_book.belongsTo(models.lib_book_category, { as: 'bookCategoryCode', foreignKey: 'bookCategoryCode', targetKey: 'bookCategoryCode', onUpdate: 'CASCADE' });
    models.lib_book_category.hasMany(models.lib_book, { as: 'libBook', foreignKey: 'bookCategoryCode', sourceKey: 'bookCategoryCode', onUpdate: 'CASCADE' });
    models.lib_book_author.belongsTo(models.lib_book, { as: 'book', foreignKey: 'bookId', targetKey: 'bookId', onDelete: 'CASCADE' });
    models.lib_book.hasMany(models.lib_book_author, { as: 'libBookAuthor', foreignKey: 'bookId', sourceKey: 'bookId', onDelete: 'CASCADE' });
    models.lib_book_copy.belongsTo(models.lib_book, { as: 'book', foreignKey: 'bookId', targetKey: 'bookId' });
    models.lib_book.hasMany(models.lib_book_copy, { as: 'libBookCopy', foreignKey: 'bookId', sourceKey: 'bookId' });
    models.lib_loan.belongsTo(models.lib_book_copy, { as: 'bookCopy', foreignKey: 'bookCopyId', targetKey: 'bookCopyId' });
    models.lib_book_copy.hasMany(models.lib_loan, { as: 'libLoan', foreignKey: 'bookCopyId', sourceKey: 'bookCopyId' });
    models.lib_loan.belongsTo(models.lib_library_membership, { as: 'libraryMembership', foreignKey: 'libraryMembershipId', targetKey: 'libraryMembershipId' });
    models.lib_library_membership.hasMany(models.lib_loan, { as: 'libLoan', foreignKey: 'libraryMembershipId', sourceKey: 'libraryMembershipId' });
    models.lib_reservation.belongsTo(models.lib_book, { as: 'book', foreignKey: 'bookId', targetKey: 'bookId' });
    models.lib_book.hasMany(models.lib_reservation, { as: 'libReservation', foreignKey: 'bookId', sourceKey: 'bookId' });
    models.lib_reservation.belongsTo(models.lib_library_membership, { as: 'libraryMembership', foreignKey: 'libraryMembershipId', targetKey: 'libraryMembershipId' });
    models.lib_library_membership.hasMany(models.lib_reservation, { as: 'libReservation', foreignKey: 'libraryMembershipId', sourceKey: 'libraryMembershipId' });
    models.lib_reservation.belongsTo(models.lib_book_copy, { as: 'bookCopy', foreignKey: 'bookCopyId', targetKey: 'bookCopyId' });
    models.lib_book_copy.hasMany(models.lib_reservation, { as: 'libReservation', foreignKey: 'bookCopyId', sourceKey: 'bookCopyId' });
    models.lib_reservation.belongsTo(models.lib_loan, { as: 'fulfilledLoan', foreignKey: 'fulfilledLoanId', targetKey: 'loanId' });
    models.lib_loan.hasMany(models.lib_reservation, { as: 'libReservation', foreignKey: 'fulfilledLoanId', sourceKey: 'loanId' });
}

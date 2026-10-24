import type { Sequelize } from 'sequelize'
import { initLibBookCategoryEntity } from './lib_book_category/lib_book_category.entity'
import { initLibBookEntity } from './lib_book/lib_book.entity'
import { initLibBookAuthorEntity } from './lib_book_author/lib_book_author.entity'
import { initLibBookCopyEntity } from './lib_book_copy/lib_book_copy.entity'
import { initLibLibraryMembershipEntity } from './lib_library_membership/lib_library_membership.entity'
import { initLibLoanEntity } from './lib_loan/lib_loan.entity'
import { initLibReservationEntity } from './lib_reservation/lib_reservation.entity'

export type GeneratedModels = {
  lib_book_category: ReturnType<typeof initLibBookCategoryEntity>;
  lib_book: ReturnType<typeof initLibBookEntity>;
  lib_book_author: ReturnType<typeof initLibBookAuthorEntity>;
  lib_book_copy: ReturnType<typeof initLibBookCopyEntity>;
  lib_library_membership: ReturnType<typeof initLibLibraryMembershipEntity>;
  lib_loan: ReturnType<typeof initLibLoanEntity>;
  lib_reservation: ReturnType<typeof initLibReservationEntity>;
}

export function createGeneratedModels(sequelize: Sequelize): GeneratedModels {
  const models: GeneratedModels = {
      lib_book_category: initLibBookCategoryEntity(sequelize),
      lib_book: initLibBookEntity(sequelize),
      lib_book_author: initLibBookAuthorEntity(sequelize),
      lib_book_copy: initLibBookCopyEntity(sequelize),
      lib_library_membership: initLibLibraryMembershipEntity(sequelize),
      lib_loan: initLibLoanEntity(sequelize),
      lib_reservation: initLibReservationEntity(sequelize)
  }
  return models
}

export function associateGeneratedModels(models: GeneratedModels): void {
  models.lib_book.belongsTo(models.lib_book_category, { as: 'bookCategoryCode', foreignKey: 'bookCategoryCode', targetKey: 'bookCategoryCode', onUpdate: 'CASCADE' })
  models.lib_book_category.hasMany(models.lib_book, { as: 'libBook', foreignKey: 'bookCategoryCode', sourceKey: 'bookCategoryCode', onUpdate: 'CASCADE' })
  models.lib_book_author.belongsTo(models.lib_book, { as: 'book', foreignKey: 'bookId', targetKey: 'bookId', onDelete: 'CASCADE' })
  models.lib_book.hasMany(models.lib_book_author, { as: 'libBookAuthor', foreignKey: 'bookId', sourceKey: 'bookId', onDelete: 'CASCADE' })
  models.lib_book_copy.belongsTo(models.lib_book, { as: 'book', foreignKey: 'bookId', targetKey: 'bookId' })
  models.lib_book.hasMany(models.lib_book_copy, { as: 'libBookCopy', foreignKey: 'bookId', sourceKey: 'bookId' })
  models.lib_loan.belongsTo(models.lib_book_copy, { as: 'bookCopy', foreignKey: 'bookCopyId', targetKey: 'bookCopyId' })
  models.lib_book_copy.hasMany(models.lib_loan, { as: 'libLoan', foreignKey: 'bookCopyId', sourceKey: 'bookCopyId' })
  models.lib_loan.belongsTo(models.lib_library_membership, { as: 'libraryMembership', foreignKey: 'libraryMembershipId', targetKey: 'libraryMembershipId' })
  models.lib_library_membership.hasMany(models.lib_loan, { as: 'libLoan', foreignKey: 'libraryMembershipId', sourceKey: 'libraryMembershipId' })
  models.lib_reservation.belongsTo(models.lib_book, { as: 'book', foreignKey: 'bookId', targetKey: 'bookId' })
  models.lib_book.hasMany(models.lib_reservation, { as: 'libReservation', foreignKey: 'bookId', sourceKey: 'bookId' })
  models.lib_reservation.belongsTo(models.lib_library_membership, { as: 'libraryMembership', foreignKey: 'libraryMembershipId', targetKey: 'libraryMembershipId' })
  models.lib_library_membership.hasMany(models.lib_reservation, { as: 'libReservation', foreignKey: 'libraryMembershipId', sourceKey: 'libraryMembershipId' })
  models.lib_reservation.belongsTo(models.lib_book_copy, { as: 'bookCopy', foreignKey: 'bookCopyId', targetKey: 'bookCopyId' })
  models.lib_book_copy.hasMany(models.lib_reservation, { as: 'libReservation', foreignKey: 'bookCopyId', sourceKey: 'bookCopyId' })
  models.lib_reservation.belongsTo(models.lib_loan, { as: 'fulfilledLoan', foreignKey: 'fulfilledLoanId', targetKey: 'loanId' })
  models.lib_loan.hasMany(models.lib_reservation, { as: 'libReservation', foreignKey: 'fulfilledLoanId', sourceKey: 'loanId' })
}

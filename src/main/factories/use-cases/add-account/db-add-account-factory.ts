import { DbAddAccount } from '../../../../data/use-cases/add-account/db-add-account'
import { BCryptAdapter } from '../../../../infra/criptography/bcrypt/bcrypt-adapter'
import { AccountMongoRepository } from '../../../../infra/db/mongodb/account/account-mongo-repository'
import { AddAccount } from '../../../../domain/use-cases/add-account'

export const makeDbAddAccount = (): AddAccount => {
  const salt = 12
  const bCryptAdapter = new BCryptAdapter(salt)
  const accountMongoRepository = new AccountMongoRepository()
  return new DbAddAccount(bCryptAdapter, accountMongoRepository, accountMongoRepository)
}

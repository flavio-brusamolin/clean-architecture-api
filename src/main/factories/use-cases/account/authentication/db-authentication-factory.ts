import env from '../../../../config/env'
import { DbAuthentication } from '../../../../../data/use-cases/authentication/db-authentication'
import { AccountMongoRepository } from '../../../../../infra/db/mongodb/account/account-mongo-repository'
import { BCryptAdapter } from '../../../../../infra/criptography/bcrypt/bcrypt-adapter'
import { JwtAdapter } from '../../../../../infra/criptography/jwt/jwt-adapter'
import { Authentication } from '../../../../../domain/use-cases/authentication'

export const makeDbAuthentication = (): Authentication => {
  const salt = 12
  const bCryptAdapter = new BCryptAdapter(salt)
  const jwtAdapter = new JwtAdapter(env.jwtSecret)
  const accountMongoRepository = new AccountMongoRepository()
  return new DbAuthentication(accountMongoRepository, bCryptAdapter, jwtAdapter, accountMongoRepository)
}

import { Account } from '../../../domain/models/account'
import { LoadAccountByToken } from '../../../domain/use-cases/load-account-by-token'
import { Decrypter } from '../../protocols/criptography/decrypter'
import { LoadAccountByTokenRepository } from '../../protocols/db/account/load-account-by-token-repository'

export class DbLoadAccountByToken implements LoadAccountByToken {
  public constructor (
    private readonly decrypter: Decrypter,
    private readonly loadAccountByTokenRepository: LoadAccountByTokenRepository
  ) {}

  public async load (accessToken: string, role?: string): Promise<Account> {
    const token = await this.decrypter.decrypt(accessToken)
    if (token) {
      return await this.loadAccountByTokenRepository.loadByToken(accessToken, role)
    }

    return null
  }
}

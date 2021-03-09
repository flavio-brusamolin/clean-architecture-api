import { Account } from '../../../domain/models/account'
import { LoadAccountByToken } from '../../../domain/use-cases/load-account-by-token'
import { Decrypter } from '../../protocols/criptography/decrypter'

export class DbLoadAccountByToken implements LoadAccountByToken {
  public constructor (private readonly decrypter: Decrypter) {}

  public async load (accessToken: string, _role?: string): Promise<Account> {
    await this.decrypter.decrypt(accessToken)
    return null
  }
}

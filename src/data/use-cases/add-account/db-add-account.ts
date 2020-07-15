import { AddAccount, AddAccountModel } from '../../../domain/use-cases/add-account'
import { Account } from '../../../domain/models/account'
import { Encrypter } from '../../protocols/encrypter'

export class DbAddAccount implements AddAccount {
  public constructor (private readonly encrypter: Encrypter) {
  }

  public async add (account: AddAccountModel): Promise<Account> {
    await this.encrypter.encrypt(account.password)

    return {
      ...account,
      id: 'valid_id'
    }
  }
}

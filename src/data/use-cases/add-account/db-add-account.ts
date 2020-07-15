import { AddAccount, AddAccountModel, Account, Encrypter } from './db-add-account-protocols'

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

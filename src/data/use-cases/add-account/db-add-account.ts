import { AddAccount, AddAccountModel, Account, Hasher, AddAccountRepository } from './db-add-account-protocols'

export class DbAddAccount implements AddAccount {
  public constructor (
    private readonly hasher: Hasher,
    private readonly addAccountRepository: AddAccountRepository) {
  }

  public async add (accountData: AddAccountModel): Promise<Account> {
    const hashedPassword = await this.hasher.hash(accountData.password)

    const account = await this.addAccountRepository.add({
      ...accountData,
      password: hashedPassword
    })

    return account
  }
}

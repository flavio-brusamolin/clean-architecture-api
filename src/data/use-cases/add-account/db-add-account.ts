import { AddAccount, AddAccountModel, Account, Encrypter, AddAccountRepository } from './db-add-account-protocols'

export class DbAddAccount implements AddAccount {
  public constructor (
    private readonly encrypter: Encrypter,
    private readonly addAccountRepository: AddAccountRepository) {
  }

  public async add (accountData: AddAccountModel): Promise<Account> {
    const hashedPassword = await this.encrypter.encrypt(accountData.password)

    await this.addAccountRepository.add({
      ...accountData,
      password: hashedPassword
    })

    return null
  }
}

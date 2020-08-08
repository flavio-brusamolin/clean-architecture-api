import {
  AddAccount,
  AddAccountModel,
  Account, Hasher,
  AddAccountRepository,
  LoadAccountByEmailRepository
} from './db-add-account-protocols'

export class DbAddAccount implements AddAccount {
  public constructor (
    private readonly hasher: Hasher,
    private readonly addAccountRepository: AddAccountRepository,
    private readonly loadAccountByEmailRepository: LoadAccountByEmailRepository
  ) { }

  public async add (accountData: AddAccountModel): Promise<Account> {
    const account = await this.loadAccountByEmailRepository.loadByEmail(accountData.email)

    if (!account) {
      const hashedPassword = await this.hasher.hash(accountData.password)

      const newAccount = await this.addAccountRepository.add({
        ...accountData,
        password: hashedPassword
      })

      return newAccount
    }

    return null
  }
}

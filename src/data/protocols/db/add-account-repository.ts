import { AddAccountModel } from '../../../domain/use-cases/add-account'
import { Account } from '../../../domain/models/account'

export interface AddAccountRepository {
  add: (accountData: AddAccountModel) => Promise<Account>
}

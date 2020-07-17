import { AddAccountRepository } from '../../../../data/protocols'
import { AddAccountModel } from '../../../../domain/use-cases/add-account'
import { Account } from '../../../../domain/models/account'
import { MongoHelper } from '../helpers/mongo-helper'

export class AccountMongoRepository implements AddAccountRepository {
  public async add (accountData: AddAccountModel): Promise<Account> {
    const accountCollection = await MongoHelper.getCollection('accounts')

    const result = await accountCollection.insertOne(accountData)
    const [accountRecord] = result.ops

    return MongoHelper.map(accountRecord)
  }
}

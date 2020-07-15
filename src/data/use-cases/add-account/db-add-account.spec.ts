import { Encrypter } from '../../protocols/encrypter'
import { DbAddAccount } from './db-add-account'
import { AddAccountModel } from '../../../domain/use-cases/add-account'

describe('DbAddAccount Use Case', () => {
  test('Should call Encrypter with correct password', async () => {
    class EncrypterStub implements Encrypter {
      public async encrypt (value: string): Promise<string> {
        return 'hashed_password'
      }
    }

    const encrypterStub = new EncrypterStub()
    const sut = new DbAddAccount(encrypterStub)

    const encryptSpy = jest.spyOn(encrypterStub, 'encrypt')

    const accountData: AddAccountModel = {
      name: 'valid_name',
      email: 'valid_email',
      password: 'valid_password'
    }

    await sut.add(accountData)

    expect(encryptSpy).toHaveBeenCalledWith('valid_password')
  })
})

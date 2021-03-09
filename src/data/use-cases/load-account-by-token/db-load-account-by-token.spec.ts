import { DbLoadAccountByToken } from './db-load-account-by-token'
import { Decrypter } from '../../protocols/criptography/decrypter'

describe('DbLoadAccountByToken Use Case', () => {
  test('Should call Decrypter with correct values', async () => {
    class DecrypterStub implements Decrypter {
      public async decrypt (_value: string): Promise<string> {
        return 'any_value'
      }
    }
    const decrypterStub = new DecrypterStub()
    const sut = new DbLoadAccountByToken(decrypterStub)

    const decryptSpy = jest.spyOn(decrypterStub, 'decrypt')

    await sut.load('any_token')

    expect(decryptSpy).toHaveBeenCalledWith('any_token')
  })
})

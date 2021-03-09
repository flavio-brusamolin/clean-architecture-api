import { DbLoadAccountByToken } from './db-load-account-by-token'
import { Decrypter } from '../../protocols/criptography/decrypter'

const makeDecrypter = (): Decrypter => {
  class DecrypterStub implements Decrypter {
    public async decrypt (_value: string): Promise<string> {
      return 'any_value'
    }
  }

  return new DecrypterStub()
}

interface SutTypes {
  sut: DbLoadAccountByToken
  decrypterStub: Decrypter
}

const makeSut = (): SutTypes => {
  const decrypterStub = makeDecrypter()
  const sut = new DbLoadAccountByToken(decrypterStub)

  return {
    sut,
    decrypterStub
  }
}

describe('DbLoadAccountByToken Use Case', () => {
  test('Should call Decrypter with correct values', async () => {
    const { sut, decrypterStub } = makeSut()

    const decryptSpy = jest.spyOn(decrypterStub, 'decrypt')

    await sut.load('any_token')

    expect(decryptSpy).toHaveBeenCalledWith('any_token')
  })
})

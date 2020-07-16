import { BCryptAdapter } from './bcrypt-adapter'
import bcrypt from 'bcrypt'

jest.mock('bcrypt', () => ({
  async hash (): Promise<string> {
    return 'hashed_value'
  }
}))

describe('BCrypt Adapter', () => {
  test('Should call bcrypt lib with correct values', async () => {
    const salt = 12
    const sut = new BCryptAdapter(salt)

    const hashSpy = jest.spyOn(bcrypt, 'hash')

    await sut.encrypt('any_value')

    expect(hashSpy).toHaveBeenCalledWith('any_value', salt)
  })

  test('Should return a hash on success', async () => {
    const salt = 12
    const sut = new BCryptAdapter(salt)

    const hash = await sut.encrypt('any_value')

    expect(hash).toBe('hashed_value')
  })
})

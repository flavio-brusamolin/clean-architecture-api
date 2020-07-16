import { Encrypter } from '../../data/protocols'
import { hash } from 'bcrypt'

export class BCryptAdapter implements Encrypter {
  public constructor (private readonly salt: number) {
  }

  public async encrypt (value: string): Promise<string> {
    await hash(value, this.salt)

    return ''
  }
}

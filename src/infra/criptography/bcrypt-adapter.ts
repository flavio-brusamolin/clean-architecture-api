import { Encrypter } from '../../data/protocols'
import bcrypt from 'bcrypt'

export class BCryptAdapter implements Encrypter {
  public constructor (private readonly salt: number) {
  }

  public async encrypt (value: string): Promise<string> {
    return await bcrypt.hash(value, this.salt)
  }
}

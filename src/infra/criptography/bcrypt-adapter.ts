import { Hasher } from '../../data/protocols'
import bcrypt from 'bcrypt'

export class BCryptAdapter implements Hasher {
  public constructor (private readonly salt: number) {
  }

  public async hash (value: string): Promise<string> {
    return await bcrypt.hash(value, this.salt)
  }
}

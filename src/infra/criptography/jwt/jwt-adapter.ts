import jwt from 'jsonwebtoken'
import { Encrypter } from '../../../data/protocols'

export class JwtAdapter implements Encrypter {
  public constructor (private readonly secret: string) {
  }

  public async encrypt (value: string): Promise<string> {
    await jwt.sign({ id: value }, this.secret)

    return null
  }
}

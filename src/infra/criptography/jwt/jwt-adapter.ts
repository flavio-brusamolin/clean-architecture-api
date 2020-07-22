import jwt from 'jsonwebtoken'
import { Encrypter } from '../../../data/protocols'

export class JwtAdapter implements Encrypter {
  public constructor (private readonly secret: string) {}

  public async encrypt (value: string): Promise<string> {
    const accessToken = await jwt.sign({ id: value }, this.secret)
    return accessToken
  }
}

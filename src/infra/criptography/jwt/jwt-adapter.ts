import jwt from 'jsonwebtoken'
import { Encrypter } from '../../../data/protocols'
import { Decrypter } from '../../../data/protocols/criptography/decrypter'

export class JwtAdapter implements Encrypter, Decrypter {
  public constructor (private readonly secret: string) {}

  public async encrypt (value: string): Promise<string> {
    return jwt.sign({ id: value }, this.secret)
  }

  public async decrypt (value: string): Promise<string> {
    jwt.verify(value, this.secret)
    return null
  }
}

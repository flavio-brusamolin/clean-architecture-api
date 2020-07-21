import { Authentication, AuthenticationModel } from '../../../domain/use-cases/authentication'
import { LoadAccountByEmailRepository } from '../../protocols'

export class DbAuthentication implements Authentication {
  public constructor (private readonly loadAccountByEmailRepository: LoadAccountByEmailRepository) {
  }

  public async auth (authentication: AuthenticationModel): Promise<string> {
    await this.loadAccountByEmailRepository.load(authentication.email)

    return null
  }
}

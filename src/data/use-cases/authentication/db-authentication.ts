import { Authentication, AuthenticationModel } from '../../../domain/use-cases/authentication'
import { LoadAccountByEmailRepository, HashComparer } from '../../protocols'

export class DbAuthentication implements Authentication {
  public constructor (
    private readonly loadAccountByEmailRepository: LoadAccountByEmailRepository,
    private readonly hashComparer: HashComparer) {
  }

  public async auth (authentication: AuthenticationModel): Promise<string> {
    const account = await this.loadAccountByEmailRepository.load(authentication.email)

    if (account) {
      await this.hashComparer.compare(authentication.password, account.password)
    }

    return null
  }
}

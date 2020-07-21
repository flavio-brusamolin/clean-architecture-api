import { Authentication, AuthenticationModel } from '../../../domain/use-cases/authentication'
import { LoadAccountByEmailRepository, HashComparer, TokenGenerator } from '../../protocols'

export class DbAuthentication implements Authentication {
  public constructor (
    private readonly loadAccountByEmailRepository: LoadAccountByEmailRepository,
    private readonly hashComparer: HashComparer,
    private readonly tokenGenerator: TokenGenerator) {
  }

  public async auth (authentication: AuthenticationModel): Promise<string> {
    const account = await this.loadAccountByEmailRepository.load(authentication.email)

    if (account) {
      await this.hashComparer.compare(authentication.password, account.password)
      await this.tokenGenerator.generate(account.id)
    }

    return null
  }
}

import { Controller, HttpRequest, HttpResponse, EmailValidator, Authentication } from './login-protocols'
import { MissingParamError, InvalidParamError } from '../../errors'
import { badRequest, serverError, unauthorized } from '../../helpers/http-helper'

export class LoginController implements Controller {
  public constructor (
    private readonly emailValidator: EmailValidator,
    private readonly authentication: Authentication) {
  }

  public async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const requiredFields = ['email', 'password']

      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }

      const { email, password } = httpRequest.body

      if (!this.emailValidator.isValid(email)) {
        return badRequest(new InvalidParamError('email'))
      }

      const token = await this.authentication.auth(email, password)

      if (!token) {
        return unauthorized()
      }
    } catch (error) {
      return serverError(error)
    }
  }
}

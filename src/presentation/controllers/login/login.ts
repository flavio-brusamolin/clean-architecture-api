import { Controller, HttpRequest, HttpResponse } from '../../protocols'
import { MissingParamError } from '../../errors'
import { badRequest } from '../../helpers/http-helper'

export class LoginController implements Controller {
  public async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    if (!httpRequest.body.email) {
      return badRequest(new MissingParamError('email'))
    }

    if (!httpRequest.body.password) {
      return badRequest(new MissingParamError('password'))
    }
  }
}

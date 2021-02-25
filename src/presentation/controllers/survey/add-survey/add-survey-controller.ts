import { Controller, HttpRequest, HttpResponse, Validation, AddSurvey } from './add-survey-controller-protocols'
import { badRequest, serverError } from '../../../helpers/http/http-helper'

export class AddSurveyController implements Controller {
  public constructor (
    private readonly validation: Validation,
    private readonly addSurvey: AddSurvey
  ) {}

  public async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)

      const { question, answers } = httpRequest.body
      await this.addSurvey.add({
        question,
        answers
      })

      return badRequest(error)
    } catch (error) {
      return serverError(error)
    }
  }
}

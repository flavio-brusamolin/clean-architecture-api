import { Validation } from '../../presentation/protocols'
import { InvalidParamError } from '../../presentation/errors'
import { EmailValidator } from '../protocols/email-validator'

export class EmailValidation implements Validation {
  public constructor (
    private readonly fieldName: string,
    private readonly emailValidator: EmailValidator
  ) {}

  public validate (input: any): Error {
    if (!this.emailValidator.isValid(input[this.fieldName])) {
      return new InvalidParamError(this.fieldName)
    }
  }
}

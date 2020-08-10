import { Validation } from '../../presentation/protocols'
import { MissingParamError } from '../../presentation/errors'

export class RequiredFieldValidation implements Validation {
  public constructor (private readonly fieldName: string) {}

  public validate (input: any): Error {
    if (!input[this.fieldName]) {
      return new MissingParamError(this.fieldName)
    }
  }
}

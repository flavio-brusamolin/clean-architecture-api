import { Validation } from './validation'
import { MissingParamError } from '../../errors'

export class RequiredFieldValidation implements Validation {
  public constructor (private readonly fieldName: string) {
  }

  public validate (input: any): Error {
    if (!input[this.fieldName]) {
      return new MissingParamError(this.fieldName)
    }
  }
}

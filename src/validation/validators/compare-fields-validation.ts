import { Validation } from '../../presentation/protocols'
import { InvalidParamError } from '../../presentation/errors'

export class CompareFieldsValidation implements Validation {
  public constructor (
    private readonly fieldName: string,
    private readonly fieldToCompareName: string
  ) {}

  public validate (input: any): Error {
    if (input[this.fieldName] !== input[this.fieldToCompareName]) {
      return new InvalidParamError(this.fieldToCompareName)
    }
  }
}

import { Validation } from '../../presentation/protocols'

export class ValidationComposite implements Validation {
  public constructor (private readonly validations: Validation[]) {}

  public validate (input: any): Error {
    for (const validation of this.validations) {
      const error = validation.validate(input)

      if (error) {
        return error
      }
    }
  }
}

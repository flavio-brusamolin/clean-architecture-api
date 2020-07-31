export class DuplicateEmailError extends Error {
  public constructor () {
    super('The received email is already in use')
    this.name = 'DuplicateEmailError'
  }
}

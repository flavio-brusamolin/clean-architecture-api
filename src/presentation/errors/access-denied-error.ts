export class AccessDeniedError extends Error {
  public constructor () {
    super('Access denied')
    this.name = 'AccessDeniedError'
  }
}

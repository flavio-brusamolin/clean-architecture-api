export class ServerError extends Error {
  public constructor (stack: string) {
    super('Unexpected error')
    this.name = 'ServerError'
    this.stack = stack
  }
}

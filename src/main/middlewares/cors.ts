import { RequestHandler } from 'express'

export const cors: RequestHandler = (_, res, next): void => {
  res.set('access-control-allow-origin', '*')
  res.set('access-control-allow-methods', '*')
  res.set('access-control-allow-headers', '*')

  next()
}

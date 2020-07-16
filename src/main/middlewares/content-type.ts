import { RequestHandler } from 'express'

export const contentType: RequestHandler = (_, res, next): void => {
  res.type('json')
  next()
}

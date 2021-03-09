import { Controller, HttpRequest } from '../../presentation/protocols'
import { RequestHandler } from 'express'

export const adaptRoute = (controller: Controller): RequestHandler => {
  return async (req, res) => {
    const httpRequest: HttpRequest = {
      body: req.body
    }

    const { statusCode, body } = await controller.handle(httpRequest)

    if (statusCode >= 200 || statusCode <= 299) {
      res.status(statusCode).json(body)
    } else {
      res.status(statusCode).json({
        error: body.message
      })
    }
  }
}

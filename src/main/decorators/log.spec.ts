import { LogControllerDecorator } from './log'
import { HttpRequest, Controller, HttpResponse } from '../../presentation/protocols'

class ControllerStub implements Controller {
  public async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    return {
      statusCode: 200,
      body: {
        id: 'any_id',
        name: 'any_name',
        email: 'any_email@mail.com',
        password: 'hashed_password'
      }
    }
  }
}

describe('Log Controller Decorator', () => {
  test('Should call controller handle', async () => {
    const controllerStub = new ControllerStub()
    const sut = new LogControllerDecorator(controllerStub)

    const handleSpy = jest.spyOn(controllerStub, 'handle')

    const httpRequest: HttpRequest = {
      body: {
        name: 'any_name',
        email: 'any_email@mail.com',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }

    await sut.handle(httpRequest)

    expect(handleSpy).toBeCalledWith(httpRequest)
  })
})

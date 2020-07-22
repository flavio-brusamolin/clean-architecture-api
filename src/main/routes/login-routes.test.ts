import request from 'supertest'
import app from '../config/app'
import { MongoHelper } from '../../infra/db/mongodb/helpers/mongo-helper'
import { Collection } from 'mongodb'
import bcrypt from 'bcrypt'

let accountCollection: Collection

describe('Login Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    accountCollection = await MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })

  describe('POST /signup', () => {
    test('Should return 200 on signup', async () => {
      await request(app)
        .post('/api/signup')
        .send({
          name: 'Test',
          email: 'test@mail.com',
          password: 'test123',
          passwordConfirmation: 'test123'
        })
        .expect(200)
    })
  })

  describe('POST /login', () => {
    test('Should return 200 on login', async () => {
      await accountCollection.insertOne({
        name: 'Test',
        email: 'test@mail.com',
        password: await bcrypt.hash('test123', 12)
      })

      await request(app)
        .post('/api/login')
        .send({
          email: 'test@mail.com',
          password: 'test123'
        })
        .expect(200)
    })

    test('Should return 401 on login', async () => {
      await request(app)
        .post('/api/login')
        .send({
          email: 'test@mail.com',
          password: 'test123'
        })
        .expect(401)
    })
  })
})

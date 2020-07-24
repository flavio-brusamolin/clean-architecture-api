export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/clean-architecture',
  port: process.env.PORT || 8080,
  jwtSecret: process.env.JWT_SECRET || 'tK9$c12!a&&j0P'
}

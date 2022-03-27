module.exports = {
  HOST: 'localhost',
  USER: 'postgres',
  PASSWORD: 'Hindemombeya2000',
  DB: 'expressDB',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
}

const env = process.env.NODE_ENV || 'development'
const local = 'mongodb://localhost:27017'

console.log("env *****", env)

if (env === 'development') {
  process.env.PORT = 3000
  process.env.MONGODB_URI = `${local}/todo`
} else if (env === 'test') {
  process.env.PORT = 3000
  process.env.MONGODB_URI = `${local}/todoTest`
}
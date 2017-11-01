const { SHA256 } = require('crypto-js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const password = '123abc!'

// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash ) => {
//     console.log(hash)
//   })
// })

const hashed = "$2a$10$C8nN.sEF9m6wg.0SfoZ3KOBgQGey3yeB75eCDZyw2GGAMUdAJKRvS"

bcrypt.compare(password, hashed, (err, res) => {
  console.log(res)
})

// const data = {
//   id: 10
// }

// const token = jwt.sign(data, '123abc')
// console.log(token)

// const decoded = jwt.verify(token, '123abc')
// console.log(decoded)

// const message = 'I am user number 2'
// const hash = SHA256(message).toString()

// console.log(`Message: ${message}`)
// console.log(`HASH: ${hash}`)



// const token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }

// const resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString()

// if(resultHash === token.hash) {
//   console.log('Data was not changed')
// } else {
//    console.log('Data was changed !')
// }
// const MongoClient = require('mongodb').MongoClient
const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/dummy', (err, db) => {
  if (err) {
    console.log('Unable to connect to MongoDB Server')
    return
  }
  console.log('Connected to MongoDB Server')

  // db.collection('Todo').find({
  //    _id: ObjectID('59f7c4d0130b27179b8993ff')
  // }).toArray().then((docs) => {
  //   console.log(JSON.stringify(docs, undefined, 2))
  // }, (err) => {
  //   console.log('Unable to fetch todos', err)
  // })

  // db.collection('Todo').find({
  // }).count().then((count) => {

  //   console.log(`This is the count: ${JSON.stringify(count, undefined, 2)}`)
  // }, (err) => {
  //   console.log('Unable to fetch todos', err)
  // })
  

  db.collection('Users').find({name: "Bob"}).toArray().then((docs) => { 
    console.log(JSON.stringify(docs, undefined, 2))
  })

  db.close()
})
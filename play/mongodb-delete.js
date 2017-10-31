// const MongoClient = require('mongodb').MongoClient
const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/dummy', (err, db) => {
  if (err) {
    console.log('Unable to connect to MongoDB Server')
    return
  }
  console.log('Connected to MongoDB Server')

  db.collection('Todo').findOneAndDelete({ text: 'Walk a dog'}).then((result) => {
    console.log(result)
  })

  // db.close()
})
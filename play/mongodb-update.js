// const MongoClient = require('mongodb').MongoClient
const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/dummy', (err, db) => {
  if (err) {
    console.log('Unable to connect to MongoDB Server')
    return
  }
  console.log('Connected to MongoDB Server')

  db.collection('Todo').findOneAndUpdate({
    _id: new ObjectID("59f80d0e130b27179b899523")
  }, {
      $set: {
        completed: true,
      }
    }, {
      returnOriginal: false
    }).then(res => console.log(res))


  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("59f7c200bce6a04e092520e9")
  }, {
      $set: { name: 'Bao Phan' },
      $inc: { age: 1 }
    }, {
      returnOriginal: false
    }).then(res => console.log(res))

})
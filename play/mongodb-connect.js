const { MongoClient } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/dummy', (err, db) => {
  if (err) return console.log('Unable to connect to MongoDB Server')

  console.log('Connected to MongoDB Server')

  db.collection('Todo')
    .insertOne({
      text: 'Something Nice',
      completed: false
    }, (err, res) => {
      if (err) return console.log('Unable to insert todo', err)

      console.log(JSON.stringify(res.ops, undefined, 2))
    })

  db.close()
})
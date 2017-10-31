const { MongoClient } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/dummy', (err, db) => {
  if (err) return console.log('Unable to connect to MongoDB Server')
   
  console.log('Connected to MongoDB Server')

  db.collection('Users')
    .find({name: "Bob"})
    .toArray()
    .then((docs) => console.log(JSON.stringify(docs, undefined, 2)))

  db.close()
})
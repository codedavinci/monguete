const { MongoClient } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/dummy', (err, db) => {
  if (err) return console.log('Unable to connect to MongoDB Server')
    
  console.log('Connected to MongoDB Server')

  db.collection('Todo')
    .findOneAndDelete({ text: 'Walk a dog'})
    .then(res => console.log(result))

  // db.close()
})
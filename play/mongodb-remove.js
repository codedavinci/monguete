const { MongoClient } = require('mongodb')

const { mongoose } = require('../server/db/mongoose')
const { Todo } = require('../server/models/todo')

Todo.findByIdAndRemove("59f835ddb34aad5ade833e3e")
  .then(todo => console.log(todo))
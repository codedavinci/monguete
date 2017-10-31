const express = require('express')
const bodyParser = require('body-parser')
const { ObjectID } = require('mongodb')

const { mongoose } = require('./db/mongoose')
const { Todo } = require('./models/todo')
const { User } = require('./models/user')

const port = process.env.PORT || 3000
const app = express()

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  const todo = new Todo({ text: req.body.text })

  todo.save()
    .then(doc => res.send(doc))
    .catch(e => res.status(400).send(e))
})


app.get('/todos', (req, res) => {
  Todo.find()
    .then(todos => res.send({ todos }))
    .catch(e => res.status(400).send(e))
})

app.get('/todos/:id', (req, res) => {
  const id = req.params.id

  if (ObjectID.isValid(id)) {
    Todo.findById(id)
      .then(todo =>
        !todo ?
          res.status(404).send() :
          res.send({ todo }))
  } else {
    res.status(404).send()
  }
})

app.delete('/todos/:id', (req, res) => {
  const id = req.params.id

  if (ObjectID.isValid(id)) {
    Todo.findByIdAndRemove(id)
      .then(todo =>
        !todo ?
          res.status(404).send() :
          res.send({ todo }))
  } else {
    res.status(404).send()
  }
})


app.patch('/todos/:id', (req, res) => {
  const id = req.params.id
  const completedAt = null

  const { text, completed } = req.body
  const hidratedBody = { text, completed, completedAt }

  if(!ObjectID.isValid(id)) return res.status(404).send()

  if(typeof hidratedBody.completed === "boolean" && hidratedBody.completed) {
    hidratedBody.completedAt = new Date().getTime()
  } else {
    hidratedBody.completed = false 
  }
 
  console.log(hidratedBody)

  Todo.findByIdAndUpdate(id, { $set: hidratedBody }, {new: true })
    .then(todo => !todo ? res.status(404).send() : res.send({ todo }) )
    .catch(e => res.status(400).send())

})

app.listen(port, () => console.log(`Running on port ${port}`))

module.exports = { app }
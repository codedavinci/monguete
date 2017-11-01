
const jwt = require('jsonwebtoken')
const { ObjectID } = require('mongodb')
const { Todo } = require('../../models/todo')
const { User } = require('../../models/user')


const userOneID = new ObjectID()
const userTwoID = new ObjectID()
const users = [
  {
    _id: userOneID,
    email: 'eddie@live.com',
    password: 'password1',
    tokens: [{
      access: 'auth',
      token: jwt.sign({ _id: userOneID, access: 'auth' }, 'abc123').toString()
    }]
  },
  {
    _id: userTwoID,
    email: 'bao@live.com',
    password: 'password2',
  }

]


const todos = [
  { _id: new ObjectID(), text: 'First dummy todo' },
  {
    _id: new ObjectID(),
    text: 'Second dummy todo',
    completed: true,
    completedAt: 11041991
  },
]

const populateTodos = (done) => {
  Todo.remove({})
    .then(() => Todo.insertMany(todos))
    .then(() => done())
}


const populateUsers = (done) => {
  User.remove({})
    .then(() => {
      const user1 = new User(users[0]).save()
      const user2 = new User(users[1]).save()
      
      return Promise.all([user1, user2])
    }).then(() => done())
}


module.exports = {
  todos,
  users,
  populateUsers,
  populateTodos
}
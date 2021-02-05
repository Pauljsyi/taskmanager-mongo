//CRUD operations = create, read, update, delete

const mongodb = require('mongodb');
//give us access to the functions necessary to connect to the database so we can perform our CRUD operations.
const MongoClient = mongodb.MongoClient

//define the connection URL and the database we're trying to connect to.
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
      return console.log('Unable to connect to database')
    } 

    console.log('connection successful!')

})

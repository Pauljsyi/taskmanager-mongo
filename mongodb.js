//CRUD operations = create, read, update, delete

const mongodb = require('mongodb');
//give us access to the functions necessary to connect to the database so we can perform our CRUD operations.
const MongoClient = mongodb.MongoClient

//define the connection URL and the database we're trying to connect to.
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
      return console.log('Unable to connect to database')
    } 

    const db = client.db(databaseName)

    db.collection('users').insertOne({
        name: 'Paul Wall',
        age: 27
    }, (error, result) => {
        if (error) {
            return console.log('Unable to insert user')
        }

        console.log(result.ops)
    })

})

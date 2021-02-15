//CRUD operations = create, read, update, delete

// const mongodb = require('mongodb');
//give us access to the functions necessary to connect to the database so we can perform our CRUD operations.
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID} = require('mongodb')

// mongoDB library has defensive programming to add "new" keyword ObjectID().  
const id = new ObjectID();

//define the connection URL and the database we're trying to connect to.
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
      return console.log('Unable to connect to database')
    } 

    const db = client.db(databaseName)
//inserts one document into a collection
    // db.collection('users').insertOne({
    //     //fields
    //     name: 'Paul Wall',
    //     age: 27
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').findOne({ name: 'Ted' }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }

    //         console.log('user', user)
    // })

    db.collection('users').updateOne( 
        { name: "Pablo Escobar" },
        {
            $set: { "sex": "female", "status": "divorced"}
        }
    ).then((result) => {
        console.log(result.modifiedCount)
    }).catch((error) => {
        console.log(error)
    })

//inserts many documents into a collection
    db.collection('users').insertMany([
        {
            name: 'Bill',
            age: 17
        },
        {
            name: 'Ted',
            age: 17
        }
    ], (error, result) => {
        if (error) {
            return console.log('Unable to insert documents!')
        }

        console.log(result.ops)

    })



    db.collection('tasks').insertMany([
        {
            description: 'Mow the lawn',
            completed: true
        },
        {
            description: 'Feed dogs',
            completed: false
        },
        {
            description: 'vacuum house',
            completed: true
        }
    ], (error, result) => {
        if (error) {
            return console.log('Unable to insert tasks!')
        }

        console.log(result.ops)
    })

})

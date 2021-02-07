const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String
    },
    age: {
        type: Number,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number')
            }
        }
    },
    status: {
        type: String
    }
})

const me = new User({
    name: 'Jessie',
    age: -1,
    status: 'single'
})

me.save().then((me) => {
    console.log(me)
}).catch((error) => {
    console.log('Error', error)
})


// const Task = mongoose.model('Task', {
//     description: {
//         type: String
//     },
//     completed: {
//         type: Boolean
//     }
// })

// const task = new Task({
//     description: 'learning how to use Mongoose',
//     completed: false
// })

// task.save().then(() => {
//     console.log(task)
// }).catch(() => {
//     console.log(error)
// })
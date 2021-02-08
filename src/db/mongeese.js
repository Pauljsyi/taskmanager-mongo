const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            // console.log('value', value)
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
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
    email: '',
    status: 'single'
})

me.save().then((me) => {
    console.log(me)
}).catch((error) => {
    if (error.errors.email.value === ""){
       return console.log('email cannot be empty')
    } 
    console.log(' catch Error', error)
    // console.log('Exact Error:', error.errors.email.value)
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
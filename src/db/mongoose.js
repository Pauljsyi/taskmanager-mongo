const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager', {
    useNewUrlParser: true,
    useCreateIndex: true
})


const User = mongoose.model('users', {
    name: {
        type: String,
        required: true,
        trim: true
    }, 
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number')
            }
        }
    },
    password: {
        type: String,
        trim: true,
        validate(value) {
            // console.log('VALUE',value.length)
            if (value.length <= 6) {
                throw new Error('PASSWORD MUST BE LONGER THAN 6 CHARACTERS')
            } else if (value === allAnagrams("password")) {
                throw new Error('Password cannot be "password"')
            }
        }
    }
})

const me = new User({
    name: '   PaUl   ',
    password: 'password'
})

me.save().then((me) => {
    console.log(me)
}).catch((error) => {
    // if (error.errors.email.value === ""){
    //    return console.log('email cannot be empty')
    // } 
    console.log(' catch Error', error)
    // console.log('Exact Error:', error.errors.email.value)
})




// email: {
//     type: String,
//     // required: true,
//     trim: true,
//     lowercase: true,
//     validate(value) {
//         if (!validator.isEmail(value)) {
//             throw new Error('Email is invalid')
//         }
//     }
// }
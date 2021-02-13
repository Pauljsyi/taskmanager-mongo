const mongoose = require('mongoose')
const validator = require('validator')



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
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
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
            } else if (value === "password") {
                throw new Error('Password cannot be "password"')
            } else if (value === "PASSWORD") {
                throw new Error('Password cannot be "PASSWORD"')
            }

            
        }
    }
})

module.exports = User
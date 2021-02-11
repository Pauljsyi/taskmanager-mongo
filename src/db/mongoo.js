const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/Player-info', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const Player = mongoose.model('Player', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        validate(value){
            if (value < 6){
                throw new Error('password must be greater than 6 letters')
            } else if (value === "password"){
                throw new Error(`password cannot be ${value}`)
            } else if (value === "PASSWORD"){
                throw new Error(`password cannot be ${value}`)
            } 
            
        }
    }
})

const player = new Player({
    name: 'Player1',
    email: '    player@player.com',
    password: '123123123'
})

player.save().then(() => {
    console.log(player)
}).catch((error) => {
    console.log(error)
})
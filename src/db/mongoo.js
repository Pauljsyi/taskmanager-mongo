const mongoose = require('mongoose')
const validator = require('validator')
const passwordValidator = require('password-validator')

const schema = new passwordValidator();

schema
.is().min(6)                                    
.is().max(100)                                  
.has().uppercase()                              
.has().lowercase()                             
.has().digits(2)                                
.has().not().spaces()                          
.is().not().oneOf(['Passw0rd', 'Password123','password', 'PASSWORD', 'PaSsWoRd', 'pAsSwOrD']);


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
            console.log(schema.validate(value))
            if (schema.validate(value) === false) {
                throw new Error ('password does not meet requirement')
            } 
            // if (value < 6){
            //     throw new Error('password must be greater than 6 letters')
            // } else if (value === "password"){
            //     throw new Error(`password cannot be ${value}`)
            // } else if (value === "PASSWORD"){
            //     throw new Error(`password cannot be ${value}`)
            // } 
            
        }
    }
})

const player = new Player({
    name: 'Player1',
    email: '    player@player.com',
    password: 'aBc123!'
})

player.save().then(() => {
    console.log(player)
}).catch((error) => {
    console.log(error)
})
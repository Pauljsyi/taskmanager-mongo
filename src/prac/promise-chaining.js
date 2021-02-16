require('./../db/mongoose')
const User = require('./../models/user')



User.findByIdAndUpdate("60278605ca6257d42f1d42ff", {age: 1}).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 1})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})
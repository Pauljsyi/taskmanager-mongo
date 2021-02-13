const mongoose = require('mongoose')


mongoose.connect('mongodb://127.0.0.1:27017/task-manager', {
    useNewUrlParser: true,
    useCreateIndex: true
})









// const task = new Task({
//     description: "order take-out"
// })

// task.save().then(() => {
//     console.log(task)
// }).catch(() => {
//     console.log(error)
// })
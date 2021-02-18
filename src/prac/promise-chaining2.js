require("./../db/mongoose")
const Task = require("./../models/task")


Task.findByIdAndDelete("602caa5269ca902f74d425a7").then((task) => {
    console.log(task)
    return Task.countDocuments({completed: false})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})




const { request } = require('express')
const express = require('express')
require('./src/db/mongoose')
const Task = require('./src/models/task')
const User = require('./src/models/user')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post("/users", async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        res.status(202).send(user)
    } catch (e) {
        res.status(413).send(e)
    }
    

    // user.save().then(() => {
    //     res.send(user)
    // }).catch((e) => {
    //     res.status(400).send(e)
    // })
})

app.get("/users", async (req, res) => {
    try {
        const users = await User.find({})
        res.send(users)
    } catch (e) {
        res.status(500).send()
    }

    // User.find({}).then((users) => {
    //     res.send(users)
    // }).catch((e) => {
    //     res.status(500).send()
    // })
})

app.get("/users/:id", async (req, res) => {
    const _id = req.params.id

    try {
        const user = await User.findById(_id)
        if (!user) {
            return res.status(404).send()
        } 

        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
    
    // User.findById(_id).then((user) => {
    //     if (!user) {
    //         return res.status(404).send()
    //     }

    //     res.send(user)
    // }).catch((e) => {
    //     res.status(500).send()
    // })

})

app.post("/tasks", async (req, res) => {
    const task = await Task(req.body)

    try {
        await task.save()
        res.status(201).send(task)
    } catch (e) {
        res.status(400).send(e)
    }

    
    // task.save().then(() => {
    //     res.send(task)
    // }).catch((e) => {
    //     res.status(400).send(e)
    // })
})

app.get("/tasks", (req, res) => {
    Task.find({}).then((tasks) => {
        res.send(tasks)
    }).catch((e) => {
        res.status(500).send()
    })
})

app.get("/tasks/:id", (req, res) => {
    const _id = req.params.id

    Task.findById(_id).then((task) => {
        if (!task) {
            return res.status(404).send()
        }
        res.send(task)
    }).catch((e) => {
        res.status(500).send()
    })
})



app.listen(port, () => {
    console.log('Server is up on port ' + port)
})


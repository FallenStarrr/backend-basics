import express from 'express'
import mongoose from 'mongoose'
import router from './router.js'

const DB_URL = 'mmongodb+srv://user:user@cluster0.wd75q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = 5000

const app = express()

app.use(express.json())
app.use('/api', router)




async function startApp() {
    try {

        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT))

    } catch(e) {
            console.log(e)
    }
}

startApp() 


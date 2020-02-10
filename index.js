const express=require('express')
const app=express()
const BodyParser=require('body-parser')
const cors=require('cors')


const app = express()
const port = 4000

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res)=> {
    res.status(200).send('<h1>sugeng rawuh API</h1>')
})

const { movieRouter, categoryrouter, movcatrouter } = require('./routes')

app.use('/movie', movieRouter)
app.use('/category', categoryrouter)
app.use('/movcat', movcatrouter)


app.listen(port, ()=> console.log(`API di port ${port}`))
import express from 'express';
import 'dotenv/config';


const app = express()
app.use(express.json())

app.get('/', async ( req, res )=>{
    return res.status(200).send('Server is running')
})

const PORT = process.env.PORT || 8080
app.listen(PORT , ()=>{
    console.log("Server is up at " + PORT )
})
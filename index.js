import express from 'express';
import 'dotenv/config';
import passport from 'passport';
import AuthenticateRouter from './routes/authenticate.js';
import mongoose from 'mongoose';
import session from 'express-session';

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true ,  useUnifiedTopology: true })

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

// Configure session middleware
app.use(session({
    secret: process.env.SECRET_KEY, // Change this to a secure secret
    resave: false,
    saveUninitialized: false
  }));
  
  // Set up passport middleware
  app.use(passport.initialize());
  app.use(passport.session()); // Initialize passport session middleware

app.get('/', async ( req, res )=>{
    return res.status(200).send('Server is running')
})

app.use('/api', AuthenticateRouter)

const PORT = process.env.PORT || 8080
app.listen(PORT , ()=>{
    const db = mongoose.connection
    db.on('error', (error) => console.error(error))
    db.once('open', () => console.log('Connected to Database'))
    console.log("Server is up at " + PORT )
})
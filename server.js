import express from 'express'
import cors from 'cors'
import {config} from 'dotenv'
// import productsRouter from './routes/products.js'
// import usersRouter from './routes/users.js'
import bcrypt from 'bcrypt'
import cookieParser from 'cookie-parser'
import jwt from 'jsonwebtoken'
import{getUser,getUsers,deleteUser,addUser,checkUser} from './models/database.js'
config();

const PORT = process.env.PORT
const app = express()

app.use(cors())
app.use(express.json())

app.use(cookieParser())

app.get('/users',(req,res)=>{
    res.json(users)
});

app.get('/users/:id', (req, res) => {
    const id = req.params;
    res.json(users);
  });

  // app.use('/users',usersRouter)

const authenticate = (req,res,next) =>{
    let {cookie} = req.headers
    let tokenInHeader =cookie && cookie.split('=')[1]
    if(tokenInHeader===null) res.sendStatus(401)
    jwt.verify(tokenInHeader,process.env.SECRET_KEY,(err,user)=>{
if(err) return res.sendStatus(403)
req.user = user
next()
})
}




app.post('/users',(req,res)=>{
    const {username,password} =req.body
    bcrypt.hash(password,10, async (err,hash)=>{
        if(err) throw err
        await addUser(username,hash)
    })
    res.send({
        msg: "You have registered successfully"
    })
})

const auth = async (req,res,next) => {
    const {password,username} = req.body
    const hashedPassword = await chechUser(username)
    bcrypt.compare(password,hashedPassword, (err,result)=>{
        if(err) throw err
        if(result === true){
            const {username} = req.body
    const token = jwt.sign({username:username},
    process.env.SECRET_KEY,{expiresIn:'1h'})
    res.cookie('jwt',token)
            next()
        }else{
            res.send({msg:'The username or password is incorrect'})
        }
    })
}

app.post('/login',auth, (req,res)=>{
    res.send({
        msg:'You have logged in!!! YAY!'
    })
})

app.listen(PORT, ()=>{
    console.log('http://localhost:'+ PORT);
})

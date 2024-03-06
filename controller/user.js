import {getUser,getUsers,deleteUser,addUser} from '../models/database.js'

export default {
    getOne: async(req,res)=>{
        res.send(await getUser(+req.params.id))
    },
    getMore: async(req,res)=>{
        res.send(await getUsers())
    },
    getPost : async(req,res)=>{
        const {username,password} = req.body
        bcrypt.hash(password,10,async(err)=>{
            if (err) throw err
            const post = await addUser(username,password)
            res.send(await getUsers())

            const token = jwt.sign({ username, SECRET_KEY }, { expiresIn: '1h' });
        res.cookie('token', token, {httpOnly: true});
        res.send({
            msg: "Your account has been created successfully"
        })
    });
    },
    getDelete : async(req,res)=>{ 
        res.send(await deleteUser(+req.params.name))
        alert('user has been removed from the database')
        },
    // getPatch : async(req,res)=>{ 
    //     const [friend] = await getUser(+req.params.id)
    //     let {name,age} = req.body
    //     name? name=name: {name}= friend
    //     email? email=email: {email}= friend
    //     age? age=age: {age}=friend
      
    //     await editUser(name,email,age)
    //     res.json(await getUsers())
    //     }
}
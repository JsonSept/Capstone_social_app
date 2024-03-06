import mysql from 'mysql2'
import {config} from 'dotenv'
config()

const pool = mysql.createPool({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE
}).promise()

const getUsers = async()=>{
    const[result] = await pool.query(`
    SELECT * FROM
    users
    `)
    return result
}

const getUser = async(id) =>{
    const [result] = await pool.query(`
    SELECT *
    FROM users
    WHERE id = ?
    `,[id])
    return result
}
const deleteUser = async(id) => { // pool helps connect to the database
    const [result] = await pool.query(` 
        DELETE FROM users WHERE (id) = (?)
    `,[id])
    return result
}


const addUser = async(username,password)=>{
    await pool.query(`
    INSERT INTO users (username,password) VALUES (?,?)
    `,[username,password])
}

const checkUser = async (username) => {
    const [[{password}]] = await pool.query(`
    SELECT password FROM users WHERE username = ?
    `,[username])
    return password
}
// console.log(await addUser('Jason','hello123'))

export {getUser,getUsers,deleteUser,addUser,checkUser}
// Require packages
const express = require('express')
const cors = require('cors')

// App instance
const app = express()

// Setup Middleware
app.use(express.json())
app.use(cors())

// const userController = require ('./controller/userController')

//      const {getEmployees, addEmployee, deleteEmployee, updateEmployee, addUser} = require('./controller')

// app.get('/users', (req, res) => {
//     let {userid, useremail, password} = req.body

//     if (!useremail) {
//         res.status(400).send('This email is not recognized, please check your entry and then try again.')
//     } else {
//         userDb.push(req.body)
       
//         res.status(200).send("New user added, click 'Next' for more selection")
    
//     }
//     })

//     console.log(req.body)  
//     userDb.push(req.body)  
//     // let userid = req.body.userid
//     // let useremail = req.body.useremail          
//     // let password = req.body.password                                                                                         
//     // res.status(200).send(`Welcome to try the website, Click "Next" to start!`)
//     let users = []
//     app.put('/users/:useremail', (req,res) => {
//         let existingUseremail = req.params.useremail
//         let newUseremail = req.body.newUseremail
//         let password = req.body.password
//         for (let i = 0; i < users.length; i++) {
//             if(users[i].useremail === existinguseremail && users[i].password ===existingpassword) {
//                 res.status(200).send("Click 'Next' for more available options")
//             }
    
//             }
//             res.status(400).send("User not found, please create an account")
//         })

// // Endpoints

app.get('/employees', getEmployees)
app.getEmployees
app.post('/employees', addEmployee)
app.post('/users', addUser)

app.delete('/employees/:id', deleteEmployee)
app.put('/employees/:id', updateEmployee)

// Start server with app.listen

app.listen(4000, () => console.log('Server running on port 4000'))
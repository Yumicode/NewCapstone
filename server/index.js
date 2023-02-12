// Require packages
const express = require('express')
const cors = require('cors')

// App instance
const app = express()
// Setup Middleware
app.use(express.json())
app.use(cors())

const {getEmployees, addEmployee, deleteEmployee, updateEmployee, addUser} = require('./controller')

app.get('/employee', (req, res) => {
    res.status(200).send(employees)
})
let eeid = 6
app.post('/addEmployee', (req, res) => {
    const {firstname, lastname, ssn, picture, phone, email, address, city, state, gender, ontime} = req.body
    
    let addEmployee={
        eeid: eeid,
        firstname: firstname,
        lastname: lastname,
        ssn: ssn,	
        picture:picture,
        phone: phone,	
        email: email,
        address: address,
        city: city,
        state: state,
        gender: gender,
        ontime: ontime,
    }
    employees.push(newEmployee)

    eeid++

    res.status(200).send(employees)

})
app.get('/employee/:id', getEmployees)
app.post('/employee/:id', addEmployee)
app.delete('/employees/:id', deleteEmployee)
app.put('/employees/:id', updateEmployee)
app.post('/users', addUser)
// Start server with app.listen

app.listen(4000, () => console.log('Server running on port 4000'))
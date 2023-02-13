// Require packages
const express = require('express')
const cors = require('cors')

// App instance
const app = express()
// Setup Middleware
app.use(express.json())
app.use(cors())

const {getEmployee, addEmployee, deleteEmployee, updateEmployee, addUser} = require('./controller')

app.get('/employee', (req, res) => {
    const {firstname, lastname, ssn, picture, phone, email, address, city, state, gender, ontime} = req.body
    // let getEmployee={
    //     eeid: eeid,
    //     eefirstname: firstname,
    //     eelastname: lastname,
    //     eessn: ssn,	
    //     eepicture:picture,
    //     eephone: phone,	
    //     eeemail: email,
    //     eeaddress: address,
    //     eecity: city,
    //     eestate: state,
    //     eegender: gender,
    //     eeontime: ontime,
res.status(200).send(employees)
}),

app.get('/employees/:id', getEmployee),
app.post('/employees', addEmployee),
app.put('/employees/:id', updateEmployee),
app.delete('/employees/:id', deleteEmployee),
app.post('/users', addUser),
// Start server with app.listen

app.listen(4000, () => console.log('Server running on port 4000'));

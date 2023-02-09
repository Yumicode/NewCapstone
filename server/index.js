// Require packages
const express = require('express')
const cors = require('cors')

// App instance
const app = express()
// Setup Middleware
app.use(express.json())
app.use(cors())

const {getEmployees, addEmployee, deleteEmployee, updateEmployee, addUser} = require('./controller')
// app.post('/employees', addEmployee)
app.post('/users', addUser)

// app.delete('/employees/:id', deleteEmployee)
// app.put('/employees/:id', updateEmployee)

// Start server with app.listen

app.listen(4000, () => console.log('Server running on port 4000'))
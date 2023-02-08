// Require packages
const express = require('express')
const cors = require('cors')

// App instance
const app = express()

// Middleware
app.use(express.json())
app.use(cors())

// Endpoints
const {getEmployees, addEmployee, deleteEmployee, updateEmployee} = require('./controller')

app.get('/employees', getEmployees)
app.post('/employees', addEmployee)
app.delete('/employees/:id', deleteEmployee)
app.put('/employees/:id', updateEmployee)

// Start server with app.listen

app.listen(4000, () => console.log('What the heck on part 4000'))
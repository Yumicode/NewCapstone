let employees = require('./eeDb.json')
let userDb = require('./userDb.json')
let globalID = 6
let userID = 1

module.exports = {
    getEmployee:(req, res) => {
        console.log(req.body)
        res.send(employees)
       
        const {firstname, lastname, ssn, url, phone, email, address, city, state, gender } = req.body
        
        let getEmployee = {
            id: globalID,
            firstname: firstname,
            lastname: lastname,
            ssn: ssn,	
            picture:url,
            phone: phone,	
            email: email,
            address: address,
            city: city,
            state: state,
            gender: gender,
            rating: 0

        }

        employees.push(getEmployee)

        globalID++

        res.status(200).send(employees)

    },

    addEmployee:(req, res) => {
        const {firstname, lastname, ssn, url, phone, email, address, city, state, gender } = req.body
        
        let addEmployee = {
            id: globalID,
            firstname: firstname,
            lastname: lastname,
            ssn: ssn,	
            picture:url,
            phone: phone,	
            email: email,
            address: address,
            city: city,
            state: state,
            gender: gender,
            rating: 0

        }

        employees.push(addEmployee)

        globalID++

        res.status(200).send(employees)

 },

 updateEmployee:(req, res) => {
    let id = +req.params.obj
    const {firstname, lastname, ssn, url, phone, email, address, city, state, gender } = req.body
        
        let updateEmployee = {
            id: globalID,
            firstname: firstname,
            lastname: lastname,
            ssn: ssn,	
            picture:url,
            phone: phone,	
            email: email,
            address: address,
            city: city,
            state: state,
            gender: gender,
            rating: 0

        }

        employees.push(updateEmployee)

        globalID++

        res.status(200).send(employees)

 },

deleteEmployee:(req, res) => {
    let id = +req.params.id
    let index 
    

    for (let i = 0; i < employees.length; i++){
        if (employees[i].id ===id) {

        }
    }
     if (index !== undefined) {

        employees.splice(index, 1)
        res.status(200).send(employees)

} else {
    res.status (400).send('employee with id' + id + 'does not exist')
}
},

addUser:(req, res) => {
    console.log(req.body)
    const {email, password} = req.body

    let newUser = {
        userID: userID,
        email: email,
        password: password
   }
    userDb.push(newUser)
    userID++
    res.status(200).send(userDb)
}
}
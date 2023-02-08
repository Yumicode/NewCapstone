let employees = require('./db.json')

let globalID = 6

module.exports = {
    getEmployees:(req, res) => {
        res.status(200).send(employees)

    },
    addEmployee:(req, res) => {
        const {firstname, lastname, ssn, url, phone, email, address, city, state, gender } = req.body
        
        let newEmployee = {
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

        employees.push(newEmployee)

        globalID++

        res.status(200).send(employees)

    },

    deleteEmployee:(req, res) => {
        const index = employees.findIndex((el) => el.id === +req.params.id)
        
        employees.splice(index, 1)

        res.status(200).send(employees)

    },

    updateEmployee:(req, res) => {
        const index = employees.findIndex((el) => el.id === +req.params.id)

        const {type} = req.body

        if(type ==='ontime') {
            employees[index].rating++
        }else if(type !== 'ontime'){
            employees[index].rating--
        }

        res.status(200).send(employees)
}
}
const { getEmployees } = require("../server/controller");

//submit buttons
const getSubmit = document.getElementById('getEmployees');
const getParamsSubmit = document.getElementById('getParamsEmployees');  
const getQureySubmit = document.getElementById('getQueryEmployees');

//input
const paramsInput = document.getElementById('params-input');
const QueryInput = document.getElementById('query-input');

//response Section 
const responseSection = document.getElementsByClassName('response-area')[0];

//handle submits
getEmployees.addEventListener('click', () => {
    axios   
        .get('http://localhost:4000/employees')
        .then(res => getEmployees(res.data))
});

// getParamsEmployee.addEventListener('click', () => {
//     axios   
//         .get(`http://localhost:4000/employees/${paramsInput.value}`)
//         .then(res => addToView(res.data))
// });

// getQuaryEmployee.addEventListener('click', () => {
//     axios   
//         .get(`http://localhost:4000/employees${quaryInput.value}`)
//         .then(res => addToView(res.data))
// });

let AddEmployee = {
        eeid: 0,
        eefirstname: 'firstname',
        eelastname: 'lastname',
        eessn: ssn,	
        picture:url,
        phone: phone,	
        email: email,
        address: address,
        city: city,
        state: state,
        gender: gender,
        rating: 0

    }

axios.post('/employees').then()

let EmployeeAdd = {
    employeeid: 0,
    employeefirstname: 'firstname',
    employeelastname: 'lastname',
}

axios.post('/employees').then()

let employeeUpdate = {
    employeeid: 0,
    employeefirstname: 'firstname',
    employeelastname: 'lastname',
}

axios.put('/employees').then()

let employeedelete = {
    employeeid: 0,
    employeefirstname: 'firstname',
    employeelastname: 'lastname',
}

axios.delete('/employees').then()









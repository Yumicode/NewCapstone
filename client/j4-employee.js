// step 1) grab id from html file
const getForm = document.getElementById('getEmployees');
const getFirstame = document.getElementById('eeFirstName');  
const getSsn= document.getElementById('eeSsn');
const getPicture= document.getElementById('eePicture');
const getPhone= document.getElementById('eePhone');
const getEmail= document.getElementById('eeEmail');
const getAddress= document.getElementById('eeAddress');
const getCity= document.getElementById('eeCity');
const getState= document.getElementById('eeState');
const getGender= document.getElementById('eeGender');
const getRation= document.getElementById('eeRating')

// step 2) create callback function = function inside a function
function getEmployee (event) {
    event.preventDefault()
    let body = {
        
        firstname: eeFirstName.value, 
        lastname:  eeLastName.value,
        ssn: eeSsn.value,
        picture:  eePicture.value,
        phone: eePhone.value,
        email: eeEmail.value,
        address: eeAddress.value,
        city: eeCity.value,
        state: eeState.value,
        gender: eeGender.value,
        rating: eeRating.value,

    }

    axios.post('http://localhost:4000/employee', body)
    .then((res) => {
        console.log(res.data)
        alert(`the account was successfully retrived with this email: ${body.email}`) 
    })
    .catch(err => console.log(err))

}

// step 3) add event listener
getForm.addEventListener("submit", getEmployee)


getAllBtn.addEventListener('click', getAllEmployees)

const getAEmployee = (event)=> {
  console.log(event.target.id)
}         

for(let i = 0; i < employeeBtns.length; i++) {
    employeeBtns[i].addEventListener('click', getAEmployee)
}
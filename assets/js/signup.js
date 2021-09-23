import { register } from './auth.js'

let error = document.getElementById('authError')
let signUpButton = document.getElementById('signUpButton')
let emailField = document.getElementById('emailField')
let firstNameField = document.getElementById('firstNameField')
let lastNameField = document.getElementById('lastNameField')
let passwordField = document.getElementById('passwordField')

signUpButton.addEventListener('click', (e)=>{
    e.preventDefault()
    console.log('se')
    let firstName = firstNameField.value
    let lastName = lastNameField.value
    let email = emailField.value
    let password = passwordField.value
    e.preventDefault()
    let res = register(firstName, lastName, email, password)
    if (res.error) {
        error.innerText = res.error
    }
    alert('Account created successfully')
    // window.location.assign(`${window.location.protocol}`) = '/pages/userdashboard.html'
})
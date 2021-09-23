import { register } from './auth.js'

let signUpButton = document.getElementById('signUpButton')
let emailField = document.getElementById('emailField')
let firstNameField = document.getElementById('firstNameField')
let lastNameField = document.getElementById('lastNameField')
let passwordField = document.getElementById('passwordField')

signUpButton.addEventListener('click', (e)=>{
    e.preventDefault()
    let firstName = firstNameField.value
    let lastName = lastNameField.value
    let email = emailField.value
    let password = passwordField.value
    e.preventDefault()
    register(firstName, lastName, email, password)
    window.location.pathname = '/pages/userdashboard.html'
})
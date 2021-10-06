import { login } from './auth.js'

let error = document.getElementById('authError')
let loginButton = document.getElementById('loginButton')
let emailField = document.getElementById('emailField')
// let firstNameField = document.getElementById('firstNameField')
// let lastNameField = document.getElementById('lastNameField')
let passwordField = document.getElementById('passwordField')

loginButton.addEventListener('click', (e)=>{
    e.preventDefault()
    // console.log('se')
    let email = emailField.value
    let password = passwordField.value
    let res = login(email, password)
    // console.log(res)
    if (res.error) {
        error.innerText = res.error
    } else {
    // alert('Logged in')
    window.location.pathname = '/pages/userdashboard.html'
    }
})
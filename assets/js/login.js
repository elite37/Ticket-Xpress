const { login } = require("./auth")

let loginButton = document.getElementById('loginButton')
let emailField = document.getElementById('emailField')
let passwordField = document.getElementById('passwordField')

loginButton.addEventListener('click', (e)=>{
    email = emailField.value
    password = passwordField.value
    e.preventDefault()
    login(email, password)
    window.location.pathname = '/pages/userdashboard.html'
})
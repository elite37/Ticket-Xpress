import { storage } from './storage.js'

let users = JSON.parse(storage.getItem('users'))

export const getCurrentUser = () => {
    let user = JSON.parse(storage.getItem('user'))
    return user
}

export const login = (email, password) => {
    console.log('hit login')
    let user = users.find(u => u.email === email)
    if (!user) {
        console.log('erremailnot')
        return {'error': 'User with that email does not exist'}
    }
    if (user.password !== password) {
        console.log('errpasswnot')
        return {'error': 'Wrong password'}
    }
    console.log('login passed')
    return user
}

export const register = (firstName, lastName, email, password) => {
    let users = JSON.parse(storage.getItem('users') || '[]')
    console.log(users)
    let user = {
        firstName,
        lastName,
        email,
        password
    }
    if (!users.find(u => u.email === email)) {
        users.push(user)
        storage.setItem('user', JSON.stringify(user))
        storage.setItem('users', JSON.stringify(users))
        console.log('registered')
        return user
    } else {
        console.log('erremailis')
        return {error: 'User with that email already exists'}
    }
}
import { ACCESS_TOKEN, BASE_URL, USER_ID } from '@env'
import axios from 'axios'

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
})

const getUser = () => {
  return instance.get(`users/${USER_ID}`)
}

const getExercise = () => {
  return instance.get(`exercises`)
}

export { getUser, getExercise }

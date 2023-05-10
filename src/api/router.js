import { BASE_URL, ACCESS_TOKEN, USER_ID } from '@env'

class Router {
  constructor() {
    this.config = {
      method: 'GET',
      headers: {
        // Accept: "application/json",
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + ACCESS_TOKEN,
      },
    }
  }

  _fetchData = async (url) => {
    return new Promise(async (resolve, reject) => {
      fetch(url, this.config)
        .then((response) => response.json())
        .then((json) => {
          resolve(json)
        })
        .catch((error) => reject(error))
    })
  }

  getUser() {
    return this._fetchData(BASE_URL + 'users/' + USER_ID)
  }

  getExercises() {
    return this._fetchData(BASE_URL + 'exercises')
  }
}

export default new Router()

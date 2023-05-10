import Storage from '../api/storage'

class UserInformation extends Storage {
  #data = []
  constructor() {
    super('@user')
    this.getData()
      .then((data) => {
        if (data) this.#data = data
      })
      .catch((err) => console.log(err))
  }

  get = () => this.#data

  store(newData) {
    this.storeData(newData)
    this.#data = newData
  }

  clear() {
    this.clearData()
    this.#data = []
  }
}

export default new UserInformation()

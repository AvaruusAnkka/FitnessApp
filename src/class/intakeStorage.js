import Storage from '../api/storage'

import dummyData from '../example/intakeData'

class IntakeStorage extends Storage {
  #data = dummyData
  constructor() {
    super('@calories')
    this.getData()
      .then((data) => {
        if (data) this.#data = [...this.#data, ...data]
      })
      .catch((err) => console.log(err))
  }

  get = () => {
    return this.#data
  }

  store(newData) {
    this.storeData(newData)
    this.#data = newData
  }

  clear = () => {
    this.clearData()
    console.log('dummy', dummyData)
    this.#data = dummyData
  }
}

export default new IntakeStorage()

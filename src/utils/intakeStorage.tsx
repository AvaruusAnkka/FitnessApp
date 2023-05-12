import Storage from './storage'
import dummyData from '../data/intakeData'

class IntakeStorage extends Storage {
  storage = dummyData

  constructor() {
    super('@calories')
    this.getData()
      .then((data: any) => {
        if (data) this.storage = [...this.storage, ...data]
      })
      .catch((err: Error) => console.log(err))
  }

  get = (): any[] => {
    return this.storage
  }

  store = (newData: any): void => {
    this.storeData(newData)
    this.storage = newData
  }

  clear = (): void => {
    this.clearData()
    console.log('dummy', dummyData)
    this.storage = dummyData
  }
}

export default new IntakeStorage()

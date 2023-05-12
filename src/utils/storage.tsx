import AsyncStorage from '@react-native-async-storage/async-storage'

class Storage {
  private _key: string

  constructor(key: string) {
    this._key = key
  }

  storeData = async (value: string) => {
    try {
      AsyncStorage.setItem(this._key, JSON.stringify(value))
    } catch (e) {
      console.error(e)
    }
  }

  getData = async () => {
    return new Promise(async (resolve, reject) => {
      AsyncStorage.getItem(this._key)
        .then((value) => resolve(value != null ? JSON.parse(value) : null))
        .catch((e) => reject(e))
    })
  }

  clearData = async () => {
    try {
      AsyncStorage.clear()
    } catch (e) {
      console.error(e)
    } finally {
      console.log('Data cleared')
    }
  }
}

export default Storage

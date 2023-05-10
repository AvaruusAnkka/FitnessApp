import AsyncStorage from '@react-native-async-storage/async-storage'

class Storage {
  constructor(key) {
    this._key = key
  }

  storeData = async (value) => {
    try {
      AsyncStorage.setItem(this._key, JSON.stringify(value))
    } catch (e) {
      console.error(e)
    }
    // finally { console.log("Data stored"); }
  }

  getData = async () => {
    return new Promise(async (resolve, reject) => {
      AsyncStorage.getItem(this._key)
        .then((value) => resolve(value != null ? JSON.parse(value) : null))
        .catch((e) => reject(e))
    })
  }

  //TODO: Add function to change values (add user class)

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

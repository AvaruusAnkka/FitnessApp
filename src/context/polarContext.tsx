import React, { useState, useEffect } from 'react'
import { getUser, getExercise } from '../lib/axios'

import Loading from '../pages/loading'

interface PolarContextInterface {
  userData: any[]
  exerciseData: any[]
  reload: () => void
  refresh: boolean
}

const PolarContext = React.createContext<PolarContextInterface>({
  userData: [],
  exerciseData: [],
  reload: () => {},
  refresh: false,
})

const PolarContextProvider: React.FC<{ children: any }> = ({ children }) => {
  const [userData, setUserData] = useState<any>([])
  const [exerciseData, setExerciseData] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [refresh, setRefresh] = useState<boolean>(false)

  useEffect(() => {
    let didCancel = false

    const fetchData = async () => {
      try {
        const [user, exercises] = await Promise.all([getUser(), getExercise()])
        if (!didCancel) {
          setUserData(user.data)
          setExerciseData(exercises.data)
          setLoading(false)
        }
      } catch (e) {
        console.error('Context', e)
      }
    }

    fetchData()

    return () => {
      didCancel = true
    }
  }, [refresh])

  const reload = (): void => {
    setLoading(true)
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <PolarContext.Provider
          value={{ userData, exerciseData, reload, refresh }}
        >
          {children}
        </PolarContext.Provider>
      )}
    </>
  )
}

export { PolarContext, PolarContextProvider }

import React, { useState } from "react";
import Router from "../api/router";

import Loading from "../pages/loading";

const PolarContext = React.createContext();

const PolarContextProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);
  const [exerciseData, setExerciseData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);

  React.useEffect(() => {
    let didCancel = false;

    if (!didCancel) {
      Promise.all([Router.getUser(), Router.getExercises()])
        .then(([user, exercises]) => {
          setUserData(user);
          setExerciseData(exercises);
        })
        .catch((e) => console.error("Context", e))
        .finally(() => setLoading(false));
    }

    return () => (didCancel = true);
  }, [loading]);

  reload = () => {
    setLoading(true);
  };

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
  );
};

export { PolarContext, PolarContextProvider };

import React, { useState } from "react";

export const GlobalContext = React.createContext();

function GlobalState(props) {
  let initialState = {
    firstname: "",
    lastname: "",
  };
  const [state, setstate] = useState(initialState);

  const updateFirstName = (newName) => {
    console.log("Updating first name on global state");
    setstate({ ...state, firstname: newName });
  };
  const updateLastName = (newName) => {
    console.log("Updating last name on global state");
    setstate({ ...state, lastname: newName });
  };

  return (
    <GlobalContext.Provider
      value={{
        state,
        updateFirstName,
        updateLastName,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}

export default GlobalState;

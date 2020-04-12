import React from "react";
import GlobalState from "./GlobalState";
import UserUpdate from "./UserUpdate";

function App() {
  return (
    <GlobalState>
      <UserUpdate />
    </GlobalState>
  );
}

export default App;

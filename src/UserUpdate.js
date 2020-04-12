import React, { useContext } from "react";
import { GlobalContext } from "./GlobalState";

function UserUpdate() {
  const globalContext = useContext(GlobalContext);

  return (
    <div>
      <h4>User Update component</h4>
      <h4>{JSON.stringify(globalContext.state)}</h4>
      <button onClick={() => globalContext.updateFirstName("imtiaz")}>
        Update First Name
      </button>
      <button onClick={() => globalContext.updateLastName("kabir")}>
        Update Last Name
      </button>
    </div>
  );
}

export default UserUpdate;

import React, { useEffect, useRef, useState } from "react";
import { UserNumber } from "./components/AppContext";
import OtherComponent from "./components/OtherComponent";

const App = () => {
  // State
  const [myNumber, setMyNumber] = useState(0);
  // Ref
  const selectedNumber = useRef();
  // Effect (function abd []call back)
  useEffect(() => {
    console.log("Le nombre a changé");
  }, [myNumber]);

  return (
    <UserNumber.Provider value={myNumber}>
      <div>
        <p>{myNumber}</p>
        {/* verify type of response */}
        <button onClick={() => setMyNumber(Number(myNumber) + 1)}>
          Incrémenter + 1
        </button>
        <label htmlFor="">Numéro de départ</label>
        <input
          type="number"
          defaultValue={0}
          ref={selectedNumber}
          // Effect :
          // onChange={(e) => setMyNumber(e.target.value)}
          // Ref : (recommanded for input and form)
          onChange={() => setMyNumber(selectedNumber.current.value)}
          name=""
          id=""
        />
      </div>
      <OtherComponent />
    </UserNumber.Provider>
  );
};

export default App;

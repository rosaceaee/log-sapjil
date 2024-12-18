import React, { useState, useEffect, useContext, useMemo } from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./compo/Main";
import { Numbers } from "./compo/Numbers";
import AnimateExample from "./compo/AnimateExample";
function App() {
  const [num, setNum] = useState(0);

  // function Computed() {
  //   useMemo(() => {
  //     console.log("computed val" + num * 2);
  //     return num * 2;
  //   }, [num]);
  // }

  // Computed();

  // const computedValue = useMemo(() => {
  //   console.log("computed val" + num * 2);
  //   return num * 2;
  // }, [num]);

  // const ell = { num, setNum, computedValue };
  return (
    <div className="App">
      {/* <Main {...ell} /> */}
      <AnimateExample />
    </div>
  );
}

export default App;

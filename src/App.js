import "./App.scss";
import React, { useState } from "react";
import Mainpage from "./container/Mainpage/Mainpage";
import theam from "./container/them";
import Sidebar from "./container/Sidebar/Sidebar";
function App() {
  const [ThemeState, settheam] = useState(false);

  return (
    <div
      className="App"
      style={{
        backgroundColor:
          ThemeState === false ? theam.dark.background : theam.light.background,
        color: ThemeState === false ? theam.dark.text : theam.light.text,
      }}
    >
     <div className="cursor"></div>
      <Sidebar />
      <Mainpage />
    </div>
  );
}

export default App;

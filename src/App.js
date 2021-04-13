import React from "react";
import "./App.css";
import Random from "./components/Random_1";
import Tag from "./components/Tag_1";

const App = () => (
  <>
    <h1>Random Giffy</h1>
    <div className="main-container">
      <Random></Random>
      <Tag></Tag>
    </div>
  </>
);

export default App;

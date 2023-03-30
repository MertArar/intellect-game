import React from "react";
import "./App.css";
import Game from "./components/Game/Game";
import { Button } from "./components/Navbar/Button/Button";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Game />
    </div>
  );
};

export default App;

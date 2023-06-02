import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import GameForm from "./components/GameForm/GameForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hello</h1>
      <GameForm />
    </div>
  );
}

export default App;

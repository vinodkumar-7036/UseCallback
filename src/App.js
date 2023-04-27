import "./App.css";
import { useState, useMemo, useCallback } from "react";
import List from "./List";

function App() {
  const [number, setNumber] = useState("");
  const [theme, setTheme] = useState("");
  const handleDisplay = useCallback(() => {
    return [number, number - 1, number - 2];
  }, [number]);
  let themeStyle = {
    backgroundcolor: theme ? "red" : "black",
    color: theme ? "black" : "red",
  };
  return (
    <div className="App">
      <input
        type="number"
        placeholder="please enter number"
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => setTheme((prevTheme) => !prevTheme)}>
        Toggle Theme
      </button>
      <List handleDisplay={handleDisplay} themeStyle={themeStyle} />
    </div>
  );
}

export default App;

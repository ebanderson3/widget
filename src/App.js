import { useEffect, useState } from "react";
import { Clock } from "./components/clock.js"
import { SketchPicker } from "react-color";
import { SearchBar } from "./components/searchBar.js"
import "./App.css";

function App() {
  const [currentColor, setCurrentColor] = useState("")

  return (
    <div className="App">
      <SearchBar />
      <SketchPicker 
      color={currentColor}
      onChange={(event) => {setCurrentColor(event.hex)}}
      />
      <Clock color={currentColor}/>
    </div>
  );
}
export default App;
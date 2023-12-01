import { useEffect, useState } from "react";
import { Clock } from "./components/clock.js"
import { SketchPicker } from "react-color";
import { SearchBar } from "./components/searchBar.js"
import { background_list } from "./components/backgroundList.js"
import "./App.css";

function App() {
  const [currentColor, setCurrentColor] = useState("")

  let background_url = background_list[Math.floor(Math.random() * background_list.length)];

  return (
    <div className="App" style={{backgroundImage: `url(${background_url})`}}>
      <SketchPicker 
      color={currentColor}
      onChange={(event) => {setCurrentColor(event.hex)}}
      />
      <div className="mainContent">
      <Clock color={currentColor}/>
      <SearchBar />
      </div>
    </div>
  );
}
export default App;
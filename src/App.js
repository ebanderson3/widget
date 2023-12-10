import { useEffect, useState } from "react";
import { Clock } from "./components/clock.js"
import { SketchPicker } from "react-color";
import { SearchBar } from "./components/searchBar.js"
import { backgroundList } from "./components/backgroundList.js"
import "./App.css";
import { Menu} from "./components/menu.js";

function App() {
  const [currentColor, setCurrentColor] = useState("")
  const [backgroundUrl] = useState(backgroundList[Math.floor(Math.random() * backgroundList.length)]);


  return (
    <div className="App" >
      <div className="background" style={{backgroundImage: `url(${backgroundUrl})`}}></div>
      
      <SketchPicker 
      color={currentColor}
      onChange={(event) => {setCurrentColor(event.hex)}}
      />
      <div className="mainContent">
      <Clock color={currentColor}/>
      <SearchBar />
      <Menu />
      </div>
    </div>
  );
}
export default App;
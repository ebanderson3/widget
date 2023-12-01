import { useEffect, useState } from "react";
import { Clock } from "./components/clock.js"
import { SketchPicker } from "react-color";
import { SearchBar } from "./components/searchBar.js"
import "./App.css";

function App() {
  const [currentColor, setCurrentColor] = useState("")

  let background_url = "https://images.unsplash.com/photo-1617558541906-6512230bb94f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="App" style={{backgroundImage: `url(${background_url})`}}>
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
import { useEffect, useState } from "react";
import { Clock } from "./components/clock.js"
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  return (
    <div className="App">
      <Clock />
    </div>
  );
}
export default App;
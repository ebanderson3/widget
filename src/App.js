import { useEffect, useState } from "react";
import { Clock } from "./components/clock.js"
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // fetch(`/api/users`)
    //   .then((res) => res.json())
    //   .then((data) => setUsers(data));
  }, []);
  return (
    <div className="App">
      <Clock />
      <h1>Users</h1>
      <p>Hello World</p>
      <button type="submit"></button>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}
export default App;
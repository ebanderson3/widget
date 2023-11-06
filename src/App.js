import { useEffect, useState } from "react";
import "./App.css";
import logo from './logo.svg';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`/api/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div className="App">
      <h1>Users</h1>
      <p>~ Hello ~</p>
      <fieldset></fieldset>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}
export default App;


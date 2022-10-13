import { useState, useEffect } from 'react';
import Axios from 'axios';
import './App.css';

function App() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [username, setUsername] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers").then((res) => {
      setListOfUsers(res.data);
    })
  }, []);

  const createUser = () => {
    Axios.post("http://localhost:3001/createUser", {
      name,
      age,
      username
    }).then(response => {
      alert("USER CREATED");
    })
  };

  return (
    <div className="App">
      <div className="usersDisplay">
        {listOfUsers.map(user => {
          return(
            <div>
              <h3>Name: {user.name}</h3>
              <h4>Age: {user.age}</h4>
              <h4>Username: {user.username}</h4>
            </div>
          )
        })}
      </div>
      <form>
        <input 
          type="text" 
          placeholder="Name..." 
          onChange={e => {
            setName=(e.target.value)
          }}
        />
        <input 
          type="number" 
          placeholder="Age..." 
          onChange={e => {
            setAge=(e.target.value)
          }}
        />
        <input 
          type="text" 
          placeholder="Username..." 
          onChange={e => {
            setUsername=(e.target.value)
          }}
        />
        <input 
          type="submit" 
          value="Create User" 
          onClick={createUser} 
        />
      </form>
    </div>
  );
}

export default App;

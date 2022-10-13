import { useState, useEffect } from 'react';
import Axios from 'axios';
import './App.css';

function App() {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers").then((res) => {
      setListOfUsers(res.data);
    })
  }, []);

  const createUser = () => {
    Axios.post("http://localhost:3001/createUser").then((res) => {
      setListOfUsers(res.data);
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
        <input type="text" placeholder="Name..." />
        <input type="number" placeholder="Age..." />
        <input type="text" placeholder="Username..." />
        <input type="submit" value="Create User" onClick={createUser} />
      </form>
    </div>
  );
}

export default App;

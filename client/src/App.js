import { useState, useEffect } from 'react';
import Axios from 'axios';
import './App.css';

function App() {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers").then((res) => {
      setListOfUsers(res.data);
    })
  }, [])

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
    </div>
  );
}

export default App;

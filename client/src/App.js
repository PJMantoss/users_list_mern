import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [listOfUsers, setListOfUsers] = useState([]);

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

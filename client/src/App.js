import { useState } from 'react';
import './App.css';

function App() {
  const [listOfUsers, setListOfUsers] = useState([
    {id: 1, name: Jones, age: 38, userName: Joe}
  ]);

  return (
    <div className="App">
      <div className="usersDisplay">
        {listOfUsers.map(user => {
          return(
            <div>
              <h3>Name:</h3>
              <h4>Age:</h4>
              <h4>Username:</h4>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;

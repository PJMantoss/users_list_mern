import { useState } from 'react';
import './App.css';

function App() {
  const [listOfUsers, setListOfUsers] = useState([
    {id, name, age, userName}
  ]);

  return (
    <div className="App">
      <div className="usersDisplay"></div>
    </div>
  );
}

export default App;

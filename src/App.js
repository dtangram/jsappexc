import React, { useState } from 'react';
import logo from './logo.svg';
import backgrounds from './backgrounds.js';
import Select from 'react-select';
import './App.css';

const App = () => {
  const back = backgrounds.map(item => item);
  console.log(back);
  console.log(back[0].value);

  const [setBCKValue, bckValue] = useState(back.value);
  const [setBCKType, bckType] = useState(back.type);

  const handleSelectChange = (event) => {
    bckValue(event.value);
    bckType(event.type);
  };

  return (
    <div className="App-header">
      <img src={logo} alt="logo" />
      <video controls autoPlay muted>
        <source
          src={`../${setBCKValue}.${setBCKType}`}
          type={`video/${setBCKType}`}
        />
          Your browser does not support the video tag.
      </video>

      <img src={`../${setBCKValue}.${setBCKType}`} alt={back.value} />
      <Select
        name="select-bg"
        id="select-bg"
        placeholder="--Please choose an option--"
        options={back}
        onChange={handleSelectChange}
      />
    </div>
  );
}

export default App;

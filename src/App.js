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

  const chromeBrowser = navigator.userAgent.indexOf('Chrome') !== -1;
  const safariBrowser = navigator.userAgent.indexOf('Safari') !== -1;

  return (
    <div className="App-header">
      {safariBrowser && (
        <React.Fragment>
          <img src={logo} alt="logo" className="imgSafari" />
          <video controls autoPlay muted className="videoSafari">
            <source
              src={`../${setBCKValue}.${setBCKType}`}
              type={`video/${setBCKType}`}
            />
              Your browser does not support the video tag.
          </video>

          <img src={`../${setBCKValue}.${setBCKType}`} alt={back.value} className="imgSafari" />
        </React.Fragment>
      )}

      {chromeBrowser && (
        <React.Fragment>
          <img src={logo} alt="logo" className="logo" />
          {setBCKType === "mp4" ? (
            <video controls autoPlay muted className={"imgVid" + (setBCKValue ? "isActive" : "hide")}>
              <source
                src={`../${setBCKValue}.${setBCKType}`}
                type={`video/${setBCKType}`}
              />
                Your browser does not support the video tag.
            </video>
          )
          :
          (
            <img src={`../${setBCKValue}.${setBCKType}`} alt={back.value} className={"imgVid" + (setBCKValue ? "isActive" : "hide")} />
          )}
        </React.Fragment>
      )}

      <Select
        name="select-bg"
        id="select-bg"
        placeholder="--Please choose an option--"
        options={back}
        onChange={handleSelectChange}
      />

      {
        //   <img src={logo} alt="logo" className="logo" />
        //   <video controls autoPlay muted className={"imgVid " + (setBCKValue ? "isActive" : "")}>
        //     <source
        //       src={`../${setBCKValue}.${setBCKType}`}
        //       type={`video/${setBCKType}`}
        //       className="isActive"
        //     />
        //       Your browser does not support the video tag.
        //   </video>
        //
        //   <img src={`../${setBCKValue}.${setBCKType}`} alt={back.value} className={"imgVid " + (setBCKType === "mp4" ? "hide" : "isActive")} />
        //   <Select
        //     name="select-bg"
        //     id="select-bg"
        //     placeholder="--Please choose an option--"
        //     options={back}
        //     onChange={handleSelectChange}
        //   />
      }
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import useWeatherHook from './hooks/weatherHook';
import Ahmet from './ahmet';
import Mehmet from './mehmet';
import React, { useEffect, useState } from 'react'

function App() {

  const deger = useWeatherHook("ankara");
  const [data, setData] = useState("Ahmet");

  const functi = (val) => {
    console.log(val);
    setData(val + "123");
  };


  useEffect(() => {

  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React {deger}
        </a>
        <br>
        </br>
        <Ahmet title={data}></Ahmet>
        <br></br>
        <Mehmet func={functi} title="Mehmet"></Mehmet>
      </header>
    </div>
  );
}

export default App;

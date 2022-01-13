import React from "react";
import FirstComponent from "./component/FirstComponent";
import './App.css';
import Header from './component/common/header';
import Navigation from './component/common/navigation';

function App() {
  return (
    <div className="App">
        <FirstComponent/>
      <Header/>
      <Navigation/>
    </div>
  );
}

export default App;

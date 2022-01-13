import React from "react";
import './App.css';
import Header from './component/common/header';
import TrendingPost from "./component/TrendingPost";
import Navigation from './component/common/navigation';

function App() {
  return (
    <div className="App">
      <TrendingPost/>
    </div>
  );
}

export default App;

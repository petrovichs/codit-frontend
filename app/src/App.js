import React from 'react';
import './style/App.css';
import './style/bootstrap.min.css';
import Header from "./component/Header";
import Content from "./component/Content";

function App() {
  return (
    <div className="App">
        <Header/>
        <Content/>
    </div>
  );
}

export default App;

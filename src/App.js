import React from 'react'
import Editor from './components/editor'
import Widget from './components/widget'

function App() {
  return (
    <div className="wrapper">
      <div className="Wether-Container">
        <Editor />
        <div className="vl"></div>
        <Widget />
      </div>
    </div>
  );
}

export default App;

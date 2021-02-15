import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom';



function HelloWorld(){
  return React.createElement('h1', {}, "Hello World");
}

class Welcome extends React.Component{
  render(){
    return <h2>Welcome to the movie site</h2>;
  }
}

function App() {
  return (
    <div>
      <HelloWorld />
      <Welcome />
    </div>
    )
}

export default App;
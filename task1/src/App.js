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

class Description extends React.PureComponent {
  render() {
    const { movies_count, movies_added } = this.props;
    return (
      <div>
        <p>
          There are {movies_count} movies in the database.
          <br />
          There has been {movies_added} movies added for { new Date().getFullYear()}.
        </p>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <HelloWorld />
      <Welcome />
      <Description movies_count="28152" movies_added="89" />
    </div>
    )
}

export default App;
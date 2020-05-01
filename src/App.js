import React, {Component} from 'react';
import './App.css';
import Person from './components/Person'



class App extends Component{
  render(){
    return (
      <div className="App">
        <h1>I'm a react App</h1>
        <p>This is really working</p>
        <Person/>
      </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'I\'m a react App'))
  }
}

export default App;

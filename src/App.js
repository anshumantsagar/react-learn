import React, {Component} from 'react';
import './App.css';
import Person from './components/Person'



class App extends Component{
  state = {
    persons : [
      {name: 'Anshumant', age:22},
      {name: 'Anmol Dhiman', age:21},
      {name: 'Ashutosh', age:22}
    ]
  }
  someOtherState = 'some other value'

  switchNameHandler = (name) => {
    // console.log('button clicked')
    //DON'T DO THIS this.state.persons[0].name='Anshumant Sagar'
    this.setState({
      persons:[
        {name: name, age:22},
        {name: 'Anmol Dhiman', age:21},
        {name: 'Ashutosh', age:23}
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons:[
        {name: 'Anshumant', age:22},
        {name: event.target.value, age:21},
        {name: 'Ashutosh', age:23}
      ]
    })
  }

  render(){
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'point'
    }
    return (
      <div className="App">
        <h1>I'm a react App</h1>
        <p>This is really working</p>
        <button style={style} onClick={() => this.switchNameHandler('Anshu')}>Switch button</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.switchNameHandler.bind(this,'Anshumant Sagar')}>And my hobby is Dancing.</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.nameChangeHandler}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'I\'m a react App'))
  }
}

export default App;

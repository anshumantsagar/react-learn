import React, {Component} from 'react';
import './App.css';
import Person from './components/Person'



class App extends Component{
  state = {
    persons : [
      {id:'qwe',name: 'Anshumant', age:22},
      {id:'asd',name: 'Anmol Dhiman', age:21},
      {id:'zxc',name: 'Ashutosh', age:22}
    ],
    showPerson : false
  }
  someOtherState = 'some other value'

  deleteNameHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({persons:persons})
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })
    const person = {...this.state.persons[personIndex]}
    person.name = event.target.value
    const persons = [...this.state.persons]
    persons[personIndex] = person;
    this.setState({persons:persons})
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson : !doesShow})
  }

  render(){
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'point'
    }

    let persons = null

    if (this.state.showPerson){
      persons = (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person changed={(event) =>this.nameChangeHandler(event,person.id)} click={ () => this.deleteNameHandler(index)} key={person.id} name={person.name} age={person.age}/>
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>I'm a react App</h1>
        <p>This is really working</p>
        <button style={style} onClick={this.togglePersonHandler}>Toggle Person</button>
        {persons}
      </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'I\'m a react App'))
  }
}

export default App;

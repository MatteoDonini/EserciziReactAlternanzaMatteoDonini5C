import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
  	super();
    this.state = {
    	currentTodo: '',
      todos: []
    };
    
    this.onChangeText = this.onChangeText.bind(this);
    this.onSubmitText = this.onSubmitText.bind(this);
  }
  
  onChangeText(event) {
  	this.setState({ currentTodo: event.target.value });
	}
  
  onSubmitText(event) {
    //Non fa fare la solita cosa all'evento onSubmitText
    event.preventDefault()
    this.setState({
      currentTodo: '', //Il buffer per la scrittura delle to-do si svuota
      todos: [...this.state.todos, this.state.currentTodo]
    });
  }
  
  render() {
    return (
	  <div>
		<form onSubmit={this.onSubmitText}>
		  <input value={this.state.currentTodo} onChange={this.onChangeText} />
		  <button>Aggiungi alla lista</button>
		</form>
		<ol>
		{
		  this.state.todos.map((todo, index) => <li key={index}>{todo}</li>)
		}
		</ol>
	  </div>
    )
  }
}
export default App;

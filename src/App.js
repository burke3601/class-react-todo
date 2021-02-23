import React from 'react'
import './App.css';

import TodoForm from './TodoForm';
import TodoList from './TodoList'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todos: []
    }
  }
  render() {
    return (
    <div className="App">
      <TodoForm 
        addTodo={this._addTodo
        }
      />
      <TodoList todos={this.state.todos}/>
    </div>
    );
  }

  _addTodo = (todo) => {
    this.setState({
      todos: [            //set it to a new array
        ...this.state.todos,    //containing all the prvious todos
        todo                // plus the brand new todo 
      ]
    }, () => {
      console.log(`added new todo: ${todo.todo}`)
    })
  }

}

export default App;

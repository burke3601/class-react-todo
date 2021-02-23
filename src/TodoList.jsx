import React, { Component } from 'react';

class TodoList extends Component {
   

    render() {
        return (
            <ul>
                {this.props.todos.map((t, index) => (
                    <li>{t.todo} - {t.why}</li>
                ))}
            </ul>
        );
    }
    
}

export default TodoList

import React, { Component } from 'react';

class TodoForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todo: '',
            why: ''
        };
    }

    render() {
        return (
            <>
                <h1>New Todo</h1>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    this._submitTodo();
                }}>
                    <label>
                        todo:
                        <input 
                            value={this.state.todo}
                            onChange={(e) => {
                                this._setTodo(e.target.value);
                            }}
                        />
                    </label>
                    <br />
                    <label>
                        why?
                        <input 
                            value={this.state.why}
                            onChange={(e) => {
                                this._setWhy(e.target.value);
                            }}
                        />
                    </label>
                    <br />
                    <input type="submit" />
                </form>
            </>
        );
    }
    
    _submitTodo = () => {
        this.props.addTodo({
            ...this.state
        });
        this.setState({
            todo: '',
            why: ''
        });
    }
    _setTodo = (todo) => {
        this.setState({
            todo
        }, () => {
            console.log(`updated todo text: ${this.state.todo}`)
        });
    }
    _setWhy = (why) => {
        this.setState({
            why
        }, () => {
            console.log(`updated why text: ${this.state.why}`);
        });
    }
}

export default TodoForm;
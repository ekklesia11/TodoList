import React from 'react';

class TodoListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            done: false,
        }
        this.crossoutDone = this.crossoutDone.bind(this);
    }
    
    crossoutDone() {
        this.setState({
            done: !this.state.done,
        })
    }

    render() {
        const style = {
            textDecoration: this.state.done ? 'line-through' : 'none'
        };
    
        return (
            <li style={style} onClick={this.crossoutDone} >{this.props.todoList}</li>
        );
    }

}

export default TodoListItem;
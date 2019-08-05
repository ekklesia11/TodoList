import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class TodoListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            done: false,
        };
    }

    onListItemClick = () => (
        this.setState({
            done: !this.state.done,
        })
    )

    render() {
        const style = {
            textDecoration: this.state.done ? 'line-through' : 'none'
        };

        return (
            <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.todoList}</li>
        );
    }
}

const TodoList = (props) => (
    <div className="todoListMain">
        <h2>To Do List</h2>
        <ul> 
            {props.todos.map(todo => 
            <TodoListItem todoList={todo}/>
            )}
        </ul>
    </div>
)


ReactDOM.render(
    <TodoList todos={['wake up ealry morning', 'eat breakfast', 'toy-problem', 'sprint pair programming', 'TIL blogging', 'dors bien']} />,
    document.getElementById('root')
);